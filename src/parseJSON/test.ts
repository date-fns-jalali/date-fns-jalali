import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { parseJSON } from "./index.js";

describe("parseJSON", () => {
  it("parses a formatted new Date() back to UTC - issue 2149", () => {
    const jsonFormat = "2021-03-07T15:13:58.172+03:30";
    const parsedDate = parseJSON(jsonFormat);
    expect(parsedDate.toISOString()).toBe("2021-03-07T11:43:58.172Z");
  });

  it("parses a formatted date with an hour of offset back to UTC - issue 2149", () => {
    const date = /* 1399/10/20 */ "2021-01-09T13:18:10.873+01:00";
    const expectedDate = new Date(/* 1399/10/20 */ "2021-01-09T12:18:10.873Z");
    const parsedDate = parseJSON(date);
    expect(parsedDate.toISOString()).toBe(expectedDate.toISOString());
  });

  it("parses a formatted date with 2 hours of offset back to UTC - issue 2149", () => {
    const date = /* 1399/10/20 */ "2021-01-09T13:18:10.873+02:00";
    const expectedDate = new Date(/* 1399/10/20 */ "2021-01-09T11:18:10.873Z");
    const parsedDate = parseJSON(date);
    expect(parsedDate.toISOString()).toBe(expectedDate.toISOString());
  });

  it("parses a formatted date with -2 hours of offset back to UTC - issue 2149", () => {
    const date = /* 1399/10/20 */ "2021-01-09T13:18:10.873-02:00";
    const expectedDate = new Date(/* 1399/10/20 */ "2021-01-09T15:18:10.873Z");
    const parsedDate = parseJSON(date);
    expect(parsedDate.toISOString()).toBe(expectedDate.toISOString());
  });

  it("parses a formatted Indian Standard Time in Asia/Kolkata with +5:30 hours of offset back to UTC - issue 2149", () => {
    const date = /* 1399/11/27 */ "2021-02-15T02:56:04.678+05:30";
    const expectedDate = new Date(/* 1399/11/26 */ "2021-02-14T21:26:04.678Z");
    const parsedDate = parseJSON(date);
    expect(parsedDate.toISOString()).toBe(expectedDate.toISOString());
  });

  it("parses a formatted time in Asia/Kathmandu with +5:45 hours of offset back to UTC - issue 2149", () => {
    const date = /* 1399/11/27 */ "2021-02-15T17:45:00.900+05:45";
    const expectedDate = new Date(/* 1399/11/27 */ "2021-02-15T12:00:00.900Z");
    const parsedDate = parseJSON(date);
    expect(parsedDate.toISOString()).toBe(expectedDate.toISOString());
  });

  it("parses a fully formed ISO date with Z", () => {
    const date = /* 1378/12/25 */ "2000-03-15T05:20:10.123Z";
    const parsedDate = parseJSON(date);
    expect(parsedDate.toISOString()).toBe(date);
  });

  it("parses a fully formed ISO date with Z without ms", () => {
    const date = /* 1378/12/25 */ "2000-03-15T05:20:10Z";
    const expectedDate = /* 1378/12/25 */ "2000-03-15T05:20:10.000Z";
    const parsedDate = parseJSON(date);
    expect(parsedDate.toISOString()).toBe(expectedDate);
  });

  it("parses a fully formed ISO date with zero offset", () => {
    const zeroOffset = /* 1378/12/25 */ "2000-03-15T05:20:10+00:00";
    const expectedDate = /* 1378/12/25 */ "2000-03-15T05:20:10.000Z";
    const parsedDate = parseJSON(zeroOffset);
    expect(parsedDate.toISOString()).toBe(expectedDate);
  });

  it("parses a fully formed ISO date with zero offset without colon", () => {
    const zeroOffset = /* 1378/12/25 */ "2000-03-15T05:20:10+0000";
    const expectedDate = /* 1378/12/25 */ "2000-03-15T05:20:10.000Z";
    const parsedDate = parseJSON(zeroOffset);
    expect(parsedDate.toISOString()).toBe(expectedDate);
  });

  it("parses a fully formed ISO date without Z", () => {
    const date = /* 1378/12/25 */ "2000-03-15T05:20:10.123";
    const expectedDate = /* 1378/12/25 */ "2000-03-15T05:20:10.123Z";
    const parsedDate = parseJSON(date);
    expect(parsedDate.toISOString()).toBe(expectedDate);
  });

  it("parses a fully formed ISO date without Z and with 6-digit millisecond part", () => {
    const date = /* 1378/12/25 */ "2000-03-15T05:20:10.123456";
    const expectedDate = /* 1378/12/25 */ "2000-03-15T05:20:10.123Z";
    const parsedDate = parseJSON(date);
    expect(parsedDate.toISOString()).toBe(expectedDate);
  });

  it("parses a fully formed ISO with 1-digit millisecond part", () => {
    const date = /* 1378/12/25 */ "2000-03-15T05:20:10.1Z";
    const expectedDate = /* 1378/12/25 */ "2000-03-15T05:20:10.100Z";
    const parsedDate = parseJSON(date);
    expect(parsedDate.toISOString()).toBe(expectedDate);
  });

  it("parses a fully formed ISO with 2-digit millisecond part", () => {
    const date = /* 1378/12/25 */ "2000-03-15T05:20:10.12Z";
    const expectedDate = /* 1378/12/25 */ "2000-03-15T05:20:10.120Z";
    const parsedDate = parseJSON(date);
    expect(parsedDate.toISOString()).toBe(expectedDate);
  });

  it("parses supported formats with a space time separator instead of a T", () => {
    const date = /* 1378/12/25 */ "2000-03-15 05:20:10.123Z";
    const expectedDate = /* 1378/12/25 */ "2000-03-15T05:20:10.123Z";
    const parsedDate = parseJSON(date);
    expect(parsedDate.toISOString()).toBe(expectedDate);
  });

  it("parses the SQL datetime format without milliseconds", () => {
    const date = /* 1378/12/25 */ "2000-03-15 05:20:10";
    const expectedDate = /* 1378/12/25 */ "2000-03-15T05:20:10.000Z";
    const parsedDate = parseJSON(date);
    expect(parsedDate.toISOString()).toBe(expectedDate);
  });

  it("parses the SQL datetime format with up to 7 millisecond digits", () => {
    const date = /* 1378/12/25 */ "2000-03-15 05:20:10.1234567";
    const expectedDate = /* 1378/12/25 */ "2000-03-15T05:20:10.123Z";
    const parsedDate = parseJSON(date);
    expect(parsedDate.toISOString()).toBe(expectedDate);
  });

  it("returns an invalid date for anything else", () => {
    expect(parseJSON("").toString()).toBe("Invalid Date");
    expect(parseJSON("invalid").toString()).toBe("Invalid Date");
    expect(parseJSON(/* 1399/7/19 */ "2020-10-10").toString()).toBe(
      "Invalid Date",
    );
  });

  it("resolves the date type by default", () => {
    const result = parseJSON(/* 1403/1/22 */ "2024-04-10T07:00:00Z");
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        parseJSON(/* 1403/1/22 */ "2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/1/22 */ "2024-04-10T15:00:00.000+08:00");
      expect(
        parseJSON(/* 1403/1/22 */ "2024-04-10T07:00:00Z", {
          in: tz("Africa/Cairo"),
        }).toISOString(),
      ).toBe(/* 1403/1/22 */ "2024-04-10T09:00:00.000+02:00");
    });

    it("resolves the context date type", () => {
      const result = parseJSON(/* 1393/6/10 */ "2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
