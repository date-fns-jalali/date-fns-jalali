import { UTCDate } from "../date/index.js";

export const utc = (value: Date | number | string) =>
  new UTCDate(+new Date(value));
