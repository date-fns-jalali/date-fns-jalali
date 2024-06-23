import { testScript } from "./dom.mjs";

testScript(["cdn.min.js", "locale/es/cdn.min.js"], (dom) => {
  const result = dom.window.eval(
    `window.dateFnsJalali.formatRelative(window.dateFnsJalali.subDays(new Date(1987, 1, 11), 3), new Date(1987, 1, 11), { locale: window.dateFnsJalali.locale.es })`,
  );
  console.log(result === "el domingo pasado a las 00:00");
});
