---
title: CsvDataExporter class
slug: api-reference/easydata-exporters-default/easydata-export-namespace/csvdataexporter-class
---
An implementation of [EasyData.Export.IDataExporter](/api-reference/easydata-core/easydata-export-namespace/idataexporter-interface) interface, that performs exporting of the data stream to CSV format
```csharp
public class EasyData.Export.CsvDataExporter
    : IDataExporter

```
Package: `EasyData.Exporters.Default` (targets: `netstandard2.0`)

Assembly: `EasyData.Exporters.Default.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| CsvDataExporter() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Export([IEasyDataResultSet](/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream) | `void` | Exports the specified data to the stream. | 
| Export([IEasyDataResultSet](/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream, [IDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) settings) | `void` | Exports the specified data to the stream. | 
| ExportAsync([IEasyDataResultSet](/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream) | `Task` | Asynchronical version of [EasyData.Export.CsvDataExporter.Export(EasyData.IEasyDataResultSet,System.IO.Stream)](/api-reference/easydata-exporters-default/easydata-export-namespace/csvdataexporter-class) method. | 
| ExportAsync([IEasyDataResultSet](/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream, [IDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) settings) | `Task` | Asynchronical version of [EasyData.Export.CsvDataExporter.Export(EasyData.IEasyDataResultSet,System.IO.Stream)](/api-reference/easydata-exporters-default/easydata-export-namespace/csvdataexporter-class) method. | 
| GetContentType() | `string` | Gets the MIME content type of the exporting format. | 
| GetDefaultSettings(`CultureInfo` culture = <span style='color: blue'>null</span>) | [IDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) | Gets default settings | 
| GetFormattedValue(`object` val, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType, [CsvDataExportSettings](/api-reference/easydata-exporters-default/easydata-export-namespace/csvdataexportsettings-class) settings, `string` displayFormat) | `string` | Converts string into CVS format. |