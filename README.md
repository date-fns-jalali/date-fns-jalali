[![date-fns-jalali](docs/logotype.svg)](https://date-fns.org/)

<p align="center">
  <b>date-fns-jalali</b> provides the most comprehensive, yet simple and consistent toolset
  <br>
  for manipulating <b>JavaScript dates</b> in <b>a browser</b> & <b>Node.js</b>.</b>
  <br>
  for <b>jalali calendar</b>
</p>

<div align="center">

[📖&nbsp; Documentation](https://date-fns.org/docs/Getting-Started/)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[🧑‍💻&nbsp; JavaScript Jobs](https://jobs.date-fns.org/)

</div>

<hr>

# It's like [Lodash](https://lodash.com) for dates

- It has [**200+ functions** for all occasions](https://date-fns.org/docs/Getting-Started/).
- **Modular**: Pick what you need. Works with webpack, Browserify, or Rollup and also supports tree-shaking.
- **Native dates**: Uses existing native type. It doesn't extend core objects for safety's sake.
- **Immutable & Pure**: Built using pure functions and always returns a new date instance.
- **TypeScript & Flow**: Supports both Flow and TypeScript
- **I18n**: Dozens of locales. Include only what you need.
- [and many more benefits](https://date-fns.org/)

**date-fns-jalali** provides **date-fns** toolset for [jalali calendar](https://en.wikipedia.org/wiki/Jalali_calendar)

```js
import { compareAsc, format, newDate } from 'date-fns-jalali'

format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '1392-11-22'

newDate(1392, 10, 22)
// => Tue Feb 11 2014 00:00:00

format(newDate(1392, 10, 22), 'yyyy MMMM d')
// 1392 بهمن 22

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
dates.sort(compareAsc)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
```

The library is available as an [npm package](https://www.npmjs.com/package/date-fns-jalali).
To install the package run:

```bash
npm install date-fns-jalali --save
# or with yarn
yarn add date-fns-jalali
```

## Docs

[See date-fns.org](https://date-fns.org/) for more details, API,
and other docs.

<br />
<!-- END OF README-JOB SECTION -->

## License

MIT
