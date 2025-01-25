---
title: StringTokenizer class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/stringtokenizer-class
---
This class allows an application to break a string into tokens.
```csharp
public class Korzh.EasyQuery.StringTokenizer

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| StringTokenizer(`StringBuilder` source, `string` separators, `string` spaces) | `void` | Initializes a new instance of the `StringTokenizer` class. | 
| StringTokenizer(`StringBuilder` source, `string` separators) | `void` | Initializes a new instance of the `StringTokenizer` class. | 
| StringTokenizer(`string` s) | `void` | Initializes a new instance of the `StringTokenizer` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| FullToken | `string` | Gets the full token string including quotes, brackets, etc. | 
| LastBreak | [StringTokenizer.TokenType](api-reference/korzh-easyquery/korzh-easyquery-namespace/stringtokenizer-tokentype-enum) | Returns the type of the last scan stop. It can be either space or separator. | 
| Position | `int` | Returns current Position in the scanned string. | 
| ProcessAIdents | `bool` | Gets or sets a value indicating whether the tokenizer should recognize the identifiers placed in [] brackets. | 
| TokenStart | `int` | Returns start position of the current token. | 
| TokType | [StringTokenizer.TokenType](api-reference/korzh-easyquery/korzh-easyquery-namespace/stringtokenizer-tokentype-enum) | Gets the current token type. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| FirstToken() | `string` | Get first token. | 
| NextToken() | `string` | Returns next token. |