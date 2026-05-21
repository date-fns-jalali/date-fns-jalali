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

          // Speed up tests
          isolate: false,

          browser: {
            // Enable it via --browser
            // enabled: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
        },
      },
      {
        test: {
          name: "temporarily",
          include: ["src/**/test.tp.ts"],

          // Speed up tests
          isolate: false,

          browser: {
            // Enable it via --browser
            // enabled: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],

    experimental: {
      fsModuleCache: true,
    },
  },
});
