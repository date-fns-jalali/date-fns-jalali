import { UTCDate } from "@date-fns/utc";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { isThisWeek } from "./index.js";

describe("isThisWeek", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      /* 1393/6/30 */ new Date(2014, 8 /* Sep */, 21).getTime(),
    );
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date and the current date have the same week", () => {
    const date = /* 1393/6/30 */ new Date(2014, 8 /* Sep */, 21);
    expect(isThisWeek(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different weeks", () => {
    const date = /* 1393/7/7 */ new Date(2014, 8 /* Sep */, 29);
    expect(isThisWeek(date)).toBe(false);
  });

  it("allows to specify which day is the first day of the week", () => {
    const date = /* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22);
    expect(isThisWeek(date, { weekStartsOn: 1 })).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = /* 1393/6/30 */ new Date(2014, 8 /* Sep */, 21).getTime();
    expect(isThisWeek(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(
      isThisWeek(
        new UTCDate(+(/* 1393/6/30 */ new Date(2014, 8 /* Sep */, 21))),
      ),
    ).toBe(true);
  });
});
