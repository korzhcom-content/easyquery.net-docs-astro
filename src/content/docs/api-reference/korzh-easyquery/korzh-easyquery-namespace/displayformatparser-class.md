---
title: DisplayFormatParser class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/displayformatparser-class
---
Represents a special class used for parsing operator display format values.
```csharp
public class Korzh.EasyQuery.DisplayFormatParser

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DisplayFormatParser() | `void` | Initializes a new instance of the [Korzh.EasyQuery.DisplayFormatParser](api-reference/korzh-easyquery/korzh-easyquery-namespace/displayformatparser-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ExprNum | `int` | Gets the numeric value of expression (if possible). | 
| Token | [DisplayFormatParser.TokenType](api-reference/korzh-easyquery/korzh-easyquery-namespace/displayformatparser-tokentype-enum) | Gets the token type. | 
| TokenText | `string` | Gets the text of the token. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Next() | `bool` | Parse the source to the next token. | 
| Start(`string` s) | `void` | Starts the parsing of specified string. |