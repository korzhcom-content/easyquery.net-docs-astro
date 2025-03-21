---
title: DataType enum
slug: easyquery/docs/api-reference-5x/korzh-easyquery-namespace/datatype-enum
---


Represents the common types of the data.
```csharp
public enum Korzh.EasyQuery.DataType
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | Unknown | Unknown type value | 
| `1` | String | String value | 
| `2` | Byte | 8-bit integer value | 
| `3` | Word | 16-bit integer value | 
| `4` | Int32 | 32-bit integer value | 
| `5` | Int64 | 64-bit integer value | 
| `6` | Bool | Boolean value | 
| `7` | Float | Floating-point numeric value | 
| `8` | Currency | Money value | 
| `9` | BCD | Binary-coded decimal value | 
| `10` | Date | Date value | 
| `11` | Time | Time value | 
| `12` | DateTime | Date and time value | 
| `13` | Autoinc | Autoincrement 32-bit integer value | 
| `14` | Memo | MEMO value (text with unlimited length) | 
| `15` | Blob | BLOB value (any data with unlimited length) | 
| `16` | FixedChar | Fixed character value | 
| `17` | Guid | The unique identifier | 
| `18` | Geometry | Any geometry data | 
| `19` | Geography | Any data that represents some geography objects |