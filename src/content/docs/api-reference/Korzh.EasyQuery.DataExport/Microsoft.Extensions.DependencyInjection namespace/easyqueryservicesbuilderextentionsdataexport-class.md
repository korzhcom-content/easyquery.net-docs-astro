---
title: EasyQueryServicesBuilderExtentionsDataExport class
slug: api-reference/Korzh.EasyQuery.DataExport/Microsoft.Extensions.DependencyInjection namespace/easyqueryservicesbuilderextentionsdataexport-class
---


Contains data export extentions for [Microsoft.Extensions.DependencyInjection.EasyQueryServicesBuilder](/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) class.
```csharp
public static class Microsoft.Extensions.DependencyInjection.EasyQueryServicesBuilderExtentionsDataExport

```
Package: `Korzh.EasyQuery.DataExport` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.DataExport.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddCsvExporter(<span style='color: blue'>this</span> [EasyQueryServicesBuilder](/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) builder) | [EasyQueryServicesBuilder](/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) | Adds [EasyData.Export.CsvDataExporter](/api-reference/easydata-exporters-default/easydata-export-namespace/csvdataexporter-class) as "csv" format. | 
| AddDataExporter(<span style='color: blue'>this</span> [EasyQueryServicesBuilder](/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) builder, `string` format) | [EasyQueryServicesBuilder](/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) |  | 
| AddDefaultExporters(<span style='color: blue'>this</span> [EasyQueryServicesBuilder](/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) builder) | [EasyQueryServicesBuilder](/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) | Adds default exporters. | 
| AddExcelHtmlExporter(<span style='color: blue'>this</span> [EasyQueryServicesBuilder](/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) builder) | [EasyQueryServicesBuilder](/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) | Adds [EasyData.Export.ExcelHtmlDataExporter](/api-reference/easydata-exporters-default/easydata-export-namespace/excelhtmldataexporter-class) as "csv" format. |