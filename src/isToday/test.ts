import { expect, assert, afterEach, beforeEach, describe, it } from "vitest";
import sinon from "sinon";
import { isToday } from "./index.js";

describe("isToday", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25).getTime(),
    );
  });

  afterEach(() => {
    clock.restore();
  });

  it("returns true if the given date is today", () => {
    const result = isToday(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25));
    assert(result === true);
  });

  it("returns false if the given date is not today", () => {
    const result = isToday(/* 1393/7/4 */ new Date(2014, 8 /* Sep */, 26));
    assert(result === false);
  });

  it("accepts a timestamp", () => {
    const result = isToday(
      /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25).getTime(),
    );
    assert(result === true);
  });
});
