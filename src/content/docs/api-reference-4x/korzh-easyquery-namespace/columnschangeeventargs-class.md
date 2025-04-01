---
title: ColumnsChangeEventArgs class
slug: api-reference-4x/korzh-easyquery-namespace/columnschangeeventargs-class
sidebar:
  order: 100
---

Provides data for [Korzh.EasyQuery.Query.ColumnsChanged](///easyquery/docs/api-reference-4x/korzh-easyquery-namespace/query-class) event
```csharp
public class Korzh.EasyQuery.ColumnsChangeEventArgs
    : EventArgs

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Column` | Column | Gets or sets the column which was changed. Can be null in case of Total change | 
| `Int32` | Info | Gets or sets the addtional information of changed column.  This property can be used for different purposes.  For example for ChangeType.Remove events it contains index of removed column | 
| `Int32` | Part | Gets or sets the value that indicates what part of the column was changed  0 - we don't know, 1 - expression, 2 - caption, 3 - sorting | 
| `ChangeType` | What | Gets or sets the attribute that shows what exactly was changed. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `ColumnsChangeEventArgs` | Default | Gets the default ConditionsChangedEventArgs object. |
