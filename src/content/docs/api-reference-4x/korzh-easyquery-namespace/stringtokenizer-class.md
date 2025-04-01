---
title: StringTokenizer class
slug: api-reference-4x/korzh-easyquery-namespace/stringtokenizer-class
sidebar:
  order: 100
---
# StringTokenizer class

This class allows an application to break a string into tokens.
```csharp
public class Korzh.EasyQuery.StringTokenizer

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | FullToken | Gets the full token string including quotes, brackets, etc. | 
| `TokenType` | LastBreak | Returns the type of the last scan stop. It can be either space or separator. | 
| `Int32` | Position | Returns current position in the scanned string. | 
| `Boolean` | ProcessAIdents | Gets or sets a value indicating whether the tokenizer should recognize the identifiers placed in [] brackets. | 
| `Int32` | TokenStart | Returns start position of the current token. | 
| `TokenType` | TokType | Gets the current token type. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | FirstToken() | Get first token. | 
| `String` | NextToken() | Returns next token. |
