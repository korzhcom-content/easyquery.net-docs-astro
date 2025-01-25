---
title: QueryColumnList class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnlist-class
---
Represents a list of columns.
```csharp
public class Korzh.EasyQuery.QueryColumnList
    : Collection<QueryColumn>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryColumnList() | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryColumnList](api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnlist-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| HasAggregate | `bool` | Gets a value indicating whether this list has at least one aggregate column. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ContainsGhosts(`QueryColumn&` column) | `bool` | Gets a value indicating whether this instance contains columns with "ghost" attributes. | 
| FindByAlias(`string` alias) | [QueryColumn](api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Finds the column by alias. | 
| FindByBaseAttrId(`string` attrId) | [QueryColumn](api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Finds the column by its base attribute ID. | 
| FindByCaption(`string` caption) | [QueryColumn](api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Finds the column by its caption. | 
| FindById(`string` id) | [QueryColumn](api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | inds the column by its id. | 
| GetEnabledByIndex(`int` index) | [QueryColumn](api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Gets the column by its index among all enabled columns. |