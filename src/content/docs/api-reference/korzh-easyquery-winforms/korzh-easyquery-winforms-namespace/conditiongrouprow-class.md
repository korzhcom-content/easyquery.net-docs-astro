---
title: ConditionGroupRow class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditiongrouprow-class
sidebar:
  order: 100
---

The descendant of [Korzh.EasyQuery.WinForms.ConditionRow](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditionrow-class) class. Represents a [Korzh.EasyQuery.WinForms.ConditionGroupRow](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditiongrouprow-class).
```csharp
public class Korzh.EasyQuery.WinForms.ConditionGroupRow
    : ConditionRow

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ConditionGroupRow([QueryPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) qpanel, [Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) condition) | `void` | Initializes a new instance of the <see cref="!:Korzh.EasyQuery.WinForms.QueryPanel.ConditionGroupRow" /> class. | 
| ConditionGroupRow([QueryPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) qpanel, [Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) condition, `bool` useCheckBox) | `void` | Initializes a new instance of the <see cref="!:Korzh.EasyQuery.WinForms.QueryPanel.ConditionGroupRow" /> class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CoreApplyFormats() | `void` | Applies the formats used in parent object. | 
| CoreRefreshByCondition() | `void` | This method is called when connected Condition is changed  and we need to refresh the row accordingly. | 
| ElementContentChanged([XElement](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element, `bool` valueChanged, `bool` textChanged) | `void` | This method is called when the content of some element has been changed | 
| FillButtonMenu() | `void` | Fills the button menu. | 
| getRowText() | `string` | Returns text that appear in Condition row | 
| OnEnableChange() | `void` |  |
