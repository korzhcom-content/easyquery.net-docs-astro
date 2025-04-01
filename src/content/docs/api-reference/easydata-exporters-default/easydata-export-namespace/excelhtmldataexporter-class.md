---
title: ExcelHtmlDataExporter class
slug: >-
  api-reference/easydata-exporters-default/easydata-export-namespace/excelhtmldataexporter-class
sidebar:
  order: 100
---

An implementation of [EasyData.Export.IDataExporter](///////////////easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexporter-interface) interface, that performs exporting of the data stream to Excel's html format
```csharp
public class EasyData.Export.ExcelHtmlDataExporter
    : HtmlDataExporter

```
Package: `EasyData.Exporters.Default` (targets: `netstandard2.0`)

Assembly: `EasyData.Exporters.Default.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ExcelHtmlDataExporter() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultSettings | [IDataExportSettings](///////////////easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) | The default settings. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetContentType() | `string` | Gets the MIME content type of the exporting format. | 
| GetDefaultSettings(`CultureInfo` culture = <span style='color: blue'>null</span>) | [IDataExportSettings](///////////////easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) | Gets default settings |
