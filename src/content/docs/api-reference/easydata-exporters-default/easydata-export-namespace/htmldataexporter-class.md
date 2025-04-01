---
title: HtmlDataExporter class
slug: >-
  api-reference/easydata-exporters-default/easydata-export-namespace/htmldataexporter-class
sidebar:
  order: 100
---

An implementation of [EasyData.Export.IDataExporter](///easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexporter-interface) interface, that performs exporting of the data stream to HTML format
```csharp
public class EasyData.Export.HtmlDataExporter
    : IDataExporter

```
Package: `EasyData.Exporters.Default` (targets: `netstandard2.0`)

Assembly: `EasyData.Exporters.Default.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| HtmlDataExporter() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultSettings | [IDataExportSettings](///easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) | The default settings. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Export([IEasyDataResultSet](///easyquery/docs/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream) | `void` | Exports the specified data to the stream. | 
| Export([IEasyDataResultSet](///easyquery/docs/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream, [IDataExportSettings](///easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) settings) | `void` | Exports the specified data to the stream. | 
| ExportAsync([IEasyDataResultSet](///easyquery/docs/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream) | `Task` | Asynchronical version of [EasyData.Export.HtmlDataExporter.Export(EasyData.IEasyDataResultSet,System.IO.Stream)](///easyquery/docs/api-reference/easydata-exporters-default/easydata-export-namespace/htmldataexporter-class) method. | 
| ExportAsync([IEasyDataResultSet](///easyquery/docs/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream, [IDataExportSettings](///easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) settings) | `Task` | Asynchronical version of [EasyData.Export.HtmlDataExporter.Export(EasyData.IEasyDataResultSet,System.IO.Stream)](///easyquery/docs/api-reference/easydata-exporters-default/easydata-export-namespace/htmldataexporter-class) method. | 
| GetContentType() | `string` | Gets the MIME content type of the exporting format. | 
| GetDefaultSettings(`CultureInfo` culture = <span style='color: blue'>null</span>) | [IDataExportSettings](///easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) | Gets default settings | 
| GetFormattedValue(`object` val, [DataType](///easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType, [HtmlDataExportSettings](///easyquery/docs/api-reference/easydata-exporters-default/easydata-export-namespace/htmldataexportsettings-class) settings, `string` displayFormat) | `string` | Converts string into HTML format. |
