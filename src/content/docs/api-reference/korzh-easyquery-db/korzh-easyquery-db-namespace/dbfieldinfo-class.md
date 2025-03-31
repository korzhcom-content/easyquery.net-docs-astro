---
title: DbFieldInfo class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfo-class
---

Represents a structure that contains information about some table field
```csharp
public class Korzh.EasyQuery.Db.DbFieldInfo

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbFieldInfo() | `void` |  | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| FieldType | [DataType](//easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets or sets the type of the field. | 
| IsForeignKey | `bool` | If the field is foreign key | 
| IsKey | `bool` | If the field is the key; | 
| IsNullable | `bool` | Indicates whether the field is nullable; | 
| IsPrimaryKey | `bool` | If the field is primary key | 
| Name | `string` | Gets or sets the name of table. | 
| Position | `int` | Gets or sets the original position of the field in table. | 
| Size | `long` | Gets or sets the size of field . | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ToString() | `string` | Returns a <see cref="T:System.String"></see> that represents the current <see cref="T:System.Object"></see>. |