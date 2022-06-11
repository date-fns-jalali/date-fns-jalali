import { describe, it, expect } from "vitest";
import { UTCDate } from ".";

describe("UTCDate", () => {
  it("creates date in UTC", () => {
    expect(new UTCDate(1987, 1, 11).getTime()).toBe(
      new Date(1987, 1, 11, 5, 30).getTime()
    );
  });

  describe("getDate", () => {
    it("returns UTC date", () => {
      expect(new UTCDate(1987, 1, 11, 23).getDate()).toBe(11);
    });
  });

  describe("getDay", () => {
    it("returns UTC day", () => {
      expect(new UTCDate(1987, 1, 11, 23).getDay()).toBe(3);
    });
  });

  describe("getFullYear", () => {
    it("returns UTC full year", () => {
      expect(new UTCDate(1999, 11, 31, 23).getFullYear()).toBe(1999);
    });
  });

  describe("getHours", () => {
    it("returns UTC hours", () => {
      expect(new UTCDate(1987, 1, 11, 3).getHours()).toBe(3);
    });
  });

  describe("getMilliseconds()", () => {
    it.todo("returns UTC milliseconds");
  });

  describe("getMinutes()", () => {
    it("returns UTC minutes", () => {
      expect(new UTCDate(1987, 1, 11, 3, 30).getMinutes()).toBe(30);
    });
  });

  describe("getMonth", () => {
    it("returns UTC month", () => {
      expect(new UTCDate(1999, 11, 31, 23).getMonth()).toBe(11);
    });
  });

  describe("getSeconds", () => {
    it.todo("returns UTC seconds");
  });
});
