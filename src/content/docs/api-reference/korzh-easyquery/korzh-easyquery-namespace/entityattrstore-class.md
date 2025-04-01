---
title: EntityAttrStore class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattrstore-class
sidebar:
  order: 100
---

```csharp
public class Korzh.EasyQuery.EntityAttrStore
    : MetaEntityAttrStore, IEnumerable<EntityAttr>, IEnumerable

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EntityAttrStore([Entity](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) parentEntity) | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Item | [EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Add([EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) item) | `void` |  | 
| Any(`Func`&lt;[EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class), `bool`&gt; predicate) | `bool` |  | 
| AsEnumerable() | `IEnumerable`&lt;[EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class)&gt; |  | 
| FirstOrDefault(`Func`&lt;[EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class), `bool`&gt; predicate) | [EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) |  | 
| GetEnumerator() | `IEnumerator`&lt;[EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class)&gt; |  | 
| InsertItem(`int` index, [MetaEntityAttr](///easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentityattr-class) item) | `void` |  | 
| SetItem(`int` index, [MetaEntityAttr](///easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentityattr-class) item) | `void` |  | 
| Where(`Func`&lt;[EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class), `bool`&gt; predicate) | `IEnumerable`&lt;[EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class)&gt; |  |
