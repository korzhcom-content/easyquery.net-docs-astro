---
title: PdfDataExporter class
slug: api-reference/easydata-exporters-pdfsharp/easydata-export-namespace/pdfdataexporter-class
---
An implementation of [EasyData.Export.IDataExporter](/api-reference/easydata-core/easydata-export-namespace/idataexporter-interface) interface, that performs exporting of the data stream to PDF format
```csharp
public class EasyData.Export.PdfDataExporter
    : IDataExporter

```
Package: `EasyData.Exporters.PdfSharp` (targets: `netstandard2.0`)

Assembly: `EasyData.Exporters.PdfSharp.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| PdfDataExporter() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultSettings | [IDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) | The default settings. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ApplyStyles(`Document` document, [PdfDataExportSettings](/api-reference/easydata-exporters-pdfsharp/easydata-export-namespace/pdfdataexportsettings-class) settings) | `void` | Apply styles for pdf document | 
| Export([IEasyDataResultSet](/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream) | `void` | Exports the specified data to the stream. | 
| Export([IEasyDataResultSet](/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream, [IDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) settings) | `void` | Exports the specified data to the stream. | 
| ExportAsync([IEasyDataResultSet](/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream) | `Task` | Asynchronical version of [EasyData.Export.PdfDataExporter.Export(EasyData.IEasyDataResultSet,System.IO.Stream)](/api-reference/easydata-exporters-pdfsharp/easydata-export-namespace/pdfdataexporter-class) method. | 
| ExportAsync([IEasyDataResultSet](/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream, [IDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) settings) | `Task` | Asynchronical version of [EasyData.Export.PdfDataExporter.Export(EasyData.IEasyDataResultSet,System.IO.Stream)](/api-reference/easydata-exporters-pdfsharp/easydata-export-namespace/pdfdataexporter-class) method. | 
| GetContentType() | `string` | Gets the MIME content type of the exporting format. | 
| GetDefaultSettings(`CultureInfo` culture = <span style='color: blue'>null</span>) | [IDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) | Gets default settings |