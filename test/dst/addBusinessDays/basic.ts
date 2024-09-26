// This is basic DST test for addBusinessDays

import assert from "assert";
import { addBusinessDays } from "../../../src/addBusinessDays/index.js";

if (process.env.TZ !== "America/Santiago")
  throw new Error("The test must be run with TZ=America/Santiago");

if (parseInt(process.version.match(/^v(\d+)\./)?.[1] || "0") < 10)
  throw new Error("The test must be run on Node.js version >= 10");

console.log(addBusinessDays(new Date(2014, 8 /* Sep */, 1), 12).toString());

assert.deepStrictEqual(
  // new Date(2014, 8, 7) is the DST day
  addBusinessDays(new Date(2014, 8 /* Sep */, 1), 12).toString(),
  "Mon Sep 15 2014 00:00:00 GMT-0300 (Chile Summer Time)",
);
