---
title: QueryColumn class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class
sidebar:
  order: 100
---

Represents some column which will be queried.
```csharp
public class Korzh.EasyQuery.QueryColumn

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| _caption | `string` | QueryColumn caption | 
| _isDistinct | `bool` | A field that indicates whether this `QueryColumn` must be marked as DISTINCT in result SQL statement. | 
| Params | [QueryParamList](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class) | The parameters associated with this column | 
| parent | [QueryColumnStore](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnstore-class) | Parent columns storage. | 
| sorting | [SortDirection](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortdirection-enum) | QueryColumn sorting direction | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Alias | `string` | Gets or Sets the column alias. | 
| AllowSorting | `bool` | Gets a value indicating whether this column can be sorted. | 
| BaseAttr | [EntityAttr](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) | Gets the entity attribute (EntityAttr object) this column is based on. | 
| Caption | `string` | Gets or sets the column caption. | 
| DataType | [DataType](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets the data type of the column. | 
| Expr | [EqExpression](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | Gets or sets the column expression. | 
| ExprType | `int` | Gets or sets the tag (type) of the expression. | 
| Id | `string` | The column's Id. | 
| Index | `int` | Gets the index of column in column list. | 
| IsAggregate | `bool` | Gets a value indicating whether this <see cref="!:Column" /> is aggregate. | 
| IsDistinct | `bool` | Gets or sets a value indicating whether this `QueryColumn` must be marked as DISTINCT in result SQL statement. | 
| IsEnabled | `bool` | Gets or sets a value indicating whether this column is enabled. Only enabled columns will participates in the query. | 
| IsHidden | `bool` | Gets or sets a value indicating whether this `QueryColumn`  is hidden - it will participate in the query but is not shown in the result set. | 
| IsJustSorting | `bool` | Gets a value indicating whether this column is just sorting one (will not be shown in query result). | 
| IsReadOnly | `bool` | Gets or sets a value indicating whether this columns marked as read only. | 
| Model | [DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Gets or sets the reference to the data model where this column is defined. | 
| Parent | [QueryColumnStore](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnstore-class) | Gets or sets the parent columns storage. | 
| ParentQuery | [Query](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets the parent query. | 
| SortIndex | `int` | Gets or sets the index of the column in the sorting list. Is used to load the column from XML. | 
| Sorting | [SortDirection](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortdirection-enum) | Gets or sets the sorting direction. | 
| SystemType | `Type` | Gets the system type of this column. | 
| UserData | `string` | Gets or sets users data for the column | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| ColumnChanged | `EventHandler` | Indicates that column was changed. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CheckDataModel() | `void` | Checks the data model object. Generates an exception if Model property has null value. | 
| ExprChangeHandler(`object` sender, `EventArgs` e) | `void` | Expression's Change event handler. | 
| GetAttribute() | [EntityAttr](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) | Gets the attribute associated with this column | 
| GetHashCode() | `int` | Returns hash code for column | 
| LoadFromXmlReader(`XmlReader` reader) | `void` | Loads <see cref="!:Column" /> definition from XML. | 
| OnColumnChanged(`int` part) | `void` | Raises the ColumnChanged event. | 
| OnColumnChanging(`int` part) | `bool` | Called when the column is about to change. | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Loads column from JSON reader (asynchronous way).  Calls [Korzh.EasyQuery.QueryColumn.ReadOnePropFromJsonAsync(Newtonsoft.Json.JsonReader,System.String)](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads the property from JSON reader or skip unused (asynchronous way). | 
| RecreateExpression(`int` tag) | `void` | Recreates the column expression. | 
| RegenerateCaption() | `void` | Regenerates the column caption. | 
| SaveToXmlWriter(`XmlWriter` writer) | `void` | Saves the column definition to XML. | 
| WritePropertiesToJsonAsync(`JsonWriter` writer) | `Task` | Saves content of the column to JSON (asynchronous way). | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Saves the column definition to JSON (asynchronous way).  Calls [Korzh.EasyQuery.QueryColumn.WritePropertiesToJsonAsync(Newtonsoft.Json.JsonWriter)](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class). |
