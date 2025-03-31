---
title: Column class
slug: api-reference-5x/korzh-easyquery-namespace/column-class
---

Represents some column which will be queried.
```csharp
public class Korzh.EasyQuery.Column

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | _caption | Column caption | 
| `Boolean` | _isDistinct | A field that indicates whether this `Column` must be marked as DISTINCT in result SQL statement. | 
| `Int32` | innerSortIndex |  | 
| `Boolean` | needAliasRegeneration | Indicates whether alias should be recreated | 
| `QueryParamList` | Params | The parameters associated with this column | 
| `ColumnStore` | parent | Parent columns storage. | 
| `SortDirection` | sorting | Column sorting direction | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | Alias | Gets or Sets the column alias. | 
| `Boolean` | AllowSorting | Gets a value indicating whether this column can be sorted. | 
| `EntityAttr` | BaseAttr | Gets the entity attribute (EntityAttr object) this column is based on. | 
| `String` | Caption | Gets or sets the column caption. | 
| `EqExpression` | Expr | Gets or sets the column expression. | 
| `Int32` | ExprType | Gets or sets the tag (type) of the expression. | 
| `Int32` | Index | Gets the index of column in column list. | 
| `Boolean` | IsAggregate | Gets a value indicating whether this [Korzh.EasyQuery.Column](//easyquery/docs/api-reference-5x/korzh-easyquery-namespace/column-class) is aggregate. | 
| `Boolean` | IsDistinct | Gets or sets a value indicating whether this `Column` must be marked as DISTINCT in result SQL statement. | 
| `Boolean` | IsEnabled | Gets or sets a value indicating whether this column is enabled. Only enabled columns will participates in the query. | 
| `Boolean` | IsJustSorting | Gets a value indicating whether this column is just sorting one (will not be shown in query result). | 
| `Boolean` | IsReadOnly | Gets or sets a value indicating whether this columns marked as read only. | 
| `DataModel` | Model | Gets or sets the reference to the data model where this column is defined. | 
| `ColumnStore` | Parent | Gets or sets the parent columns storage. | 
| `Query` | ParentQuery | Gets the parent query. | 
| `Int32` | SortIndex | Gets or sets the index of the column in the sorting list. Is used to load the column from XML. | 
| `SortDirection` | Sorting | Gets or sets the sorting direction. | 
| `Type` | SystemType | Gets the system type of this column. | 
| `String` | UserData | Gets or sets users data for the column | 


### Events

| Type | Name | Description | 
| --- | --- | --- | 
| `EventHandler` | ColumnChanged | Indicates that column was changed. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CheckDataModel() | Checks the data model object. Generates an exception if Model property has null value. | 
| `void` | CheckForParams() | Checks if the attribute associated with this column contains parameters and (if yes) - calls [Korzh.EasyQuery.Query.RefreshParams](//easyquery/docs/api-reference-5x/korzh-easyquery-namespace/query-class) method. | 
| `void` | ExprChangeHandler(`Object` sender, `EventArgs` e) | Expression's Change event handler. | 
| `EntityAttr` | GetAttribute() | Gets the attribute associated with this column | 
| `Int32` | GetHashCode() | Returns hash code for column | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads [Korzh.EasyQuery.Column](//easyquery/docs/api-reference-5x/korzh-easyquery-namespace/column-class) definition from XML. | 
| `void` | OnColumnChanged(`Int32` part) | Raises the ColumnChanged event. | 
| `Boolean` | OnColumnChanging(`Int32` part) | Called when the column is about to change. | 
| `void` | ReadFromJson(`JsonReader` reader) | Loads column from JSON reader.  Calls [Korzh.EasyQuery.Column.ReadOnePropFromJson(Newtonsoft.Json.JsonReader,System.String)](//easyquery/docs/api-reference-5x/korzh-easyquery-namespace/column-class) | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) | Loads column from JSON reader (asynchronous way).  Calls [Korzh.EasyQuery.Column.ReadOnePropFromJsonAsync(Newtonsoft.Json.JsonReader,System.String)](//easyquery/docs/api-reference-5x/korzh-easyquery-namespace/column-class) | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads the property from JSON reader or skip unused. | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads the property from JSON reader or skip unused (asynchronous way). | 
| `void` | RecreateExpression(`Int32` tag) | Recreates the column expression. | 
| `void` | RegenerateCaption() | Regenerates the column caption. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves the column definition to XML. | 
| `void` | WritePropertiesToJson(`JsonWriter` writer) | Saves content of the column to JSON. | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer) | Saves content of the column to JSON (asynchronous way). | 
| `void` | WriteToJson(`JsonWriter` writer) | Saves the column definition to JSON.  Calls [Korzh.EasyQuery.Column.WritePropertiesToJson(Newtonsoft.Json.JsonWriter)](//easyquery/docs/api-reference-5x/korzh-easyquery-namespace/column-class). | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer) | Saves the column definition to JSON (asynchronous way).  Calls [Korzh.EasyQuery.Column.WritePropertiesToJsonAsync(Newtonsoft.Json.JsonWriter)](//easyquery/docs/api-reference-5x/korzh-easyquery-namespace/column-class). |