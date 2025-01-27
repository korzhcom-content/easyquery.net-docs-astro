---
title: StringTokenizer.TokenType enum
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery namespace/stringtokenizer-tokentype-enum
---


Represents the types of tokens.  Used in [Korzh.EasyQuery.StringTokenizer](/api-reference/korzh-easyquery/korzh-easyquery-namespace/stringtokenizer-class) class
```csharp
public enum Korzh.EasyQuery.StringTokenizer.TokenType
    : Enum

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| Space | `0` | Space. It's not actually the type of a token but it's used for LastBreak property of [Korzh.EasyQuery.StringTokenizer](/api-reference/korzh-easyquery/korzh-easyquery-namespace/stringtokenizer-class) class | 
| Separator | `1` | Separator | 
| Identifier | `2` | Word | 
| CString | `3` | C-style string (some text placed in double quotes) | 
| PascalString | `4` | Pascal-style string (some text placed in single quotes) | 
| AIdent | `5` | Access SQL identifier (some text placed in [ ] brackets) |