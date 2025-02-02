---
title: QueryParam class
slug: api-reference-5x/korzh-easyquery-namespace/queryparam-class
---


Represents one parameter in parametrized query statement
```csharp
public class Korzh.EasyQuery.QueryParam

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | Caption | Gets or sets the caption. | 
| `DataType` | DataType | Type of the parameter | 
| `String` | EditorId | Gets or sets the default value editor for this parameter | 
| `String` | Id | Parameter ID | 
| `Boolean` | IsGenerated | Gets a value indicating whether this parameter is generated. | 
| `String` | Value | Parameter value | 
| `Object` | ValueAsObject | Returns the value of parameter as object (according to `DataType`). | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CopyFrom(`QueryParam` param) | Copies all properties of query parameter to another parameter. | 
| `void` | CoreReadXmlAttribute(`String` attrName, `String` attrValue) | Read one attribute of XML element. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads parameter's properties from XML. | 
| `void` | ReadFromJson(`JsonReader` reader) |  | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) |  | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves the parameter to XML. | 
| `void` | WriteToJson(`JsonWriter` writer) |  | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer) |  |