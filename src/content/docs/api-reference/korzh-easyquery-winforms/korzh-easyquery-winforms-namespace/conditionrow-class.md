---
title: ConditionRow class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditionrow-class
sidebar:
  order: 100
---

Represents one row in [Korzh.EasyQuery.Query](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) object.
```csharp
public class Korzh.EasyQuery.WinForms.ConditionRow
    : XRow

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ConditionRow([QueryPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) aPanel, [Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) aCondition) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ConditionRow](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditionrow-class) class. | 
| ConditionRow([QueryPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) aPanel, [Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) aCondition, `bool` useCheckbox) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ConditionRow](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditionrow-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| button | `ConditionRow.ConditionButton` | Represents button element. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Condition | [Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Gets the [Korzh.EasyQuery.Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) connected with the row. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ApplyElementFormats([XElement](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element) | `void` | Applies formats for one element. | 
| CoreApplyFormats() | `void` | Applies the formats used in parent object. | 
| CoreRefreshByCondition() | `void` | This method is called when connected [Korzh.EasyQuery.Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) is changed  and we need to refresh the row accordingly. | 
| FillButtonMenu() | `void` | Fills the button menu. | 
| OnEnableChange() | `void` | Called when [Korzh.EasyQuery.Condition.IsEnabled](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) property is changed. | 
| ResumeRefresh() | `void` | Resumes the refresh suppressed by [Korzh.EasyQuery.WinForms.ConditionRow.SuppressRefresh](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditionrow-class) method. | 
| SuppressRefresh() | `void` | Suppresses the refresh. After this method call the row will not be updated on [Korzh.EasyQuery.WinForms.ConditionRow.RefreshByCondition](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditionrow-class) call.  To resume refreshing back call [Korzh.EasyQuery.WinForms.ConditionRow.ResumeRefresh](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditionrow-class) method |
