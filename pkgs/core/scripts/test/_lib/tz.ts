import { $ } from "bun";
import { availableParallelism } from "node:os";
import { promiseQueue } from "./queue.ts";

const failedTimeZones: Record<string, string> = {};

export async function testTimeZone(timeZone: string) {
  try {
    await $`TZ=${timeZone} bun test ./src/**/test.ts`.quiet();
    console.log(`🟢 ${timeZone}: OK`);
  } catch (err: any) {
    failedTimeZones[timeZone] = err.stderr.toString();
    console.log(`🔴 ${timeZone}: FAIL`);
  }
}

export async function testTimeZones(timeZones: string[]) {
  await promiseQueue(
    timeZones.map((timeZone) => () => testTimeZone(timeZone)),
    availableParallelism(),
  );

  console.log("");

  const failedEntries = Object.entries(failedTimeZones);

  if (failedEntries.length) {
    failedEntries.forEach(([timeZone, error]) => {
      console.log(`🔴 ${timeZone}`);
      console.log("=== stderr ==================================");
      console.log(error);
      console.log("=============================================\n");
    });

    console.log(`🔴 ${failedEntries.length} time zones failed:\n`);

    failedEntries.forEach(([timeZone]) => {
      console.log(`- ${timeZone} (\`TZ=${timeZone} pnpm vitest run\`)`);
    });

    process.exit(1);
  }

  console.log(`🟢 All ${timeZones.length} time zones passed!`);
}
