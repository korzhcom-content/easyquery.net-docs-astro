---
title: Upgrading from version 2.x to 3.0
slug: easyquery/docs/release-notes/upgrade-from-2.x-to-3.0
---


Version 3.0 of EasyQuery introduces an essential update of the library since its first release. You can find more information about the changes we made in [this document](https://korzh.com/easyquery/release-notes/version-3.0.0). Here we introduce a step-by-step description what changes you need to do in your project to make it compatible with version 3.0 of EasyQuery.

## 1. Remove all old assemblies from your project's references

These assemblies Korzh.WebControls.CLR40, Korzh.EasyQuery.CLR40 and Korzh.EasyQuery.WebControls.CLR40 should be removed from your project. Here we have indicated only the assemblies for WebForms (ASP.NET) edition of EasyQuery and for the .NET 4.0 but you need to do the same for any other edition and version of the .NET framework as well. Version 3.0 assemblies have different names (see the next step for details).

## 2. Add new EasyQuery assemblies.

Again we suppose here that your project is for the .NET 4.0 and WebForms edition of EasyQuery. Use similar assembly names for other editions and .NET versions. So you need to reference the following assemblies in your project: 

- Korzh.EasyQuery.NET40.dll
- Korzh.EasyQuery.Db.NET40.dll
- Korzh.EasyQuery.WebControls.NET40.dll

## 3. Add necessary namespaces

Since we have separated our core classes in two groups (the ones who represent the general query and data model objects and the classes which are designed to work with databases), you need to add Korzh.EasyQuery.Db namespace into the “using” section on the forms where EasyQuery controls are used:

`using Korzh.EasyQuery.Db;`

Additionally, you may need to remove the deprecated namespace `Korzh.WinControls.XControls` (in case it was used in your code).

## 4. Change the types of the Query and DataModel objects.

Since `Query` and `DataModel` classes now represent some basic entities (not dealt with a database) you need to change the types of those object to `DbQuery` and `DbModel` correspondingly. Additionally, you will need to do similar changes for all data model and query objects as well, since some basic classes (like SimpleCondition or EntityAttrExpr) have become abstract so you can't create an instance of these classes anymore and need to use some their Db* descendants. Moreover, some classes which were the sub-classes before (like `Query.Column` or `DataModel.EntityAttr`) now become first-level classes (`Column` or `EntityAttr` correspondingly).

Here is the full map of necessary changes: 

- DataModel → DbModel
- Query → DbQuery
- DataModel.Table → Table
- DataModel.Link → TableLink
- DataModel.Entity → DbEntity
- DataModel.EntityAttr → DbEntityAttr
- Query.Column → DbColumn
- Query.SimpleCondition → DbSimpleCondition
- Query.Predicate → DbPredicate
- EntityAttrExpr → DbEntityAttrExpr
- AggrFuncExpr → DbAggrFuncExpr

## 5. Changes in SQL generation logic

Since all SQL generation functionality in version 3.0 was moved into the particular SqlQueryBuilder class, you can't call BuildSQL() method of the Query object to build the SQL or read it's Result property to get the generated statement. Instead of that, you need to create an instance of SqlQueryBulider class and call its BuildSQL() method.

Example:
Was in version 2.x: 
```js
 query.BuildSQL();
  SqlTextBox.Text = query.Result.SQL;
```
Become in version 3.0:
```js
 SqlQueryBuilder builder = new SqlQueryBuilder(query);
  builder.BuildSQL();
  SqlTextBox.Text = builder.Result.SQL;
```
## 6. Change the types of other objects (conditions, expressions, attributes) if necessary

Here is the map of the changes you may need to do:

  - EntAttrProp → EntityAttrProp
  - EntAttrProp.SqlName → EntityAttrProp.Expression
  - Korzh.WinControls.XControls.XSortOrder → Korzh.EasyQuery.WinControls.XSortOrder

That's all. Now your project must work well with EasyQuery 3.0!