import { describe, expect, it } from "vitest";
import { isExists } from "./index.js";

describe("isValid", () => {
  it("returns true if the given date is valid", () => {
    const result = isExists(1399, 0, 31);
    expect(result).toBe(true);
  });

  it("returns false if the given date is invalid", () => {
    const result = isExists(1399, 10 /* Azar */, 31);
    expect(result).toBe(false);
  });
});
