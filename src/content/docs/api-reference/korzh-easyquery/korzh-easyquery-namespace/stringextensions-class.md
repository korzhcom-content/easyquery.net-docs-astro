---
title: StringExtensions class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/stringextensions-class
---
Useful extension methods for strings
```csharp
public static class Korzh.EasyQuery.StringExtensions

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CompareToCI(<span style='color: blue'>this</span> `string` s1, `string` s2) | `int` | Compares two strings case-insatively . | 
| GetSecondPart(<span style='color: blue'>this</span> `string` s, `Char` sep) | `string` | Gets the second part of the string divided by separator. If the separator is not included - the whole string is returned. | 
| RemoveSymbols(<span style='color: blue'>this</span> `string` str, `Char[]` symbolsToRemove) | `string` | Removes the characters specified in the `symbolsToRemove` parameter and returns the modified string. | 
| SplitBy(<span style='color: blue'>this</span> `string` s, `Char` sep, `String&` key, `String&` val) | `bool` | Split the string on 2 parts by some separator. | 
| ToInt(<span style='color: blue'>this</span> `string` s, `int` defValue = 0) | `int` | Converts the string representation of a number to its 32-bit signed integer equivalent.  This method does not throw an exception. Instead - it returns some pre-defined value for unsuccessful conversions. | 
| ToLong(<span style='color: blue'>this</span> `string` s, `long` defValue = 0) | `long` | Converts the string representation of a number to its 64-bit signed integer equivalent.  This method does not throw an exception. Instead - it returns some pre-defined value for unsuccessful conversions. |