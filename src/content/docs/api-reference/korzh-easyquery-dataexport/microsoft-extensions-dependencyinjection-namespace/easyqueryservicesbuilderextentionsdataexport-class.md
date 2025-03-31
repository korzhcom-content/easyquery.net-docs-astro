---
title: EasyQueryServicesBuilderExtentionsDataExport class
slug: api-reference/korzh-easyquery-dataexport/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilderextentionsdataexport-class
---

Contains data export extentions for [Microsoft.Extensions.DependencyInjection.EasyQueryServicesBuilder](//easyquery/docs/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) class.
```csharp
public static class Microsoft.Extensions.DependencyInjection.EasyQueryServicesBuilderExtentionsDataExport

```
Package: `Korzh.EasyQuery.DataExport` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.DataExport.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddCsvExporter(<span style='color: blue'>this</span> [EasyQueryServicesBuilder](//easyquery/docs/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) builder) | [EasyQueryServicesBuilder](//easyquery/docs/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) | Adds [EasyData.Export.CsvDataExporter](//easyquery/docs/api-reference/easydata-exporters-default/easydata-export-namespace/csvdataexporter-class) as "csv" format. | 
| AddDataExporter(<span style='color: blue'>this</span> [EasyQueryServicesBuilder](//easyquery/docs/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) builder, `string` format) | [EasyQueryServicesBuilder](//easyquery/docs/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) |  | 
| AddDefaultExporters(<span style='color: blue'>this</span> [EasyQueryServicesBuilder](//easyquery/docs/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) builder) | [EasyQueryServicesBuilder](//easyquery/docs/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) | Adds default exporters. | 
| AddExcelHtmlExporter(<span style='color: blue'>this</span> [EasyQueryServicesBuilder](//easyquery/docs/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) builder) | [EasyQueryServicesBuilder](//easyquery/docs/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) | Adds [EasyData.Export.ExcelHtmlDataExporter](//easyquery/docs/api-reference/easydata-exporters-default/easydata-export-namespace/excelhtmldataexporter-class) as "csv" format. |