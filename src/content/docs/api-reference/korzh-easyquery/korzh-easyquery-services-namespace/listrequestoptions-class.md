---
title: ListRequestOptions class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listrequestoptions-class
sidebar:
  order: 100
---

Represents different options specified in GetList AJAX request
```csharp
public class Korzh.EasyQuery.Services.ListRequestOptions

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ListRequestOptions([EasyQueryManager](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) manager, `string` editorId) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.ListRequestOptions](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listrequestoptions-class) class. | 
| ListRequestOptions([EasyQueryManager](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) manager, `string` editorId, `IDictionary`&lt;`string`, `string`&gt; extraParams) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.ListRequestOptions](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listrequestoptions-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| ExtraParams | `IDictionary`&lt;`string`, `string`&gt; | The query (specified in the url) | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Editor | [ListValueEditor](/easyquery/docs/api-reference/easydata-core/easydata-namespace/listvalueeditor-class) | The editor. | 
| EditorId | `string` | Gets or sets editor's ID inside specified model | 
| ListName | `string` | Gets or sets the name of the list. | 
| Manager | [EasyQueryManager](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) | Gets the EasyQueryManager | 
| Sql | `string` | Gets or sets the SQL statement (for SQLLIST value editors). |
