import { format } from "date-fns";

const result = format(new Date(2017, 0, 25, 21, 28, 15), "dd.MM.yyyy HH:mm:ss");
console.log(result === "06.11.1395 21:28:15");
