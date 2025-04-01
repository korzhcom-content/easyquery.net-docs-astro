---
title: ConditionsChangeEventArgs class
slug: api-reference-5x/korzh-easyquery-namespace/conditionschangeeventargs-class
sidebar:
  order: 100
---

Provides data for [Korzh.EasyQuery.Query.ConditionsChanged](///////////////easyquery/docs/api-reference-5x/korzh-easyquery-namespace/query-class) event
```csharp
public class Korzh.EasyQuery.ConditionsChangeEventArgs
    : EventArgs

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Condition` | Condition | Gets or sets the condition which was changed. Can be null in case of Total change | 
| `Int32` | Info | Gets or sets the addtional information of changed condition.  This property can be used for different purposes.  For example for ChangeType.Remove events it contains index of removed condition | 
| `ChangeType` | What | Gets or sets the attribute that shows what exactly was changed. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `ConditionsChangeEventArgs` | Default | Gets the default ConditionsChangedEventArgs object. |
