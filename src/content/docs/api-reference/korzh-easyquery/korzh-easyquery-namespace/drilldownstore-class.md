---
title: DrillDownStore class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/drilldownstore-class
sidebar:
  order: 100
---

```csharp
public class Korzh.EasyQuery.DrillDownStore
    : Collection<Query>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DrillDownStore([Query](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Add([Query](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query) | `void` |  | 
| LoadFromXmlReader(`XmlReader` reader, [BitOptions](/easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` |  | 
| ReadFromJsonAsync(`JsonReader` reader, [BitOptions](/easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` |  | 
| SaveToXmlWriter(`XmlWriter` writer, [BitOptions](/easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` |  | 
| WriteToJsonAsync(`JsonWriter` writer, [BitOptions](/easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` |  |
