import { format } from "date-fns/format";
import * as dateFns from "date-fns";

const date = dateFns.addDays(new Date(2017, 0, 25, 21, 28, 15), 1);

const result = format(date, "dd.MM.yyyy HH:mm:ss");
console.log(result === "07.11.1395 21:28:15");
