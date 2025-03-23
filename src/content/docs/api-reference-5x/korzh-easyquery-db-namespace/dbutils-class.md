---
title: DbUtils class
slug: api-reference-5x/korzh-easyquery-db-namespace/dbutils-class
---


Different utilties for database-oriented operations  For internal use only
```csharp
public static class Korzh.EasyQuery.Db.DbUtils

```

### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Dictionary<String, Boolean>` | sqlReservedKeywords |  | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | ContainNonAlphaSymbols(`String` s) |  | 
| `Boolean` | ContainsAggregateFunctions(`String` sqlExpr) | Determines whether SQL expression passed in parameter contains aggregate functions. | 
| `DbType` | DataTypeToDbType(`DataType` dt) | Converts DataType enum value to corresponding DbType | 
| `DataType` | EdmxTypeToDataType(`String` edmxType) | Converts type form EDMX file into `DataType` enumeration. | 
| `Boolean` | IsNonAlphaSymbol(`Char` c) |  | 
| `Boolean` | IsSQLKeyWord(`String` s) |  | 
| `Boolean` | NeedQuoting(`String` s) |  | 
| `DataType` | SqlServerTypeToDataType(`String` sqlType) | Converts SQL Server data types to `DataType` enumeration. |