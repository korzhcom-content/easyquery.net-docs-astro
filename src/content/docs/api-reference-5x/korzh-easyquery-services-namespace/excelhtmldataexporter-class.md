---
title: ExcelHtmlDataExporter class
slug: api-reference-5x/korzh-easyquery-services-namespace/excelhtmldataexporter-class
---


An implementation of [Korzh.EasyQuery.Services.IDataExporter](/api-reference-5x/korzh-easyquery-services-namespace/idataexporter-interface) interface, that performs exporting of the data stream to Excel's html format
```csharp
public class Korzh.EasyQuery.Services.ExcelHtmlDataExporter
    : IDataExporter

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | Export(`IDataReader` dataReader, `Stream` stream) | Exports the specified data to the stream. | 
| `void` | Export(`IDataReader` dataReader, `Stream` stream, `IDataExportSettings` settings) | Exports the specified data to the stream. | 
| `Task` | ExportAsync(`IDataReader` dataReader, `Stream` stream) | Asynchronical version of [Korzh.EasyQuery.Services.ExcelHtmlDataExporter.Export(System.Data.IDataReader,System.IO.Stream)](/api-reference-5x/korzh-easyquery-services-namespace/excelhtmldataexporter-class) method. | 
| `Task` | ExportAsync(`IDataReader` dataReader, `Stream` stream, `IDataExportSettings` formats) | Asynchronical version of [Korzh.EasyQuery.Services.ExcelHtmlDataExporter.Export(System.Data.IDataReader,System.IO.Stream)](/api-reference-5x/korzh-easyquery-services-namespace/excelhtmldataexporter-class) method. | 
| `Task` | ExportAsync(`IDataReader` dataReader, `TextWriter` writer) | Asynchronical version of [Korzh.EasyQuery.Services.ExcelHtmlDataExporter.Export(System.Data.IDataReader,System.IO.Stream)](/api-reference-5x/korzh-easyquery-services-namespace/excelhtmldataexporter-class) method. | 
| `Task` | ExportAsync(`IDataReader` dataReader, `TextWriter` writer, `IDataExportSettings` formats) | Asynchronical version of [Korzh.EasyQuery.Services.ExcelHtmlDataExporter.Export(System.Data.IDataReader,System.IO.Stream)](/api-reference-5x/korzh-easyquery-services-namespace/excelhtmldataexporter-class) method. | 
| `String` | GetContentType() | Gets the MIME content type of the exporting format. |