---
title: QueryFormats class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery namespace/queryformats-class
---


Represents different formats of statements.
```csharp
public class Korzh.EasyQuery.QueryFormats
    : IQueryFormats

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `DataTypeList` | quotedTypes | Represents list of data types that must be quoted in result SQL. | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | AlphaAlias | Gets or sets a value indicating whether column alias should have only "alpha" symbols. | 
| `String` | DateFormat | Gets or sets the format of date constant values in generated SQL statements. | 
| `String` | DateTimeFormat | Gets or sets the format of date/time constant values in generated SQL statements. | 
| `EOLSymbol` | EOL | Gets or sets the end-of-line symbol(s) | 
| `String` | EscapeSymbol | Gets or sets the escape symbol. | 
| `String` | FalseValue | Gets or sets the text used for "False" value in SQL expressions. | 
| `Boolean` | FilterMode | Gets or sets a value indicating whether we should generate the query for filter (e.g. without table names in field representations). | 
| `String` | LowerFuncName | Gets or sets the name of the LOWER function. | 
| `Int32` | MaxIdentLen | Gets or sets a maximum length of identifiers (e.g. table or column aliases) in generated queries. 0 - means that this options is ignored | 
| `String` | MoneySuffix | Gets or sets the suffix for the values with "money" or "currency" types. | 
| `OrderByStyles` | OrderByStyle | Gets or sets the style of ORDER BY clause. | 
| `Boolean` | QuoteBool | Gets or sets a value indicating whether currently used SQL syntax requires to quote the boolean values. | 
| `Boolean` | QuoteColumnAlias | Gets or sets a value indicating whether all columns aliases must be quotes in result SQL. | 
| `Boolean` | QuoteTime | Gets or sets a value indicating whether currently used SQL syntax requires to quote the date and time values. | 
| `Boolean` | SupportPaging | Gets or sets a value indicating whether paging commands (like OFFSET/FETCH) are supported. | 
| `String` | TimeFormat | Gets or sets the format of time constant values used in generated SQL statements. | 
| `String` | TrueValue | Gets or sets the text used for "True" value in SQL expressions. | 
| `ColumnAliasesUsage` | UseColumnAliases | Gets or sets the value that determine when column aliases must be used in result SQL. | 
| `Boolean` | UseTimezoneOffset | Gets or sets a value indicating whether query builder should use the timezone offset when generates date/time values.  The timezone offeset is usually received from the client side. | 
| `Boolean` | UseUtcTime | Gets or sets a value indicating whether query builder should use UTC time when it works with date/time values. | 
| `Char` | WildcardAny | Gets or sets the wild symbol used in LIKE SQL operator (% by default). | 
| `Char` | WildcardSingle | Gets or sets the wildcard symbol used in LIKE SQL operator to match any single charcter (_ by default). | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CopyFrom(`IQueryFormats` source) | Copies the formats from another formats object. | 
| `void` | CopyFromCore(`QueryFormats` source) | Copies all formats from some QueryFormats object. | 
| `Boolean` | Equals(`Object` obj) | Determines whether the specified `System.Object` is equal to this instance. | 
| `String` | GetEolSymbol() | Gets the string representation of end-of-line symbol(s) | 
| `Int32` | GetHashCode() | Returns a hash code for this instance. | 
| `Boolean` | IsQuotedType(`DataType` type) | Determines whether the specified type must be quoted. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads formats from XML reader. | 
| `void` | LoadNode(`String` nodeName, `String` nodeValue) | Loads the root node of the [Korzh.EasyQuery.QueryFormats](/api-reference-5x/korzh-easyquery-namespace/queryformats-class) object. | 
| `void` | ReadFromJson(`JsonReader` reader) | Loads QueryFormats from JSON.  Calls [Korzh.EasyQuery.QueryFormats.ReadOnePropFromJson(Newtonsoft.Json.JsonReader,System.String)](/api-reference-5x/korzh-easyquery-namespace/queryformats-class) function. | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) | Loads QueryFormats from JSON (asynchronous way).  Calls [Korzh.EasyQuery.QueryFormats.ReadOnePropFromJsonAsync(Newtonsoft.Json.JsonReader,System.String)](/api-reference-5x/korzh-easyquery-namespace/queryformats-class) function. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Loads a property of QueryFormats. | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Loads a property of QueryFormats (asynchronous way). | 
| `void` | SaveNodes(`XmlWriter` writer) | Saves the root nodes of the formats. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` rootNodeName) | Saves formats to XML writer. | 
| `void` | WriteContentToJson(`JsonWriter` writer) | Saves the properties of QueryFormats to JSON. | 
| `Task` | WriteContentToJsonAsync(`JsonWriter` writer) | Saves the properties of QueryFormats to JSON (asynchronous way). | 
| `void` | WriteToJson(`JsonWriter` writer) | Saves QueryFormats to JSON.  Calls [Korzh.EasyQuery.QueryFormats.WriteContentToJson(Newtonsoft.Json.JsonWriter)](/api-reference-5x/korzh-easyquery-namespace/queryformats-class) function. | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer) | Saves QueryFormats to JSON (asynchronous way).  Calls [Korzh.EasyQuery.QueryFormats.WriteContentToJsonAsync(Newtonsoft.Json.JsonWriter)](/api-reference-5x/korzh-easyquery-namespace/queryformats-class) function. |