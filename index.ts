const getMethods: Array<keyof Date> = [
  "getDate",
  "getDay",
  "getFullYear",
  "getHours",
  "getMilliseconds",
  "getMinutes",
  "getMonth",
  "getSeconds",
];

export class UTCDate extends Date {
  constructor();

  constructor(value: Date | number | string);

  constructor(
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  );

  constructor() {
    super();
    // @ts-ignore - how to type the arguments?!
    this.setTime(Date.UTC(...arguments));

    for (const method of getMethods) {
      // @ts-ignore - how to type overload?
      this[method] = (...args) => {
        const utcMethod = method
          .toString()
          .replace("get", "getUTC") as keyof Date;
        // @ts-ignore - how to call the UTC method?
        return this[utcMethod](...args);
      };
    }
  }
}
