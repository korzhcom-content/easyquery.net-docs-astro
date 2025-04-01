---
title: DbFieldInfo class
slug: api-reference-4x/korzh-easyquery-db-namespace/dbfieldinfo-class
sidebar:
  order: 100
---
# DbFieldInfo class

Represents a structure that contains information about some table field
```csharp
public class Korzh.EasyQuery.Db.DbFieldInfo

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | IsKey | If the field is the key; | 
| `Boolean` | IsNullable | Indicates whether the field is nullable; | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DataType` | FieldType | Gets or sets the type of the field. | 
| `String` | Name | Gets or sets the name of table. | 
| `Int32` | Position | Gets or sets the original position of the field in table. | 
| `Int64` | Size | Gets or sets the size of field . | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | ToString() | Returns a <see cref="T:System.String"></see> that represents the current <see cref="T:System.Object"></see>. |
