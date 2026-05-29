import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "main",
          include: ["src/**/test.ts"],
          exclude: ["src/tmp/**"],
        },
      },
      // node (pnpm test): RangeError: Temporal error: Not yet implemented.
      // chromium (pnpm test --browser): ReferenceError: Temporal is not defined
      // use commit in branch "google-chrome-testing" to test it locally

      // {
      //   test: {
      //     name: "temporarily",
      //     include: ["src/**/test.tp.ts"],
      //   },
      // },
    ],

    // Speed up tests, but also it's a workaround for the browser issue:
    // https://github.com/vitest-dev/vitest/issues/5382
    isolate: false,
    browser: {
      // Enable it via --browser
      // enabled: true,
      provider: playwright(),
      instances: [{ browser: "chromium" }],
    },
  },
});
