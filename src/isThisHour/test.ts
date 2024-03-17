import { UTCDate } from "@date-fns/utc";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { isThisHour } from "./index.js";

describe("isThisHour", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25, 18, 15, 15, 500).getTime(),
    );
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date and the current date have the same hour", () => {
    const date = /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25, 18);
    expect(isThisHour(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different hours", () => {
    const date = /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25, 19);
    expect(isThisHour(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = /* 1393/7/3 */ new Date(
      2014,
      8 /* Sep */,
      25,
      18,
      45,
    ).getTime();
    expect(isThisHour(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(
      isThisHour(
        new UTCDate(+(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25, 18))),
      ),
    ).toBe(true);
  });
});
