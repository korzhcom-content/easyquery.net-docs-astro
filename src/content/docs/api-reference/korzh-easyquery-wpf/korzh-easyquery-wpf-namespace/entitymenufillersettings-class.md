---
title: EntityMenuFillerSettings class
slug: >-
  api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitymenufillersettings-class
sidebar:
  order: 100
---

```csharp
public class Korzh.EasyQuery.Wpf.EntityMenuFillerSettings

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EntityMenuFillerSettings() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AttributeFilter | `Func`&lt;[EntityAttr](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class), `bool`&gt; |  | 
| EntityFilter | `Func`&lt;[Entity](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class), `bool`&gt; |  | 
| OnMenuItemClickHandler | `RoutedEventHandler` |  | 
| Sorting | [XSortOrder](///////////////easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xsortorder-enum) |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| UseMenuItemClickHandler(`RoutedEventHandler` handler) | [EntityMenuFillerSettings](///////////////easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitymenufillersettings-class) |  | 
| UseSorting([XSortOrder](///////////////easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xsortorder-enum) sorting) | [EntityMenuFillerSettings](///////////////easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitymenufillersettings-class) |  | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetConditionAttributesOnly() | [EntityMenuFillerSettings](///////////////easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitymenufillersettings-class) |  | 
| GetResultAttributesOnly() | [EntityMenuFillerSettings](///////////////easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitymenufillersettings-class) |  |
