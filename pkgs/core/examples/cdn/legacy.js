import { testScript } from "./dom.js";

testScript({
  scripts: [
    { src: "http://127.0.0.1:9182/jquery.js" },
    "cdn.min.js",
    "fp/cdn.min.js",
    { src: "http://127.0.0.1:9182/jquery.js" },
    "locale/cdn.min.js",
    "locale/en-US/cdn.min.js",
    { src: "http://127.0.0.1:9182/jquery.js" },
  ],

  run: (dom) => {
    const addDaysResult = dom.window.eval(
      `window.dateFnsJalali.addDays(new Date(1987, 1, 11), 1).getDate()`,
    );
    const fpResult = dom.window.eval(
      `window.dateFnsJalali.fp.startOfWeekWithOptions({ weekStartsOn: 1 }, new Date(1987, 1, 11)).getDate()`,
    );
    const localeResult = dom.window.eval(
      `window.dateFnsJalali.formatRelative(window.dateFnsJalali.subDays(new Date(1987, 1, 11), 3), new Date(1987, 1, 11), { locale: window.dateFnsJalali.locale.enUS })`,
    );

    console.log(
      addDaysResult === 12 &&
        fpResult === 9 &&
        localeResult === "last Sunday at 12:00 AM" &&
        dom.window.$ === dom.window.jQuery &&
        dom.window.jQuery.version === "fixture" &&
        dom.window.jQuery.loaded === 3,
    );
  },
});
