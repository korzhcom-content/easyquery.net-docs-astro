---
title: IDataExporter interface
slug: api-reference-5x/korzh-easyquery-services-namespace/idataexporter-interface
sidebar:
  order: 100
---

Represents a type used to perform exporting of the data stream to some format (like CSV or PDF)
```csharp
public interface Korzh.EasyQuery.Services.IDataExporter

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | Export(`IDataReader` dataRead, `Stream` stream) | Exports the specified data to the stream. | 
| `void` | Export(`IDataReader` dataReader, `Stream` stream, `IDataExportSettings` settings) | Exports the specified data to the stream. | 
| `Task` | ExportAsync(`IDataReader` dataReader, `Stream` stream) | Asynchronical version of [Korzh.EasyQuery.Services.IDataExporter.Export(System.Data.IDataReader,System.IO.Stream)](/easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/idataexporter-interface) method. | 
| `Task` | ExportAsync(`IDataReader` dataReader, `Stream` stream, `IDataExportSettings` settings) | Asynchronical version of [Korzh.EasyQuery.Services.IDataExporter.Export(System.Data.IDataReader,System.IO.Stream)](/easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/idataexporter-interface) method. | 
| `Task` | ExportAsync(`IDataReader` dataReader, `TextWriter` writer, `IDataExportSettings` settings) | Asynchronical version of [Korzh.EasyQuery.Services.IDataExporter.Export(System.Data.IDataReader,System.IO.Stream)](/easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/idataexporter-interface) method. | 
| `Task` | ExportAsync(`IDataReader` dataReader, `TextWriter` writer) | Asynchronical version of [Korzh.EasyQuery.Services.IDataExporter.Export(System.Data.IDataReader,System.IO.Stream)](/easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/idataexporter-interface) method. | 
| `String` | GetContentType() | Gets the MIME content type of the exporting format. |
