# Scottish Gaelic (gd) locale

## `format` and `parse`

| Title                           | Token string | Date                     | `format` result                                              | `parse` result           |
| ------------------------------- | ------------ | ------------------------ | ------------------------------------------------------------ | ------------------------ |
| Calendar year                   | yo           | 1987-02-11T12:13:14.015Z | 1365mh                                                       | 1986-03-21T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 618mh                                                        | 1239-03-21T00:00:00.000Z |
| Local week-numbering year       | Yo           | 1987-02-11T12:13:14.015Z | 1365mh                                                       | 1986-03-16T00:00:00.000Z |
|                                 |              | 0005-01-01T12:13:14.015Z | 618mh                                                        | 1239-03-20T00:00:00.000Z |
| Quarter (formatting)            | Qo           | 2019-01-01T12:13:14.015Z | 4mh                                                          | 2018-12-22T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 1d                                                           | 2019-03-21T00:00:00.000Z |
|                                 | QQQ          | 2019-01-01T12:13:14.015Z | C4                                                           | 2018-12-22T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | C1                                                           | 2019-03-21T00:00:00.000Z |
|                                 | QQQQ         | 2019-01-01T12:13:14.015Z | an ceathramh cairteal                                        | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | a' chiad chairteal                                           | Invalid Date             |
|                                 | QQQQQ        | 2019-01-01T12:13:14.015Z | 4                                                            | 2018-12-22T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 1                                                            | 2019-03-21T00:00:00.000Z |
| Quarter (stand-alone)           | qo           | 2019-01-01T12:13:14.015Z | 4mh                                                          | 2018-12-22T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | 1d                                                           | 2019-03-21T00:00:00.000Z |
|                                 | qqq          | 2019-01-01T12:13:14.015Z | C4                                                           | 2018-12-22T00:00:00.000Z |
|                                 |              | 2019-04-01T12:13:14.015Z | C1                                                           | 2019-03-21T00:00:00.000Z |
|                                 | qqqq         | 2019-01-01T12:13:14.015Z | an ceathramh cairteal                                        | Invalid Date             |
|                                 |              | 2019-04-01T12:13:14.015Z | a' chiad chairteal                                           | Invalid Date             |
| Month (formatting)              | Mo           | 2019-02-11T12:13:14.015Z | 11mh                                                         | 2019-01-21T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 4mh                                                          | 2019-06-22T00:00:00.000Z |
|                                 | MMM          | 2019-02-11T12:13:14.015Z | Samh                                                         | 2019-01-21T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Gibl                                                         | 2019-06-22T00:00:00.000Z |
|                                 | MMMM         | 2019-02-11T12:13:14.015Z | An t-Samhain                                                 | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | An Giblean                                                   | Invalid Date             |
|                                 | MMMMM        | 2019-02-11T12:13:14.015Z | S                                                            | 2018-11-22T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | G                                                            | 2019-04-21T00:00:00.000Z |
| Month (stand-alone)             | Lo           | 2019-02-11T12:13:14.015Z | 11mh                                                         | 2019-01-21T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | 4mh                                                          | 2019-06-22T00:00:00.000Z |
|                                 | LLL          | 2019-02-11T12:13:14.015Z | Samh                                                         | 2019-01-21T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | Gibl                                                         | 2019-06-22T00:00:00.000Z |
|                                 | LLLL         | 2019-02-11T12:13:14.015Z | An t-Samhain                                                 | Invalid Date             |
|                                 |              | 2019-07-10T12:13:14.015Z | An Giblean                                                   | Invalid Date             |
|                                 | LLLLL        | 2019-02-11T12:13:14.015Z | S                                                            | 2018-11-22T00:00:00.000Z |
|                                 |              | 2019-07-10T12:13:14.015Z | G                                                            | 2019-04-21T00:00:00.000Z |
| Local week of year              | wo           | 2019-01-01T12:13:14.015Z | 42na                                                         | 2018-12-30T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 38mh                                                         | 2019-12-01T00:00:00.000Z |
| ISO week of year                | Io           | 2019-01-01T12:13:14.015Z | 1d                                                           | 2018-12-31T00:00:00.000Z |
|                                 |              | 2019-12-01T12:13:14.015Z | 48mh                                                         | 2019-11-25T00:00:00.000Z |
| Day of month                    | do           | 2019-02-11T12:13:14.015Z | 22na                                                         | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-28T12:13:14.015Z | 9mh                                                          | 2019-02-28T00:00:00.000Z |
| Day of year                     | Do           | 2019-02-11T12:13:14.015Z | 328mh                                                        | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-12-31T12:13:14.015Z | 286mh                                                        | 2019-12-31T00:00:00.000Z |
| Day of week (formatting)        | E            | 2019-02-11T12:13:14.015Z | Dil                                                          | 2019-02-10T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Dih                                                          | 2019-02-10T00:00:00.000Z |
|                                 | EE           | 2019-02-11T12:13:14.015Z | Dil                                                          | 2019-02-10T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Dih                                                          | 2019-02-10T00:00:00.000Z |
|                                 | EEE          | 2019-02-11T12:13:14.015Z | Dil                                                          | 2019-02-10T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Dih                                                          | 2019-02-10T00:00:00.000Z |
|                                 | EEEE         | 2019-02-11T12:13:14.015Z | Diluain                                                      | 2019-02-10T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Dihaoine                                                     | 2019-02-10T00:00:00.000Z |
|                                 | EEEEE        | 2019-02-11T12:13:14.015Z | L                                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | H                                                            | 2019-02-15T00:00:00.000Z |
|                                 | EEEEEE       | 2019-02-11T12:13:14.015Z | Lu                                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Ha                                                           | 2019-02-15T00:00:00.000Z |
| ISO day of week (formatting)    | io           | 2019-02-11T12:13:14.015Z | 1d                                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 5mh                                                          | 2019-02-15T00:00:00.000Z |
|                                 | iii          | 2019-02-11T12:13:14.015Z | Dil                                                          | 2019-02-17T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Dih                                                          | 2019-02-17T00:00:00.000Z |
|                                 | iiii         | 2019-02-11T12:13:14.015Z | Diluain                                                      | 2019-02-17T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Dihaoine                                                     | 2019-02-17T00:00:00.000Z |
|                                 | iiiii        | 2019-02-11T12:13:14.015Z | L                                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | H                                                            | 2019-02-15T00:00:00.000Z |
|                                 | iiiiii       | 2019-02-11T12:13:14.015Z | Lu                                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Ha                                                           | 2019-02-15T00:00:00.000Z |
| Local day of week (formatting)  | eo           | 2019-02-11T12:13:14.015Z | 2na                                                          | 2019-02-12T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 6mh                                                          | 2019-02-16T00:00:00.000Z |
|                                 | eee          | 2019-02-11T12:13:14.015Z | Dil                                                          | 2019-02-10T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Dih                                                          | 2019-02-10T00:00:00.000Z |
|                                 | eeee         | 2019-02-11T12:13:14.015Z | Diluain                                                      | 2019-02-10T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Dihaoine                                                     | 2019-02-10T00:00:00.000Z |
|                                 | eeeee        | 2019-02-11T12:13:14.015Z | L                                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | H                                                            | 2019-02-15T00:00:00.000Z |
|                                 | eeeeee       | 2019-02-11T12:13:14.015Z | Lu                                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Ha                                                           | 2019-02-15T00:00:00.000Z |
| Local day of week (stand-alone) | co           | 2019-02-11T12:13:14.015Z | 2na                                                          | 2019-02-12T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | 6mh                                                          | 2019-02-16T00:00:00.000Z |
|                                 | ccc          | 2019-02-11T12:13:14.015Z | Dil                                                          | 2019-02-10T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Dih                                                          | 2019-02-10T00:00:00.000Z |
|                                 | cccc         | 2019-02-11T12:13:14.015Z | Diluain                                                      | 2019-02-10T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Dihaoine                                                     | 2019-02-10T00:00:00.000Z |
|                                 | ccccc        | 2019-02-11T12:13:14.015Z | L                                                            | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | H                                                            | 2019-02-15T00:00:00.000Z |
|                                 | cccccc       | 2019-02-11T12:13:14.015Z | Lu                                                           | 2019-02-11T00:00:00.000Z |
|                                 |              | 2019-02-15T12:13:14.015Z | Ha                                                           | 2019-02-15T00:00:00.000Z |
| AM, PM                          | a            | 2019-02-11T11:13:14.015Z | M.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | F.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | F.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | M.                                                           | Invalid Date             |
|                                 | aa           | 2019-02-11T11:13:14.015Z | M.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | F.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | F.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | M.                                                           | Invalid Date             |
|                                 | aaa          | 2019-02-11T11:13:14.015Z | M.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | F.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | F.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | M.                                                           | Invalid Date             |
|                                 | aaaa         | 2019-02-11T11:13:14.015Z | m.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | f.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | f.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | m.                                                           | Invalid Date             |
|                                 | aaaaa        | 2019-02-11T11:13:14.015Z | m                                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | f                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | f                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | m                                                            | Invalid Date             |
| AM, PM, noon, midnight          | b            | 2019-02-11T11:13:14.015Z | M.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | F.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | F.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | M.                                                           | Invalid Date             |
|                                 | bb           | 2019-02-11T11:13:14.015Z | M.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | F.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | F.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | M.                                                           | Invalid Date             |
|                                 | bbb          | 2019-02-11T11:13:14.015Z | M.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | F.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | F.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | M.                                                           | Invalid Date             |
|                                 | bbbb         | 2019-02-11T11:13:14.015Z | m.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | f.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | f.                                                           | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | m.                                                           | Invalid Date             |
|                                 | bbbbb        | 2019-02-11T11:13:14.015Z | m                                                            | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | f                                                            | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | f                                                            | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | m                                                            | Invalid Date             |
| Flexible day period             | B            | 2019-02-11T11:13:14.015Z | sa mhadainn                                                  | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | feasgar                                                      | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | feasgar                                                      | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | air an oidhche                                               | Invalid Date             |
|                                 | BB           | 2019-02-11T11:13:14.015Z | sa mhadainn                                                  | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | feasgar                                                      | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | feasgar                                                      | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | air an oidhche                                               | Invalid Date             |
|                                 | BBB          | 2019-02-11T11:13:14.015Z | sa mhadainn                                                  | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | feasgar                                                      | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | feasgar                                                      | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | air an oidhche                                               | Invalid Date             |
|                                 | BBBB         | 2019-02-11T11:13:14.015Z | sa mhadainn                                                  | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | feasgar                                                      | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | feasgar                                                      | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | air an oidhche                                               | Invalid Date             |
|                                 | BBBBB        | 2019-02-11T11:13:14.015Z | sa mhadainn                                                  | Invalid Date             |
|                                 |              | 2019-02-11T14:13:14.015Z | feasgar                                                      | Invalid Date             |
|                                 |              | 2019-02-11T19:13:14.015Z | feasgar                                                      | Invalid Date             |
|                                 |              | 2019-02-11T02:13:14.015Z | air an oidhche                                               | Invalid Date             |
| Hour [1-12]                     | ho           | 2019-02-11T11:13:14.015Z | 11mh                                                         | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11mh                                                         | 2019-02-11T23:00:00.000Z |
| Hour [0-23]                     | Ho           | 2019-02-11T11:13:14.015Z | 11mh                                                         | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23mh                                                         | 2019-02-11T23:00:00.000Z |
| Hour [0-11]                     | Ko           | 2019-02-11T11:13:14.015Z | 11mh                                                         | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 11mh                                                         | 2019-02-11T23:00:00.000Z |
| Hour [1-24]                     | ko           | 2019-02-11T11:13:14.015Z | 11mh                                                         | 2019-02-11T11:00:00.000Z |
|                                 |              | 2019-02-11T23:13:14.015Z | 23mh                                                         | 2019-02-11T23:00:00.000Z |
| Minute                          | mo           | 2019-01-01T12:01:14.015Z | 1d                                                           | 2019-01-01T12:01:00.000Z |
|                                 |              | 2019-04-01T12:55:14.015Z | 55mh                                                         | 2019-04-01T12:55:00.000Z |
| Second                          | so           | 2019-01-01T12:13:01.015Z | 1d                                                           | 2019-01-01T12:13:01.000Z |
|                                 |              | 2019-04-01T12:13:55.015Z | 55mh                                                         | 2019-04-01T12:13:55.000Z |
| Long localized date             | P            | 1987-02-11T12:13:14.015Z | 11/22/1365                                                   | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | 03/08/0832                                                   | 1453-05-29T00:00:00.000Z |
|                                 | PP           | 1987-02-11T12:13:14.015Z | Samh 22, 1365                                                | 1987-02-11T00:00:00.000Z |
|                                 |              | 1453-05-29T23:59:59.999Z | Màrt 8, 832                                                  | 1453-05-29T00:00:00.000Z |
|                                 | PPP          | 1987-02-11T12:13:14.015Z | An t-Samhain 22na, 1365                                      | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | Am Màrt 8mh, 832                                             | Invalid Date             |
|                                 | PPPP         | 1987-02-11T12:13:14.015Z | Diciadain, An t-Samhain 22na, 1365                           | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | Didòmhnaich, Am Màrt 8mh, 832                                | Invalid Date             |
| Long localized time             | p            | 1987-02-11T12:13:14.015Z | 12:13 F.                                                     | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 11:59 F.                                                     | Invalid Date             |
|                                 | pp           | 1987-02-11T12:13:14.015Z | 12:13:14 F.                                                  | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 11:59:59 F.                                                  | Invalid Date             |
|                                 | ppp          | 1987-02-11T12:13:14.015Z | 12:13:14 F. GMT+0                                            | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 11:59:59 F. GMT+0                                            | Invalid Date             |
|                                 | pppp         | 1987-02-11T12:13:14.015Z | 12:13:14 F. GMT+00:00                                        | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 11:59:59 F. GMT+00:00                                        | Invalid Date             |
| Combination of date and time    | Pp           | 1987-02-11T12:13:14.015Z | 11/22/1365, 12:13 F.                                         | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | 03/08/0832, 11:59 F.                                         | Invalid Date             |
|                                 | PPpp         | 1987-02-11T12:13:14.015Z | Samh 22, 1365, 12:13:14 F.                                   | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | Màrt 8, 832, 11:59:59 F.                                     | Invalid Date             |
|                                 | PPPppp       | 1987-02-11T12:13:14.015Z | An t-Samhain 22na, 1365 aig 12:13:14 F. GMT+0                | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | Am Màrt 8mh, 832 aig 11:59:59 F. GMT+0                       | Invalid Date             |
|                                 | PPPPpppp     | 1987-02-11T12:13:14.015Z | Diciadain, An t-Samhain 22na, 1365 aig 12:13:14 F. GMT+00:00 | Invalid Date             |
|                                 |              | 1453-05-29T23:59:59.999Z | Didòmhnaich, Am Màrt 8mh, 832 aig 11:59:59 F. GMT+00:00      | Invalid Date             |

