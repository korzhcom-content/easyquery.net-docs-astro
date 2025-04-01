---
title: ConditionsChangeEventArgs class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/conditionschangeeventargs-class
sidebar:
  order: 100
---

Provides data for [Korzh.EasyQuery.Query.ConditionsChanged](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) event
```csharp
public class Korzh.EasyQuery.ConditionsChangeEventArgs
    : EventArgs

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ConditionsChangeEventArgs([ChangeType](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/changetype-enum) what, [Condition](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) condition, `int` info) | `void` | Initializes a new instance of the [Korzh.EasyQuery.ConditionsChangeEventArgs](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/conditionschangeeventargs-class) class. | 
| ConditionsChangeEventArgs([ChangeType](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/changetype-enum) what, [Condition](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) condition) | `void` | Initializes a new instance of the [Korzh.EasyQuery.ConditionsChangeEventArgs](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/conditionschangeeventargs-class) class. | 
| ConditionsChangeEventArgs() | `void` | Initializes a new instance of the [Korzh.EasyQuery.ConditionsChangeEventArgs](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/conditionschangeeventargs-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Condition | [Condition](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Gets or sets the condition which was changed. Can be null in case of Total change | 
| Info | `int` | Gets or sets the addtional information of changed condition.  This property can be used for different purposes.  For example for ChangeType.Remove events it contains index of removed condition | 
| What | [ChangeType](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/changetype-enum) | Gets or sets the attribute that shows what exactly was changed. | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| Default | [ConditionsChangeEventArgs](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/conditionschangeeventargs-class) | Gets the default ConditionsChangedEventArgs object. |
