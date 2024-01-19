const { addYears } = require("date-fns/fp/addYears");
const { formatWithOptions } = require("date-fns/fp/formatWithOptions");
const { parseISO } = require("date-fns/fp/parseISO");
const { en } = require("date-fns/locale/en-US");

const compose = require("lodash/fp/compose");
const toUpper = require("lodash/fp/toUpper");
const isEqual = require("lodash/isEqual");

const addFiveYears = addYears(5);
const dateToString = formatWithOptions({ locale: en }, "d MMMM yyyy");

const dates = ["2017-01-01", "2017-02-11", "2017-07-02"];

const formattedDates = dates.map(
  compose(toUpper, dateToString, addFiveYears, parseISO),
);

console.log(
  isEqual(formattedDates, ["12 دی 1400", "23 بهمن 1400", "11 تیر 1401"]),
);
