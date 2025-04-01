---
title: EOLSymbol enum
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/eolsymbol-enum
sidebar:
  order: 100
---

Represents the symbol (or symbols) which are used to separate lines in generated SQL statements
```csharp
public enum Korzh.EasyQuery.Db.EOLSymbol
    : Enum

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| None | `0` | If this value is chosen the result SQL will be returna as one long string without breaking it on several lines | 
| CRLF | `1` | Carriage Return (\r) and Line Feed (\n) symbol combination. Usual end of line in MS Windows world. | 
| LF | `2` | Line Feed (\n) symbol. Usual end of line in Unix world. | 
| CR | `3` | Carriage Return (\r). Usual end of line in Mac world. |
