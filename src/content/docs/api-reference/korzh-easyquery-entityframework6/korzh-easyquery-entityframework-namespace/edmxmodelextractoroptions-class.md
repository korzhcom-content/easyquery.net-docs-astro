---
title: EdmxModelExtractorOptions class
slug: api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/edmxmodelextractoroptions-class
---
Contains different options
```csharp
public class Korzh.EasyQuery.EntityFramework.EdmxModelExtractorOptions

```
Package: `Korzh.EasyQuery.EntityFramework6` (targets: `net461`)

Assembly: `Korzh.EasyQuery.EntityFramework6.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EdmxModelExtractorOptions() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| EntityFilters | `IReadOnlyList`&lt;`Func`&lt;`string`, `bool`&gt;&gt; | Gets the entity filters. | 
| HidePrimaryKeys | `bool` | Gets or sets a value indicating whether we need to hide primary key fields in the data model. | 
| SplitTablesOnMultiReference | `bool` | Split one table on two (or more) if there are multi-references between two tables | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddEntityFilter(`Func`&lt;`string`, `bool`&gt; filter) | `void` | Adds an edntity filter, which will be used on EDMX loading.  Each filter is a function that takes an entity name  and returns <c>true</c> if this entity should be processed and <c>false</c> - otherwise |