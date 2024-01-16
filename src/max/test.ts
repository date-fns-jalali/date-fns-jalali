/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { max } from "./index.js";

describe("max", () => {
  it("returns the latest date", () => {
    const result = max([
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
    ]);
    assert.deepStrictEqual(
      result,
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
    );
  });

  it("accepts array with more than 2 entries", () => {
    const result = max([
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      /* 1374/4/11 */ new Date(1995, 6 /* Jul */, 2),
      /* 1368/10/11 */ new Date(1990, 0 /* Jan */, 1),
    ]);
    assert.deepStrictEqual(
      result,
      /* 1374/4/11 */ new Date(1995, 6 /* Jul */, 2),
    );
  });

  it("accepts timestamps", () => {
    const result = max([
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10).getTime(),
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11).getTime(),
    ]);
    assert.deepStrictEqual(
      result,
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
    );
  });

  it("returns `Invalid Date` if any given date is invalid", () => {
    const result = max([
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      new Date(NaN),
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
    ]);
    assert(isNaN(+result));
  });

  it("returns `Invalid Date` for empty array", () => {
    const result = max([]);
    assert(isNaN(+result));
  });
});
