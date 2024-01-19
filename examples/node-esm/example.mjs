import { format } from "date-fns";
import { enUS } from "date-fns/locale";

const result = format(
  new Date(2017, 0, 25, 21, 28, 15),
  "eeee, dd MMMM HH:mm:ss",
  { locale: enUS },
);
console.log(result === "Wednesday, 06 Bahman 21:28:15");
