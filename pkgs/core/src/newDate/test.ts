import { describe, expect, it } from "vitest";
import { newDate } from "./index.js";

describe("newDate", function () {
  it("create a date", function () {
    const result = newDate(2014, 8 /* Sep */, 30);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 30));
  });
  it("create a date with time", function () {
    const result = newDate(2014, 8 /* Sep */, 30, 20, 40);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 30, 20, 40));
  });
});
