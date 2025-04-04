---
title: DbFieldInfoList class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class
sidebar:
  order: 100
---

Represents the list of [Korzh.EasyQuery.Db.DbTableInfo](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbtableinfo-class) objects
```csharp
public class Korzh.EasyQuery.Db.DbFieldInfoList
    : Collection<DbFieldInfo>

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbFieldInfoList() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| SortedByPosition | `bool` | Gets or sets a value indicating whether the list of fields should be sorted by position or alphabetically (default value). | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| InsertItem(`int` index, [DbFieldInfo](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfo-class) item) | `void` | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. |
