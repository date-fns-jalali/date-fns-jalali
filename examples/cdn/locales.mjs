import { testScript } from "./dom.mjs";

testScript(["cdn.min.js", "locale/cdn.min.js"], (dom) => {
  const esResult = dom.window.eval(
    `window.dateFnsJalali.formatRelative(window.dateFnsJalali.subDays(new Date(1987, 1, 11), 3), new Date(1987, 1, 11), { locale: window.dateFnsJalali.locale.es })`,
  );
  const ruResult = dom.window.eval(
    `window.dateFnsJalali.formatRelative(window.dateFnsJalali.subDays(new Date(1987, 1, 11), 3), new Date(1987, 1, 11), { locale: window.dateFnsJalali.locale.ru })`,
  );
  console.log(
    esResult === "el domingo pasado a las 00:00" &&
      ruResult === "в прошлое воскресенье в 0:00",
  );
});
