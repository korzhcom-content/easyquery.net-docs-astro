---
title: DataType enum
slug: api-reference-4x/korzh-easyquery-namespace/datatype-enum
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
| `4` | Int | 32-bit integer value | 
| `5` | Int32 | 32-bit integer value | 
| `6` | Int64 | 64-bit integer value | 
| `7` | Bool | Boolean value | 
| `8` | Float | Floating-point numeric value | 
| `9` | Currency | Money value | 
| `10` | BCD | Binary-coded decimal value | 
| `11` | Date | Date value | 
| `12` | Time | Time value | 
| `13` | DateTime | Date and time value | 
| `14` | Autoinc | Autoincrement 32-bit integer value | 
| `15` | Memo | MEMO value (text with unlimited length) | 
| `16` | Blob | BLOB value (any data with unlimited length) | 
| `17` | FixedChar | Fixed character value | 
| `18` | Guid | The unique identifier | 
| `19` | Geometry | Any geometry data | 
| `20` | Geography | Any data that represents some geography objects |