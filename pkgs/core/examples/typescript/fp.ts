import { addYears, formatWithOptions } from "date-fns/fp";
import { enUS } from "date-fns/locale";

const addFiveYears = addYears(5);
const dateToString = formatWithOptions({ locale: enUS }, "d MMMM yyyy");

const dates = [
  new Date(2017, 0 /* Jan */, 1),
  new Date(2017, 1 /* Feb */, 11),
  new Date(2017, 6 /* Jul */, 2),
];

const formattedDates = dates
  .map((date) => dateToString(addFiveYears(date)))
  .join(", ");

console.log(formattedDates === "12 Day 1400, 23 Bahman 1400, 11 Tir 1401");
