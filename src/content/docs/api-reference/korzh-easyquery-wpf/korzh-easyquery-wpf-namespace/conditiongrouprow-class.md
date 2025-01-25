---
title: ConditionGroupRow class
slug: api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/conditiongrouprow-class
---
Used for linking conditions in groups
```csharp
public class Korzh.EasyQuery.Wpf.ConditionGroupRow
    : XRow

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ConditionGroupRow(`int` level, [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) predicate, [QueryPanel](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/querypanel-class) panel) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Wpf.ConditionGroupRow](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/conditiongrouprow-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Condition | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Gets or sets the predicate. | 
| EditMode | [EditModeKind](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/editmodekind-enum) | Gets or sets the edit mode. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| OnApplyTemplate() | `void` | When overridden in a derived class, is invoked whenever application code or internal processes call `System.Windows.FrameworkElement.ApplyTemplate`. | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| ConditionProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.ConditionGroupRow.Condition](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/conditiongrouprow-class) dependency property |