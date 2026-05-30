import { getDate } from "./src/getDate/index.ts";
import { getDay } from "./src/getDay/index.ts";
import { getDaysInMonth } from "./src/getDaysInMonth/index.ts";
import { getMonth } from "./src/getMonth/index.ts";
import { isValid } from "./src/isValid/index.ts";
import { newDate } from "./src/newDate/index.ts";

const WEEKDAY_CODES = ["ye", "do", "se", "ch", "pa", "jo", "sh"];
const GREGORIAN_MONTH_CODES = [
	"JAN",
	"FEB",
	"MAR",
	"APR",
	"MAY",
	"JUN",
	"JUL",
	"AUG",
	"SEP",
	"OCT",
	"NOV",
	"DEC",
];

const JALALI_MONTH_CODES = [
	"FAR",
	"ORD",
	"KHO",
	"TIR",
	"MOR",
	"SHA",
	"MEH",
	"ABA",
	"AZA",
	"DAY",
	"BAH",
	"ESF",
];

type ParsedInput =
	| { kind: "month"; year: number; month: number }
	| { kind: "day"; year: number; month: number; day: number };

type CalendarMode = "j" | "g";

function pad(value: number): string {
	return String(value).padStart(2, "0");
}

function formatHeader(year: number, month: number, day?: number): string {
	const base = `${year}-${pad(month)}`;
	return day == null ? base : `${base}-${pad(day)}`;
}

function fail(message: string): never {
	console.error(message);
	process.exit(1);
}

function showHelp(): void {
	console.log(`Usage: node show.ts [options] YYYY-MM [YYYY-MM ...]\n       node show.ts [options] YYYY-MM-DD\n\nOptions:\n  -j         Treat inputs as Jalali dates (default)\n  -g         Treat inputs as Gregorian dates\n  -h, --help Show this help message\n\nExamples:\n  node show.ts 1405-01\n  node show.ts -j 1405-01\n  node show.ts -g 2026-03\n  node show.ts 1405-01 1405-02\n  node show.ts -g 2026-03-21`);
}

function isHelpFlag(input: string): boolean {
	return input === "-h" || input === "--help" || input === "help";
}

function parseArgs(args: string[]): { mode: CalendarMode; inputs: string[] } {
	let mode: CalendarMode = "j";
	const inputs: string[] = [];

	for (const arg of args) {
		if (arg === "-j") {
			if (mode === "g") {
				fail("Use only one of -j or -g.");
			}

			mode = "j";
			continue;
		}

		if (arg === "-g") {
			if (mode === "j" && inputs.length > 0) {
				fail("Place -g before date arguments.");
			}

			if (mode === "g") {
				continue;
			}

			if (args.includes("-j")) {
				fail("Use only one of -j or -g.");
			}

			mode = "g";
			continue;
		}

		inputs.push(arg);
	}

	return { mode, inputs };
}

function parseInput(input: string): ParsedInput {
	const match = /^(\d+)-(\d{2})(?:-(\d{2}))?$/.exec(input);

	if (!match) {
		fail(`Invalid input \"${input}\". Use YYYY-MM or YYYY-MM-DD.`);
	}

	const year = Number(match[1]);
	const month = Number(match[2]);
	const day = match[3] == null ? undefined : Number(match[3]);

	if (month < 1 || month > 12) {
		fail(`Invalid month in \"${input}\".`);
	}

	if (day == null) {
		return { kind: "month", year, month };
	}

	if (day < 1 || day > 31) {
		fail(`Invalid day in \"${input}\".`);
	}

	return { kind: "day", year, month, day };
}

function createMonthStart(year: number, month: number): Date {
	const date = newDate(year, month - 1, 1);

	if (!isValid(date)) {
		fail(`Invalid Jalali month ${formatHeader(year, month)}.`);
	}

	return date;
}

function createDay(year: number, month: number, day: number): Date {
	const monthStart = createMonthStart(year, month);
	const daysInMonth = getDaysInMonth(monthStart);

	if (day > daysInMonth) {
		fail(`Invalid Jalali day ${formatHeader(year, month, day)}.`);
	}

	return newDate(year, month - 1, day);
}

function createGregorianMonthStart(year: number, month: number): Date {
	const date = new Date(year, month - 1, 1);

	if (!isValid(date) || date.getFullYear() !== year || date.getMonth() !== month - 1) {
		fail(`Invalid Gregorian month ${formatHeader(year, month)}.`);
	}

	return date;
}

function createGregorianDay(year: number, month: number, day: number): Date {
	const monthStart = createGregorianMonthStart(year, month);
	const daysInMonth = new Date(year, month, 0).getDate();

	if (day > daysInMonth) {
		fail(`Invalid Gregorian day ${formatHeader(year, month, day)}.`);
	}

	const date = new Date(year, month - 1, day);

	if (!isValid(date) || date.getTime() < monthStart.getTime()) {
		fail(`Invalid Gregorian day ${formatHeader(year, month, day)}.`);
	}

	return date;
}

function formatGregorian(date: Date): string {
	return `${GREGORIAN_MONTH_CODES[date.getMonth()]}-${pad(date.getDate())}`;
}

function formatJalali(date: Date): string {
	return `${JALALI_MONTH_CODES[getMonth(date)]}-${pad(getDate(date))}`;
}

function formatLine(date: Date): string {
	return `${WEEKDAY_CODES[getDay(date)]}, ${formatJalali(date)} ${formatGregorian(date)}`;
}

function renderJalaliMonth(year: number, month: number): string {
	const monthStart = createMonthStart(year, month);
	const daysInMonth = getDaysInMonth(monthStart);
	const lines = [formatHeader(year, month)];

	for (let day = 1; day <= daysInMonth; day += 1) {
		lines.push(formatLine(newDate(year, month - 1, day)));
	}

	return lines.join("\n");
}

function renderGregorianMonth(year: number, month: number): string {
	const monthStart = createGregorianMonthStart(year, month);
	const daysInMonth = new Date(year, month, 0).getDate();
	const lines = [formatHeader(year, month)];

	for (let day = 1; day <= daysInMonth; day += 1) {
		lines.push(formatLine(new Date(year, month - 1, day)));
	}

	if (!isValid(monthStart)) {
		fail(`Invalid Gregorian month ${formatHeader(year, month)}.`);
	}

	return lines.join("\n");
}

function renderJalaliDay(year: number, month: number, day: number): string {
	return [formatHeader(year, month, day), formatLine(createDay(year, month, day))].join("\n");
}

function renderGregorianDay(year: number, month: number, day: number): string {
	return [formatHeader(year, month, day), formatLine(createGregorianDay(year, month, day))].join("\n");
}

function renderInput(mode: CalendarMode, item: ParsedInput): string {
	if (mode === "j") {
		return item.kind === "month"
			? renderJalaliMonth(item.year, item.month)
			: renderJalaliDay(item.year, item.month, item.day);
	}

	return item.kind === "month"
		? renderGregorianMonth(item.year, item.month)
		: renderGregorianDay(item.year, item.month, item.day);
}

function main(): void {
	const args = process.argv.slice(2);

	if (args.some(isHelpFlag)) {
		showHelp();
		return;
	}

	const { mode, inputs } = parseArgs(args);

	if (inputs.length === 0) {
		showHelp();
		process.exit(1);
	}

	const output = inputs
		.map(parseInput)
		.map((item) => renderInput(mode, item))
		.join("\n\n");

	console.log(output);
}

main();