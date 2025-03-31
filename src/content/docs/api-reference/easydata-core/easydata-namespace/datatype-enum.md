---
title: DataType enum
slug: api-reference/easydata-core/easydata-namespace/datatype-enum
---

Represents the common types of the data.
```csharp
public enum EasyData.DataType
    : Enum

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| Unknown | `0` | Unknown type value | 
| String | `1` | String value | 
| Byte | `2` | 8-bit integer value | 
| Word | `3` | 16-bit integer value | 
| Int32 | `4` | 32-bit integer value | 
| Int64 | `5` | 64-bit integer value | 
| Bool | `6` | Boolean value | 
| Float | `7` | Floating-point numeric value | 
| Currency | `8` | Money value | 
| BCD | `9` | Binary-coded decimal value | 
| Date | `10` | Date value | 
| Time | `11` | Time value | 
| DateTime | `12` | Date and time value | 
| Autoinc | `13` | Autoincrement 32-bit integer value | 
| Memo | `14` | MEMO value (text with unlimited length) | 
| Blob | `15` | BLOB value (any data with unlimited length) | 
| FixedChar | `16` | Fixed character value | 
| Guid | `17` | The unique identifier | 
| Geometry | `18` | Any geometry data | 
| Geography | `19` | Any data that represents some geography objects |