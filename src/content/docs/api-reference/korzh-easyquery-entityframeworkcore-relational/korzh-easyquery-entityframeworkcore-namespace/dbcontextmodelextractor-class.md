---
title: DbContextModelExtractor class
slug: >-
  api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/dbcontextmodelextractor-class
sidebar:
  order: 100
---

Represents a model loader that takes all necessary information from some DbContext object
```csharp
public class Korzh.EasyQuery.EntityFrameworkCore.DbContextModelExtractor

```
Package: `Korzh.EasyQuery.EntityFrameworkCore.Relational` (targets: `net5.0`, `netstandard2.0`, `netstandard2.1`)

Assembly: `Korzh.EasyQuery.EntityFrameworkCore.Relational.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbContextModelExtractor([DbModel](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, [DbContextModelExtractorOptions](/easyquery/docs/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/dbcontextmodelextractoroptions-class) extractorOptions) | `void` | Initializes a new instance of the [Korzh.EasyQuery.EntityFrameworkCore.DbContextModelExtractor](/easyquery/docs/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/dbcontextmodelextractor-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Extract(`DbContext` context) | `void` | Extracts model |
