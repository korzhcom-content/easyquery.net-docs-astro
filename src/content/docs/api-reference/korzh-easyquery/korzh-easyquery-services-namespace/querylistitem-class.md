---
title: QueryListItem class
slug: api-reference/korzh-easyquery/korzh-easyquery-services-namespace/querylistitem-class
---
Represents one item in the list of queries (usually returned for GetQueries request)
```csharp
public class Korzh.EasyQuery.Services.QueryListItem

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryListItem(`string` id, `string` name, `string` desc) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.QueryListItem](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/querylistitem-class) class. | 
| QueryListItem(`string` id, `string` name) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.QueryListItem](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/querylistitem-class) class. | 
| QueryListItem() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.QueryListItem](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/querylistitem-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| description | `string` | Gets or sets the query description. | 
| id | `string` | Gets or sets the query ID. | 
| name | `string` | Gets or sets the query name. | 
| text | `string` | Gets the query name. |