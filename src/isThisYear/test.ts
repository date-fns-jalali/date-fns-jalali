import { UTCDate } from "@date-fns/utc";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { isThisYear } from "./index.js";

describe("isThisYear", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1).getTime(),
    );
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date and the current date have the same year", () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2);
    expect(isThisYear(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different years", () => {
    const date = /* 1394/4/11 */ new Date(2015, 6 /* Jul */, 2);
    expect(isThisYear(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime();
    expect(isThisYear(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(
      isThisYear(
        new UTCDate(+(/* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1))),
      ),
    ).toBe(true);
  });
});
