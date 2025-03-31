---
title: SpecialDateTime enum
slug: api-reference-5x/korzh-easyquery-namespace/specialdatetime-enum
---

Represents some predefined "special" date/time values
```csharp
public enum Korzh.EasyQuery.SpecialDateTime
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | Today | Represents the current date | 
| `1` | Yesterday | Represents the yesterday date | 
| `2` | Tomorrow | Represents the tomorrow date | 
| `3` | FirstDayOfWeek | Represents the first day of the current week | 
| `4` | FirstDayOfNextWeek | Represents the first day of the next week | 
| `5` | FirstDayOfPrevWeek | Represents the first day of the previous week | 
| `6` | FirstDayOfMonth | Represents the first day of the current month | 
| `7` | FirstDayOfPrevMonth | Represents the first day of the previous month | 
| `8` | FirstDayOfNextMonth | Represents the first day of the next month | 
| `9` | LastDayOfMonth | Represents the last day of the current month | 
| `10` | FirstDayOfYear | Represents the first day of the current year | 
| `11` | FirstDayOfNextYear | Represents the first day of the next year | 
| `12` | FirstDayOfPrevYear | Represents the first day of the last year | 
| `13` | Now | Represents the current time | 
| `14` | HourStart | Represents zero minute and second of the current hour | 
| `15` | Midnight | Represents the midnight of the current day | 
| `16` | Noon | Represents the noon of the current day |