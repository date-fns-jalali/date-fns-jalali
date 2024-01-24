import { expect, assert, describe, it } from "vitest";
import { compareAsc } from "./index.js";

describe("compareAsc", () => {
  it("returns 0 if the given dates are equal", () => {
    const result = compareAsc(
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
    );
    assert(result === 0);
  });

  it("returns -1 if the first date is before the second one", () => {
    const result = compareAsc(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
    );
    assert(result === -1);
  });

  it("returns 1 if the first date is after the second one", () => {
    const result = compareAsc(
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
    );
    assert(result === 1);
  });

  it("sorts the dates array in the chronological order when function is passed as the argument to Array.prototype.sort()", () => {
    const unsortedArray = [
      /* 1374/4/11 */ new Date(1995, 6 /* Jul */, 2),
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
    ];

    const sortedArray = [
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      /* 1374/4/11 */ new Date(1995, 6 /* Jul */, 2),
    ];

    unsortedArray.sort(compareAsc);
    const result = unsortedArray;

    expect(result).toEqual(sortedArray);
  });

  it("accepts timestamps", () => {
    const result = compareAsc(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11).getTime(),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10).getTime(),
    );
    assert(result === -1);
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = compareAsc(
      new Date(NaN),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
    );
    assert(isNaN(result));
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = compareAsc(
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      new Date(NaN),
    );
    assert(isNaN(result));
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = compareAsc(new Date(NaN), new Date(NaN));
    assert(isNaN(result));
  });
});
