---
title: DbUtils class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbutils-class
sidebar:
  order: 100
---

Different utilties for database-oriented operations  For internal use only
```csharp
public static class Korzh.EasyQuery.Db.DbUtils

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ContainsAggregateFunctions(`string` sqlExpr) | `bool` | Determines whether SQL expression passed in parameter contains aggregate functions. | 
| DataTypeToDbType([DataType](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) dt) | `DbType` | Converts DataType enum value to corresponding DbType | 
| EdmxTypeToDataType(`string` edmxType) | [DataType](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Converts type form EDMX file into `DataType` enumeration. | 
| HasSelectStatement(`string` sqlExpr) | `bool` | Determines whether the expression passed in parameter has a select statement. | 
| SqlServerTypeToDataType(`string` sqlType) | [DataType](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Converts SQL Server data types to `DataType` enumeration. |
