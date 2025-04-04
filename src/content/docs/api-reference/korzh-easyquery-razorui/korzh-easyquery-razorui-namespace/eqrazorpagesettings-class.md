---
title: EqRazorPageSettings class
slug: >-
  api-reference/korzh-easyquery-razorui/korzh-easyquery-razorui-namespace/eqrazorpagesettings-class
sidebar:
  order: 100
---

Contains the settings for one EasyQuery's default Razor page
```csharp
public class Korzh.EasyQuery.RazorUI.EqRazorPageSettings

```
Package: `Korzh.EasyQuery.RazorUI` (targets: `net5.0`, `netcoreapp3.1`, `netstandard2.0`)

Assembly: `Korzh.EasyQuery.RazorUi.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EqRazorPageSettings() | `void` |  | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| EnableExport | `bool` | Indicates whether the page should include result exporting functionality (if available). | 
| EnableSaveAndLoadQueriesFromFiles | `bool` | Indicates whether the page should include save and load from file functionality. | 
| EqScriptsVersion | `string` | The version of EasyQuery scripts used in library's Razor views | 
| EqStylesVersion | `string` | The version of EasyQuery CSS files used in library's Razor views | 
| ExportFormats | `string` | Export formats as comma-separated list to be showed (if available). | 
| ShowSqlPanel | `bool` | Indicates whether the page should include "SQL" panel (if available). | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Chart | [ChartLibrary](/easyquery/docs/api-reference/korzh-easyquery-razorui/korzh-easyquery-razorui-namespace/chartlibrary-enum) | The chart library to be used (if available). | 
| EqEndpoint | `string` | The EasyQuery API endpoint |
