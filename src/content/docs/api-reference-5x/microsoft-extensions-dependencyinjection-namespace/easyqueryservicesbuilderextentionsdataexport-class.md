---
title: EasyQueryServicesBuilderExtentionsDataExport class
slug: >-
  api-reference-5x/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilderextentionsdataexport-class
sidebar:
  order: 100
---

Contains data export extentions for [Microsoft.Extensions.DependencyInjection.EasyQueryServicesBuilder](/easyquery/docs/api-reference-5x/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) class.
```csharp
public static class Microsoft.Extensions.DependencyInjection.EasyQueryServicesBuilderExtentionsDataExport

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `EasyQueryServicesBuilder` | AddDataExporter(<span style='color: blue'>this</span> `EasyQueryServicesBuilder` builder, `String` format) |  | 
| `EasyQueryServicesBuilder` | AddDefaultExporters(<span style='color: blue'>this</span> `EasyQueryServicesBuilder` builder) | Adds default exporters: [Korzh.EasyQuery.Services.CsvDataExporter](/easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/csvdataexporter-class) as "csv" format and [Korzh.EasyQuery.Services.ExcelHtmlDataExporter](/easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/excelhtmldataexporter-class) as "excel-html" format. |
