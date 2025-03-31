---
title: EntityStore class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/entitystore-class
---

```csharp
public class Korzh.EasyQuery.EntityStore
    : MetaEntityStore, IEnumerable<Entity>, IEnumerable

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EntityStore([Entity](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) parentEntity) | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Item | [Entity](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Add([Entity](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) item) | `void` |  | 
| AsEnumerable() | `IEnumerable`&lt;[Entity](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class)&gt; |  | 
| FirstOrDefault(`Func`&lt;[Entity](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class), `bool`&gt; predicate) | [Entity](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) |  | 
| GetEnumerator() | `IEnumerator`&lt;[Entity](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class)&gt; |  | 
| InsertItem(`int` index, [MetaEntity](//easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentity-class) item) | `void` |  | 
| SetItem(`int` index, [MetaEntity](//easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentity-class) item) | `void` |  | 
| Where(`Func`&lt;[Entity](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class), `bool`&gt; predicate) | `IEnumerable`&lt;[Entity](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class)&gt; |  |