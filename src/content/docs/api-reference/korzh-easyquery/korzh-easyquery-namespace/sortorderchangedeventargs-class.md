---
title: SortOrderChangedEventArgs class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/sortorderchangedeventargs-class
---

Provides data for [Korzh.EasyQuery.Query.SortOrderChanged](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) event
```csharp
public class Korzh.EasyQuery.SortOrderChangedEventArgs
    : EventArgs

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SortOrderChangedEventArgs([ChangeType](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/changetype-enum) what, [QueryColumn](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column, `int` info) | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryColumnsChangeEventArgs](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnschangeeventargs-class) class. | 
| SortOrderChangedEventArgs([ChangeType](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/changetype-enum) what, [QueryColumn](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column) | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryColumnsChangeEventArgs](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnschangeeventargs-class) class. | 
| SortOrderChangedEventArgs() | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryColumnsChangeEventArgs](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnschangeeventargs-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Column | [QueryColumn](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Gets or sets the column which was changed. Can be null in case of Total change | 
| Info | `int` | Gets or sets the addtional information of changed column.  This property can be used for different purposes.  For example for ChangeType.Remove events it contains index of removed column | 
| SyncColSortOrder | `bool` | Gets or sets a value indicating whether the order of columns must be synchronized with their sorting order. | 
| What | [ChangeType](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/changetype-enum) | Gets or sets the attribute that shows what exactly was changed. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| SortOrderChanged | `SortOrderChangedEventHandler` | Occurs when the list of sorted columns was changed. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| OnSortOrderChanged([SortOrderChangedEventArgs](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortorderchangedeventargs-class) e) | `void` | Raises the `SortOrderChanged` event. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Default | [SortOrderChangedEventArgs](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortorderchangedeventargs-class) | Gets the default ConditionsChangedEventArgs object. |