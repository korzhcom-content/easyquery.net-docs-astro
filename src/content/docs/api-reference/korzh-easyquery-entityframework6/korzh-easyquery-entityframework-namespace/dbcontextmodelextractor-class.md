---
title: DbContextModelExtractor class
slug: >-
  api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/dbcontextmodelextractor-class
sidebar:
  order: 100
---

Represents a model loader that takes all necessary information from some DbContext object
```csharp
public class Korzh.EasyQuery.EntityFramework.DbContextModelExtractor

```
Package: `Korzh.EasyQuery.EntityFramework6` (targets: `net461`)

Assembly: `Korzh.EasyQuery.EntityFramework6.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbContextModelExtractor([DbModel](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, [DbContextModelExtractorOptions](///////////////easyquery/docs/api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/dbcontextmodelextractoroptions-class) options = <span style='color: blue'>null</span>) | `void` | Initializes a new instance of the [Korzh.EasyQuery.EntityFramework.DbContextModelExtractor](///////////////easyquery/docs/api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/dbcontextmodelextractor-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Extract(`DbContext` context) | `void` | Loads model |
