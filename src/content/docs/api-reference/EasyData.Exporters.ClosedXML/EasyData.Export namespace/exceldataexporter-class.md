---
title: ExcelDataExporter class
slug: api-reference/EasyData.Exporters.ClosedXML/EasyData.Export namespace/exceldataexporter-class
---


An implementation of [EasyData.Export.IDataExporter](/api-reference/easydata-core/easydata-export-namespace/idataexporter-interface) interface, that performs exporting of the data stream to PDF format
```csharp
public class EasyData.Export.ExcelDataExporter
    : IDataExporter

```
Package: `EasyData.Exporters.ClosedXML` (targets: `netstandard2.0`)

Assembly: `EasyData.Exporters.ClosedXML.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ExcelDataExporter() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultSettings | [IDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) | The default settings. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Export([IEasyDataResultSet](/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream) | `void` | Exports the specified data to the stream. | 
| Export([IEasyDataResultSet](/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream, [IDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) settings) | `void` | Exports the specified data to the stream. | 
| ExportAsync([IEasyDataResultSet](/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream) | `Task` | Asynchronical version of [EasyData.Export.ExcelDataExporter.Export(EasyData.IEasyDataResultSet,System.IO.Stream)](/api-reference/easydata-exporters-closedxml/easydata-export-namespace/exceldataexporter-class) method. | 
| ExportAsync([IEasyDataResultSet](/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream, [IDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) settings) | `Task` | Asynchronical version of [EasyData.Export.ExcelDataExporter.Export(EasyData.IEasyDataResultSet,System.IO.Stream)](/api-reference/easydata-exporters-closedxml/easydata-export-namespace/exceldataexporter-class) method. | 
| GetContentType() | `string` | Gets the MIME content type of the exporting format. | 
| GetDefaultSettings(`CultureInfo` culture = <span style='color: blue'>null</span>) | [IDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) | Gets default settings |