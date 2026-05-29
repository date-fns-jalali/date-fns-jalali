import { existsSync } from "node:fs";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

const systemChromePath = [
  process.env.VITEST_BROWSER_EXECUTABLE_PATH,
  process.env.GOOGLE_CHROME_BIN,
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
].find(
  (candidate): candidate is string =>
    typeof candidate === "string" && existsSync(candidate),
);

const browserProvider = playwright(
  systemChromePath
    ? {
        launchOptions: {
          executablePath: systemChromePath,
        },
      }
    : {},
);

const browserInstances = [{ browser: "chromium" as const }];

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
      {
        test: {
          name: "temporarily",
          include: ["src/**/test.tp.ts"],
          browser: {
            provider: browserProvider,
            instances: browserInstances,
          },
        },
      },
    ],

    // Speed up tests, but also it's a workaround for the browser issue:
    // https://github.com/vitest-dev/vitest/issues/5382
    isolate: false,
    browser: {
      // Enable it via --browser
      // enabled: true,
      provider: browserProvider,
      instances: browserInstances,
    },
  },
});
