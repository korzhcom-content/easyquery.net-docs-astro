---
title: TableLinkStore class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelinkstore-class
sidebar:
  order: 100
---

Represents a storage of links connected with some DbModel object
```csharp
public class Korzh.EasyQuery.Db.TableLinkStore
    : TableLinkList

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| TableLinkStore([DbModel](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) dbModel) | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Model | [DbModel](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) | Current DbModel | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddLink(`string` table1Name, `string` table2Name, `string` field1, `string` field2, [TableLinkType](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelinktype-enum) linkType = 0) | [TableLink](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) | Adds new link | 
| AddRange(`IEnumerable`&lt;[TableLink](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class)&gt; links) | `void` | Adds links | 
| ClearItems() | `void` | Clears the items. | 
| InsertItem(`int` index, [TableLink](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) item) | `void` | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Reads the list of links from JSON (asynchronous way). | 
| RemoveByTable([Table](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) table) | `void` | Removes all links which contain the table passed in parameter | 
| RemoveItem(`int` index) | `void` | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. | 
| UpdateLink(`string` tableName1, `string` tableName2, [TableLinkType](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelinktype-enum) linkType) | `bool` | Finds link by table aliases and updates its type | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Writes the list of linksto JSON. |
