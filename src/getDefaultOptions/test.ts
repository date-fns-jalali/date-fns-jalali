import { afterEach, describe, expect, it } from "vitest";
import { getDefaultOptions } from "./index.js";
import { setDefaultOptions } from "../setDefaultOptions/index.js";
import { startOfWeek } from "../startOfWeek/index.js";
import {
  getDefaultOptions as getInternalDefaultOptions,
  setDefaultOptions as setInternalDefaultOptions,
} from "../_lib/defaultOptions/index.js";
import { enUS } from "../locale/en-US/index.js";
import { resetDefaultOptions } from "../_lib/test/index.js";

describe("getDefaultOptions", () => {
  afterEach(resetDefaultOptions);

  it("returns an empty object", () => {
    const result = getDefaultOptions();
    expect(result).toEqual({});
  });

  it("returns a clone of the original object", () => {
    setInternalDefaultOptions({ weekStartsOn: 1 });
    const result = getDefaultOptions();
    expect(getInternalDefaultOptions()).toEqual(result);
  });

  it("mutating the result does not affect functions that use options", () => {
    const defaultOptionsClone = getDefaultOptions();
    defaultOptionsClone.weekStartsOn = 1;
    const result = startOfWeek(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
    expect(result).toEqual(/* 1393/6/8 */ new Date(2014, 7 /* Aug */, 30));

    // Mutating the original object does affect `startOfWeek`
    const _defaultOptions = getInternalDefaultOptions();
    _defaultOptions.weekStartsOn = 1;
    const result2 = startOfWeek(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
    expect(result2).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("returns new values after setting them via `setDefaultOptions`", () => {
    setDefaultOptions({
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: enUS,
    });
    const result = getDefaultOptions();
    expect(result).toEqual({
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: enUS,
    });
  });
});
