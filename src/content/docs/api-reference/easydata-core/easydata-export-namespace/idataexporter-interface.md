---
title: IDataExporter interface
slug: api-reference/easydata-core/easydata-export-namespace/idataexporter-interface
sidebar:
  order: 100
---

Represents a type used to perform exporting of the data stream to some format (like CSV or PDF)
```csharp
public interface EasyData.Export.IDataExporter

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Export([IEasyDataResultSet](/easyquery/docs/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream) | `void` | Exports the specified data to the stream. | 
| Export([IEasyDataResultSet](/easyquery/docs/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream, [IDataExportSettings](/easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) settings) | `void` | Exports the specified data to the stream. | 
| ExportAsync([IEasyDataResultSet](/easyquery/docs/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream) | `Task` | Asynchronical version of [EasyData.Export.IDataExporter.Export(EasyData.IEasyDataResultSet,System.IO.Stream)](/easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexporter-interface) method. | 
| ExportAsync([IEasyDataResultSet](/easyquery/docs/api-reference/easydata-core/easydata-namespace/ieasydataresultset-interface) data, `Stream` stream, [IDataExportSettings](/easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) settings) | `Task` | Asynchronical version of [EasyData.Export.IDataExporter.Export(EasyData.IEasyDataResultSet,System.IO.Stream)](/easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexporter-interface) method. | 
| GetContentType() | `string` | Gets the MIME content type of the exporting format. | 
| GetDefaultSettings(`CultureInfo` culture = <span style='color: blue'>null</span>) | [IDataExportSettings](/easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) | Default settings of the exporter. |
