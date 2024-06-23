import { testScript } from "./dom.mjs";

testScript("fp/cdn.min.js", (dom) => {
  const result = dom.window.eval(
    `window.dateFnsJalali.fp.startOfWeekWithOptions({ weekStartsOn: 1 }, new Date(1987, 1, 11)).getDate()`,
  );
  console.log(result === 9);
});
