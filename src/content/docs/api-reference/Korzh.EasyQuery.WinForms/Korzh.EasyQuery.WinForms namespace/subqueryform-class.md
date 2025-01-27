---
title: SubQueryForm class
slug: api-reference/Korzh.EasyQuery.WinForms/Korzh.EasyQuery.WinForms namespace/subqueryform-class
---


Summary description for SubQueryForm.
```csharp
public class Korzh.EasyQuery.WinForms.SubQueryForm
    : Form

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SubQueryForm() | `void` | Represents the form which allows to modify sub-query | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| IsSQL | `bool` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Dispose(`bool` disposing) | `void` | Clean up any resources being used. | 
| Init([QueryPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) parentQueryPanel) | `void` | Initializes the form by some parent [Korzh.EasyQuery.WinForms.QueryPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) object. | 
| InitQuery([Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) parentQuery, `string` queryJson) | `void` | Initializes the [Korzh.EasyQuery.Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) object by its JSON representation. | 
| InitSQL([Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) parentQuery, [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) expr) | `void` |  |