---
title: StringExtensions class
slug: api-reference/EasyData.Core/EasyData namespace/stringextensions-class
---


```csharp
public static class EasyData.StringExtensions

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetSecondPart(<span style='color: blue'>this</span> `string` s, `Char` sep) | `string` | Gets the second part of the string divided by separator. If the separator is not included - the whole string is returned. | 
| ToIdentifier(<span style='color: blue'>this</span> `string` s) | `string` | Converts any string to an identifier (changes all symbols like '.' ';' '?' etc to '_') |