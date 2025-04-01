---
title: StringExtensions class
slug: api-reference-5x/korzh-easyquery-namespace/stringextensions-class
sidebar:
  order: 100
---

Useful extension methods for strings
```csharp
public static class Korzh.EasyQuery.StringExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | CompareToCI(<span style='color: blue'>this</span> `String` s1, `String` s2) | Compares two strings case-insatively . | 
| `String` | GetSecondPart(<span style='color: blue'>this</span> `String` s, `Char` sep) | Gets the second part of the string divided by separator. If the separator is not included - the whole string is returned. | 
| `String` | RemoveSymbols(<span style='color: blue'>this</span> `String` str, `Char[]` symbolsToRemove) | Removes the characters specified in the `symbolsToRemove` parameter and returns the modified string. | 
| `Boolean` | SplitBy(<span style='color: blue'>this</span> `String` s, `Char` sep, `String&` key, `String&` val) | Split the string on 2 parts by some separator. | 
| `Int32` | ToInt(<span style='color: blue'>this</span> `String` s, `Int32` defValue = 0) | Converts the string representation of a number to its 32-bit signed integer equivalent.  This method does not throw an exception. Instead - it returns some pre-defined value for unsuccessful conversions. | 
| `Int64` | ToLong(<span style='color: blue'>this</span> `String` s, `Int64` defValue = 0) | Converts the string representation of a number to its 64-bit signed integer equivalent.  This method does not throw an exception. Instead - it returns some pre-defined value for unsuccessful conversions. |
