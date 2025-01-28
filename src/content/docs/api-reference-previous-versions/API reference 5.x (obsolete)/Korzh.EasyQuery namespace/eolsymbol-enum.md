---
title: EOLSymbol enum
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery namespace/eolsymbol-enum
---


Represents the symbol (or symbols) which are used to separate lines in generated SQL statements
```csharp
public enum Korzh.EasyQuery.EOLSymbol
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | None | If this value is chosen the result SQL will be returna as one long string without breaking it on several lines | 
| `1` | CRLF | Carriage Return (\r) and Line Feed (\n) symbol combination. Usual end of line in MS Windows world. | 
| `2` | LF | Line Feed (\n) symbol. Usual end of line in Unix world. | 
| `3` | CR | Carriage Return (\r). Usual end of line in Mac world. |