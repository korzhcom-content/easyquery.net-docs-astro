---
title: TableCategoryList class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablecategorylist-class
---

Represents a list of table categories
```csharp
public class Korzh.EasyQuery.Db.TableCategoryList
    : List<TableCategory>

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| TableCategoryList() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.TableCategoryList](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablecategorylist-class) class. | 
| TableCategoryList(`IEnumerable`&lt;[TableCategory](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablecategory-class)&gt; items) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.TableCategoryList](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablecategorylist-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| FindByName(`string` name) | [TableCategory](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablecategory-class) | Finds a category by its name. |