## `formatDistance`

If now is January 1st, 2000, 00:00.

| Date                     | Result                    | `includeSeconds: true`    | `addSuffix: true`                  |
| ------------------------ | ------------------------- | ------------------------- | ---------------------------------- |
| 2006-01-01T00:00:00.000Z | mu 6 bliadhnaichean       | mu 6 bliadhnaichean       | ann an mu 6 bliadhnaichean         |
| 2005-01-01T00:00:00.000Z | mu 5 bliadhnaichean       | mu 5 bliadhnaichean       | ann an mu 5 bliadhnaichean         |
| 2004-01-01T00:00:00.000Z | mu 4 bliadhnaichean       | mu 4 bliadhnaichean       | ann an mu 4 bliadhnaichean         |
| 2003-01-01T00:00:00.000Z | mu 3 bliadhnaichean       | mu 3 bliadhnaichean       | ann an mu 3 bliadhnaichean         |
| 2002-01-01T00:00:00.000Z | mu 2 bliadhnaichean       | mu 2 bliadhnaichean       | ann an mu 2 bliadhnaichean         |
| 2001-06-01T00:00:00.000Z | còrr is bliadhna          | còrr is bliadhna          | ann an còrr is bliadhna            |
| 2001-02-01T00:00:00.000Z | mu bhliadhna              | mu bhliadhna              | ann an mu bhliadhna                |
| 2001-01-01T00:00:00.000Z | mu bhliadhna              | mu bhliadhna              | ann an mu bhliadhna                |
| 2000-06-01T00:00:00.000Z | 5 mìosan                  | 5 mìosan                  | ann an 5 mìosan                    |
| 2000-03-01T00:00:00.000Z | 2 mìosan                  | 2 mìosan                  | ann an 2 mìosan                    |
| 2000-02-01T00:00:00.000Z | mu mhìos                  | mu mhìos                  | ann an mu mhìos                    |
| 2000-01-15T00:00:00.000Z | 14 là                     | 14 là                     | ann an 14 là                       |
| 2000-01-02T00:00:00.000Z | 1 là                      | 1 là                      | ann an 1 là                        |
| 2000-01-01T06:00:00.000Z | mu 6 uairean de thìde     | mu 6 uairean de thìde     | ann an mu 6 uairean de thìde       |
| 2000-01-01T01:00:00.000Z | mu uair de thìde          | mu uair de thìde          | ann an mu uair de thìde            |
| 2000-01-01T00:45:00.000Z | mu uair de thìde          | mu uair de thìde          | ann an mu uair de thìde            |
| 2000-01-01T00:30:00.000Z | 30 mionaidean             | 30 mionaidean             | ann an 30 mionaidean               |
| 2000-01-01T00:15:00.000Z | 15 mionaidean             | 15 mionaidean             | ann an 15 mionaidean               |
| 2000-01-01T00:01:00.000Z | 1 mionaid                 | 1 mionaid                 | ann an 1 mionaid                   |
| 2000-01-01T00:00:25.000Z | nas lugha na mionaid      | leth mhionaid             | ann an nas lugha na mionaid        |
| 2000-01-01T00:00:15.000Z | nas lugha na mionaid      | nas lugha na 20 diogan    | ann an nas lugha na mionaid        |
| 2000-01-01T00:00:05.000Z | nas lugha na mionaid      | nas lugha na 10 diogan    | ann an nas lugha na mionaid        |
| 2000-01-01T00:00:00.000Z | nas lugha na mionaid      | nas lugha na 5 diogan     | o chionn nas lugha na mionaid      |
| 1999-12-31T23:59:55.000Z | nas lugha na mionaid      | nas lugha na 10 diogan    | o chionn nas lugha na mionaid      |
| 1999-12-31T23:59:45.000Z | nas lugha na mionaid      | nas lugha na 20 diogan    | o chionn nas lugha na mionaid      |
| 1999-12-31T23:59:35.000Z | nas lugha na mionaid      | leth mhionaid             | o chionn nas lugha na mionaid      |
| 1999-12-31T23:59:00.000Z | 1 mionaid                 | 1 mionaid                 | o chionn 1 mionaid                 |
| 1999-12-31T23:45:00.000Z | 15 mionaidean             | 15 mionaidean             | o chionn 15 mionaidean             |
| 1999-12-31T23:30:00.000Z | 30 mionaidean             | 30 mionaidean             | o chionn 30 mionaidean             |
| 1999-12-31T23:15:00.000Z | mu uair de thìde          | mu uair de thìde          | o chionn mu uair de thìde          |
| 1999-12-31T23:00:00.000Z | mu uair de thìde          | mu uair de thìde          | o chionn mu uair de thìde          |
| 1999-12-31T18:00:00.000Z | mu 6 uairean de thìde     | mu 6 uairean de thìde     | o chionn mu 6 uairean de thìde     |
| 1999-12-30T00:00:00.000Z | 2 là                      | 2 là                      | o chionn 2 là                      |
| 1999-12-15T00:00:00.000Z | 17 là                     | 17 là                     | o chionn 17 là                     |
| 1999-12-01T00:00:00.000Z | mu mhìos                  | mu mhìos                  | o chionn mu mhìos                  |
| 1999-11-01T00:00:00.000Z | 2 mìosan                  | 2 mìosan                  | o chionn 2 mìosan                  |
| 1999-06-01T00:00:00.000Z | 7 mìosan                  | 7 mìosan                  | o chionn 7 mìosan                  |
| 1999-01-01T00:00:00.000Z | mu bhliadhna              | mu bhliadhna              | o chionn mu bhliadhna              |
| 1998-12-01T00:00:00.000Z | mu bhliadhna              | mu bhliadhna              | o chionn mu bhliadhna              |
| 1998-06-01T00:00:00.000Z | còrr is bliadhna          | còrr is bliadhna          | o chionn còrr is bliadhna          |
| 1998-01-01T00:00:00.000Z | mu 2 bliadhnaichean       | mu 2 bliadhnaichean       | o chionn mu 2 bliadhnaichean       |
| 1997-01-01T00:00:00.000Z | cha mhòr 3 bliadhnaichean | cha mhòr 3 bliadhnaichean | o chionn cha mhòr 3 bliadhnaichean |
| 1996-01-01T00:00:00.000Z | mu 4 bliadhnaichean       | mu 4 bliadhnaichean       | o chionn mu 4 bliadhnaichean       |
| 1995-01-01T00:00:00.000Z | mu 5 bliadhnaichean       | mu 5 bliadhnaichean       | o chionn mu 5 bliadhnaichean       |
| 1994-01-01T00:00:00.000Z | mu 6 bliadhnaichean       | mu 6 bliadhnaichean       | o chionn mu 6 bliadhnaichean       |

