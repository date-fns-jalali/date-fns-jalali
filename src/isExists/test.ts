import { describe, expect, it } from "vitest";
import { isExists } from "./index.ts";

describe("isValid", () => {
  it("returns true if the given date is valid", () => {
    const result = isExists(2018, 0, 31);
    expect(result).toBe(true);
  });

  it("returns false if the given date is invalid", () => {
    const result = isExists(2018, 11, 31);
    expect(result).toBe(false);
  });
});
