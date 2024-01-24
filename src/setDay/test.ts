import { expect, assert, describe, it } from "vitest";
import { setDay } from "./index.js";

describe("setDay", () => {
  it("sets the day of the week", () => {
    const result = setDay(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 0);
    expect(result).toEqual(/* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31));
  });

  it("allows to specify which day is the first day of the week", () => {
    const result = setDay(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 0, {
      weekStartsOn: 1,
    });
    expect(result).toEqual(/* 1393/6/16 */ new Date(2014, 8 /* Sep */, 7));
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const result = setDay(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 0, {
      locale: {
        options: { weekStartsOn: 1 },
      },
    });
    expect(result).toEqual(/* 1393/6/16 */ new Date(2014, 8 /* Sep */, 7));
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const result = setDay(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 0, {
      weekStartsOn: 1,
      locale: {
        options: { weekStartsOn: 0 },
      },
    });
    expect(result).toEqual(/* 1393/6/16 */ new Date(2014, 8 /* Sep */, 7));
  });

  it("specifies Monday as the first day of the week", () => {
    const result = setDay(/* 1393/6/15 */ new Date(2014, 8 /* Sep */, 6), 1, {
      weekStartsOn: 1,
    });
    expect(result).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("specifies Tuesday as the first day of the week", () => {
    const result = setDay(/* 1393/6/15 */ new Date(2014, 8 /* Sep */, 6), 1, {
      weekStartsOn: 2,
    });
    expect(result).toEqual(/* 1393/6/17 */ new Date(2014, 8 /* Sep */, 8));
  });

  describe("the day index is more than 6", () => {
    it("sets the day of the next week", () => {
      const result = setDay(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 8);
      expect(result).toEqual(/* 1393/6/17 */ new Date(2014, 8 /* Sep */, 8));
    });

    it("allows to specify which day is the first day of the week", () => {
      const result = setDay(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 7, {
        weekStartsOn: 1,
      });
      expect(result).toEqual(/* 1393/6/17 */ new Date(2014, 8 /* Sep */, 8));
    });

    it("sets the day of another week in the future", () => {
      const result = setDay(
        /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
        14,
        {
          weekStartsOn: 1,
        },
      );
      expect(result).toEqual(/* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15));
    });
  });

  describe("the day index is less than 0", () => {
    it("sets the day of the last week", () => {
      const result = setDay(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), -6);
      expect(result).toEqual(/* 1393/6/3 */ new Date(2014, 7 /* Aug */, 25));
    });

    it("allows to specify which day is the first day of the week", () => {
      const result = setDay(
        /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
        -7,
        {
          weekStartsOn: 1,
        },
      );
      expect(result).toEqual(/* 1393/6/3 */ new Date(2014, 7 /* Aug */, 25));
    });

    it("set the day of another week in the past", () => {
      const result = setDay(
        /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
        -14,
        {
          weekStartsOn: 1,
        },
      );
      expect(result).toEqual(/* 1393/5/27 */ new Date(2014, 7 /* Aug */, 18));
    });
  });

  it("accepts a timestamp", () => {
    const result = setDay(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      3,
    );
    expect(result).toEqual(/* 1393/6/12 */ new Date(2014, 8 /* Sep */, 3));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    setDay(date, 3);
    expect(date).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setDay(new Date(NaN), 0);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setDay(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
