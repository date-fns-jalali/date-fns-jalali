import { testScript } from "./dom.js";

testScript(["cdn.min.js", "locale/cdn.min.js"], (dom) => {
  const enResult = dom.window.eval(
    `window.dateFnsJalali.formatRelative(window.dateFnsJalali.subDays(new Date(1987, 1, 11), 3), new Date(1987, 1, 11), { locale: window.dateFnsJalali.locale.enUS })`,
  );
  const faResult = dom.window.eval(
    `window.dateFnsJalali.formatRelative(window.dateFnsJalali.subDays(new Date(1987, 1, 11), 3), new Date(1987, 1, 11), { locale: window.dateFnsJalali.locale.faIR })`,
  );
  console.log(
    enResult === "last Sunday at 12:00 AM" &&
      faResult === "یک‌شنبه گذشته در 12:00 ق.ظ.",
  );
});
