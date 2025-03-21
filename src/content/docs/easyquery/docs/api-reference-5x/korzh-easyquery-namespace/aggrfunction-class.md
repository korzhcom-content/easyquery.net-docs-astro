---
title: AggrFunction class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-namespace/aggrfunction-class
---


Represents aggregate function
```csharp
public class Korzh.EasyQuery.AggrFunction

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | Caption | Gets or sets the caption of aggregate function. | 
| `String` | DisplayFormat | Gets or sets the display format of aggregate function. | 
| `Boolean` | Enabled | Gets or sets a value indicating whether this [Korzh.EasyQuery.AggrFunction](/api-reference-5x/korzh-easyquery-namespace/aggrfunction-class) is enabled. | 
| `String` | ID | Gets the function ID (e.g. SUM or COUNT DISTINCT) | 
| `Boolean` | IsDefault | Gets a value indicating whether this function is default. | 
| `String` | MainText | Gets the main part of function's DisplayFormat (this text will be shown as link in query columns panel) | 
| `Int32` | ParamCount | Gets the number of parameters which are taken by the aggregate function. | 
| `String` | SqlExpr | Gets the function expression used in SQL expressions (e.g. SUM({arg}) or COUNT(DISTINCT {arg}) ) | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | ReadFromJson(`JsonReader` reader) |  | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) |  | 
| `void` | WriteToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) |  | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) |  |