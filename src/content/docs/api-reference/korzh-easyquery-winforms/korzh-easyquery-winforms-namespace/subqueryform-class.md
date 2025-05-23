---
title: SubQueryForm class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/subqueryform-class
sidebar:
  order: 100
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
| Init([QueryPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) parentQueryPanel) | `void` | Initializes the form by some parent [Korzh.EasyQuery.WinForms.QueryPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) object. | 
| InitQuery([Query](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) parentQuery, `string` queryJson) | `void` | Initializes the [Korzh.EasyQuery.Query](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) object by its JSON representation. | 
| InitSQL([Query](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) parentQuery, [EqExpression](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) expr) | `void` |  |
