import { expect, assert, describe, it } from "vitest";
import { toDate } from "./index.js";

describe("toDate", () => {
  describe("date argument", () => {
    it("returns a clone of the given date", () => {
      const date = /* 1394/10/11 */ new Date(2016, 0, 1);
      const dateClone = toDate(date);
      dateClone.setFullYear(2015);
      expect(date).toEqual(/* 1394/10/11 */ new Date(2016, 0, 1));
    });
  });

  describe("timestamp argument", () => {
    it("creates a date from the timestamp", () => {
      const timestamp = /* 1394/10/11 */ new Date(
        2016,
        0,
        1,
        23,
        30,
        45,
        123,
      ).getTime();
      const result = toDate(timestamp);
      expect(result).toEqual(
        /* 1394/10/11 */ new Date(2016, 0, 1, 23, 30, 45, 123),
      );
    });
  });

  describe("invalid argument", () => {
    it("returns Invalid Date if argument is NaN", () => {
      const result = toDate(NaN);
      assert(result instanceof Date);
      assert(isNaN(result.getTime()));
    });

    it("returns Invalid Date if argument is Invalid Date", () => {
      const result = toDate(new Date(NaN));
      assert(result instanceof Date);
      assert(isNaN(result.getTime()));
    });
  });
});
