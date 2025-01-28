---
title: StringExtensions class
slug: api-reference-previous-versions/API reference 4.x (obsolete)/Korzh.EasyQuery namespace/stringextensions-class
---


```csharp
public static class Korzh.EasyQuery.StringExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | BreakBy(<span style='color: blue'>this</span> `String` s, `Char` sep, `String&` key, `String&` val) |  | 
| `Int32` | CompareToCI(<span style='color: blue'>this</span> `String` s1, `String` s2) | Compares two strings case-insatively . | 
| `Int32` | ToInt(<span style='color: blue'>this</span> `String` s, `Int32` defValue = 0) | Converts the string representation of a number to its 32-bit signed integer equivalent.  This method does not throw an exception. Instead - it returns some pre-defined value for unsuccessful conversions. | 
| `Int64` | ToLong(<span style='color: blue'>this</span> `String` s, `Int64` defValue = 0) | Converts the string representation of a number to its 64-bit signed integer equivalent.  This method does not throw an exception. Instead - it returns some pre-defined value for unsuccessful conversions. |