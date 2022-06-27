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
    if (arguments.length)
      this.setTime(
        // @ts-ignore - how to type the arguments?!
        arguments.length === 1 ? arguments[0] : Date.UTC(...arguments)
      );

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

    for (const method of setMethods) {
      // @ts-ignore - how to type overload?
      this[method] = (...args) => {
        const utcMethod = method
          .toString()
          .replace("set", "setUTC") as keyof Date;
        // @ts-ignore - how to call the UTC method?
        return this[utcMethod](...args);
      };
    }
  }

  getTimezoneOffset() {
    return 0;
  }

  toString(): string {
    const date = this.toDateString();
    const time = this.toTimeString();
    return `${date} ${time}`;
  }

  toDateString(): string {
    const weekday = weekdayFormat.format(this);
    const date = dateFormat.format(this);
    const year = this.getFullYear();
    return `${weekday} ${date} ${year}`;
  }

  toTimeString(): string {
    const time = timeFormat.format(this);
    return `${time} GMT+0000 (Coordinated Universal Time)`;
  }

  toLocaleString(
    locales?: string | string[],
    options?: Intl.DateTimeFormatOptions
  ): string {
    return Date.prototype.toLocaleString.call(this, locales, {
      timeZone: "UTC",
      ...options,
    });
  }

  toLocaleDateString(
    locales?: string | string[],
    options?: Intl.DateTimeFormatOptions
  ): string {
    return Date.prototype.toLocaleDateString.call(this, locales, {
      timeZone: "UTC",
      ...options,
    });
  }

  toLocaleTimeString(
    locales?: string | string[],
    options?: Intl.DateTimeFormatOptions
  ): string {
    return Date.prototype.toLocaleTimeString.call(this, locales, {
      timeZone: "UTC",
      ...options,
    });
  }
}

var getMethods: Array<keyof Date> = [
  "getDate",
  "getDay",
  "getFullYear",
  "getHours",
  "getMilliseconds",
  "getMinutes",
  "getMonth",
  "getSeconds",
];

var setMethods: Array<keyof Date> = [
  "setDate",
  "setFullYear",
  "setHours",
  "setMilliseconds",
  "setMinutes",
  "setMonth",
  "setSeconds",
];

var weekdayFormat = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  timeZone: "UTC",
});

var dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

var timeFormat = new Intl.DateTimeFormat("en-US", {
  hour12: false,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "UTC",
});