## `formatDistanceStrict`

If now is January 1st, 2000, 00:00.

| Date                     | Result             | `addSuffix: true`           | With forced unit (i.e. `hour`) |
| ------------------------ | ------------------ | --------------------------- | ------------------------------ |
| 2006-01-01T00:00:00.000Z | 6 bliadhna         | ann an 6 bliadhna           | 52608 uairean de thìde         |
| 2005-01-01T00:00:00.000Z | 5 bliadhna         | ann an 5 bliadhna           | 43848 uairean de thìde         |
| 2004-01-01T00:00:00.000Z | 4 bliadhna         | ann an 4 bliadhna           | 35064 uairean de thìde         |
| 2003-01-01T00:00:00.000Z | 3 bliadhna         | ann an 3 bliadhna           | 26304 uairean de thìde         |
| 2002-01-01T00:00:00.000Z | 2 bliadhna         | ann an 2 bliadhna           | 17544 uairean de thìde         |
| 2001-06-01T00:00:00.000Z | 1 bhliadhna        | ann an 1 bhliadhna          | 12408 uairean de thìde         |
| 2001-02-01T00:00:00.000Z | 1 bhliadhna        | ann an 1 bhliadhna          | 9528 uairean de thìde          |
| 2001-01-01T00:00:00.000Z | 1 bhliadhna        | ann an 1 bhliadhna          | 8784 uairean de thìde          |
| 2000-06-01T00:00:00.000Z | 5 mìosan           | ann an 5 mìosan             | 3648 uairean de thìde          |
| 2000-03-01T00:00:00.000Z | 2 mìosan           | ann an 2 mìosan             | 1440 uairean de thìde          |
| 2000-02-01T00:00:00.000Z | 1 mìos             | ann an 1 mìos               | 744 uairean de thìde           |
| 2000-01-15T00:00:00.000Z | 14 là              | ann an 14 là                | 336 uairean de thìde           |
| 2000-01-02T00:00:00.000Z | 1 là               | ann an 1 là                 | 24 uairean de thìde            |
| 2000-01-01T06:00:00.000Z | 6 uairean de thìde | ann an 6 uairean de thìde   | 6 uairean de thìde             |
| 2000-01-01T01:00:00.000Z | 1 uair de thìde    | ann an 1 uair de thìde      | 1 uair de thìde                |
| 2000-01-01T00:45:00.000Z | 45 mionaidean      | ann an 45 mionaidean        | 1 uair de thìde                |
| 2000-01-01T00:30:00.000Z | 30 mionaidean      | ann an 30 mionaidean        | 1 uair de thìde                |
| 2000-01-01T00:15:00.000Z | 15 mionaidean      | ann an 15 mionaidean        | 0 uairean de thìde             |
| 2000-01-01T00:01:00.000Z | 1 mionaid          | ann an 1 mionaid            | 0 uairean de thìde             |
| 2000-01-01T00:00:25.000Z | 25 diogan          | ann an 25 diogan            | 0 uairean de thìde             |
| 2000-01-01T00:00:15.000Z | 15 diogan          | ann an 15 diogan            | 0 uairean de thìde             |
| 2000-01-01T00:00:05.000Z | 5 diogan           | ann an 5 diogan             | 0 uairean de thìde             |
| 2000-01-01T00:00:00.000Z | 0 diogan           | o chionn 0 diogan           | 0 uairean de thìde             |
| 1999-12-31T23:59:55.000Z | 5 diogan           | o chionn 5 diogan           | 0 uairean de thìde             |
| 1999-12-31T23:59:45.000Z | 15 diogan          | o chionn 15 diogan          | 0 uairean de thìde             |
| 1999-12-31T23:59:35.000Z | 25 diogan          | o chionn 25 diogan          | 0 uairean de thìde             |
| 1999-12-31T23:59:00.000Z | 1 mionaid          | o chionn 1 mionaid          | 0 uairean de thìde             |
| 1999-12-31T23:45:00.000Z | 15 mionaidean      | o chionn 15 mionaidean      | 0 uairean de thìde             |
| 1999-12-31T23:30:00.000Z | 30 mionaidean      | o chionn 30 mionaidean      | 1 uair de thìde                |
| 1999-12-31T23:15:00.000Z | 45 mionaidean      | o chionn 45 mionaidean      | 1 uair de thìde                |
| 1999-12-31T23:00:00.000Z | 1 uair de thìde    | o chionn 1 uair de thìde    | 1 uair de thìde                |
| 1999-12-31T18:00:00.000Z | 6 uairean de thìde | o chionn 6 uairean de thìde | 6 uairean de thìde             |
| 1999-12-30T00:00:00.000Z | 2 là               | o chionn 2 là               | 48 uairean de thìde            |
| 1999-12-15T00:00:00.000Z | 17 là              | o chionn 17 là              | 408 uairean de thìde           |
| 1999-12-01T00:00:00.000Z | 1 mìos             | o chionn 1 mìos             | 744 uairean de thìde           |
| 1999-11-01T00:00:00.000Z | 2 mìosan           | o chionn 2 mìosan           | 1464 uairean de thìde          |
| 1999-06-01T00:00:00.000Z | 7 mìosan           | o chionn 7 mìosan           | 5136 uairean de thìde          |
| 1999-01-01T00:00:00.000Z | 1 bhliadhna        | o chionn 1 bhliadhna        | 8760 uairean de thìde          |
| 1998-12-01T00:00:00.000Z | 1 bhliadhna        | o chionn 1 bhliadhna        | 9504 uairean de thìde          |
| 1998-06-01T00:00:00.000Z | 2 bliadhna         | o chionn 2 bliadhna         | 13896 uairean de thìde         |
| 1998-01-01T00:00:00.000Z | 2 bliadhna         | o chionn 2 bliadhna         | 17520 uairean de thìde         |
| 1997-01-01T00:00:00.000Z | 3 bliadhna         | o chionn 3 bliadhna         | 26280 uairean de thìde         |
| 1996-01-01T00:00:00.000Z | 4 bliadhna         | o chionn 4 bliadhna         | 35064 uairean de thìde         |
| 1995-01-01T00:00:00.000Z | 5 bliadhna         | o chionn 5 bliadhna         | 43824 uairean de thìde         |
| 1994-01-01T00:00:00.000Z | 6 bliadhna         | o chionn 6 bliadhna         | 52584 uairean de thìde         |

## `formatRelative`

If now is January 1st, 2000, 00:00.

| Date                     | Result                            |
| ------------------------ | --------------------------------- |
| 2000-01-10T00:00:00.000Z | 10/20/1378                        |
| 2000-01-05T00:00:00.000Z | Diciadain aig 12:00 M.            |
| 2000-01-02T00:00:00.000Z | a-màireach aig 12:00 M.           |
| 2000-01-01T00:00:00.000Z | an-diugh aig 12:00 M.             |
| 1999-12-31T00:00:00.000Z | an-dè aig 12:00 M.                |
| 1999-12-27T00:00:00.000Z | mu dheireadh Diluain aig 12:00 M. |
| 1999-12-21T00:00:00.000Z | 09/30/1378                        |
