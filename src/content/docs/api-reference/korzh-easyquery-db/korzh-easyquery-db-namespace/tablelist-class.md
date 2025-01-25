---
title: TableList class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelist-class
---
Represents list of the [Korzh.EasyQuery.Db.Table](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) objects.
```csharp
public class Korzh.EasyQuery.Db.TableList
    : Collection<Table>

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| TableList() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Add([Table](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) table) | `void` | Adds the table | 
| AddIfNotExists([Table](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) table) | `void` | Adds the table if there is no another table with the same alias in this list yet. | 
| AddRange(`IEnumerable`&lt;[Table](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class)&gt; tables, `bool` skipExisting = False) | `void` | Adds the range of tables | 
| ClearItems() | `void` |  | 
| CopyFrom([TableList](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelist-class) tables) | `void` | Copies tables from another list. | 
| FindByAlias(`string` alias) | [Table](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) | Finds the [Korzh.EasyQuery.Db.Table](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) object by its alias. | 
| FindByName(`string` name) | [Table](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) | Finds the [Korzh.EasyQuery.Db.Table](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) object by its name. | 
| GetCommaText() | `string` | Gets the string whcih contains comma separated list of tables | 
| GetUniqueAlias(`string` baseName) | `string` | Generates an unique [Korzh.EasyQuery.Db.Table](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) object alias by some base name | 
| InsertItem(`int` index, [Table](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) item) | `void` |  | 
| RemoveItem(`int` index) | `void` |  | 
| SortAlphabetically() | `void` | Sorts the list alphabetically. |