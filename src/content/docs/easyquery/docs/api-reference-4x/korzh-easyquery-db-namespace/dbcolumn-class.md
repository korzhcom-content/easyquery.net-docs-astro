---
title: DbColumn class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbcolumn-class
---


Represents database table column
```csharp
public class Korzh.EasyQuery.Db.DbColumn
    : Column

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `EntityAttr` | BaseAttr | Gets the entity attribute ([Korzh.EasyQuery.EntityAttr](/api-reference-4x/korzh-easyquery-namespace/entityattr-class) object) this column is based on. | 
| `DbModel` | Model | Gets or sets the reference to the data model where this column is defined. | 
| `SortDirection` | Sorting | Gets or sets the sorting. | 
| `TableList` | UsedTables | Gets the used tables. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | FillTablesList() | Fills the list of used tables. | 
| `String` | GetAlias(`DbQueryFormats` formats) | Gets the column alias (for SELECT or ORDER BY clause). | 
| `String` | GetGroupByExpr(`DbQueryFormats` formats) | Gets the column's expression using in GROUP BY clause. | 
| `String` | GetOrderByExpr(`DbQueryFormats` formats) | Gets the columns expression for ORDER BY clause. | 
| `String` | GetSelectExpr(`DbQueryFormats` formats) | Gets the columns expression for SELECT clause. | 
| `void` | RecreateExpression(`String` type) | Recreates the column expression. | 
| `Boolean` | UseAlias(`DbQueryFormats` formats) | Gets a value indicating whether this column used the alias name or not. |