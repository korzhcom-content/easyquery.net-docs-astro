---
title: DisplayFormatParser class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery namespace/displayformatparser-class
---


Represents a special class used for parsing operator display format values.
```csharp
public class Korzh.EasyQuery.DisplayFormatParser

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | ExprNum | Gets the numeric value of expression (if possible). | 
| `TokenType` | Token | Gets the token type. | 
| `String` | TokenText | Gets the text of the token. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | Next() | Parse the source to the next token. | 
| `void` | Start(`String` s) | Starts the parsing of specified string. |