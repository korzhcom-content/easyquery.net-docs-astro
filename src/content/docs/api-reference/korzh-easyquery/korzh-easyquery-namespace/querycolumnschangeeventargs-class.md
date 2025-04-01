---
title: QueryColumnsChangeEventArgs class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnschangeeventargs-class
sidebar:
  order: 100
---

Provides data for [Korzh.EasyQuery.Query.ColumnsChanged](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) event
```csharp
public class Korzh.EasyQuery.QueryColumnsChangeEventArgs
    : EventArgs

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryColumnsChangeEventArgs([ChangeType](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/changetype-enum) what, [QueryColumn](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column, `int` info, `int` part = 0) | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryColumnsChangeEventArgs](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnschangeeventargs-class) class. | 
| QueryColumnsChangeEventArgs([ChangeType](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/changetype-enum) what, [QueryColumn](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column) | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryColumnsChangeEventArgs](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnschangeeventargs-class) class. | 
| QueryColumnsChangeEventArgs() | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryColumnsChangeEventArgs](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnschangeeventargs-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Column | [QueryColumn](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Gets or sets the column which was changed. Can be null in case of Total change | 
| Info | `int` | Gets or sets the addtional information of changed column.  This property can be used for different purposes.  For example for ChangeType.Remove events it contains index of removed column | 
| Part | `int` | Gets or sets the value that indicates what part of the column was changed  0 - we don't know, 1 - expression, 2 - caption, 3 - sorting | 
| What | [ChangeType](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/changetype-enum) | Gets or sets the attribute that shows what exactly was changed. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Default | [QueryColumnsChangeEventArgs](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnschangeeventargs-class) | Gets the default ConditionsChangedEventArgs object. |
