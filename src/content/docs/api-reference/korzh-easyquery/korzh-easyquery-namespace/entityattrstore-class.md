---
title: EntityAttrStore class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattrstore-class
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
| EntityAttrStore([Entity](api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) parentEntity) | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Item | [EntityAttr](api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Add([EntityAttr](api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) item) | `void` |  | 
| Any(`Func`&lt;[EntityAttr](api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class), `bool`&gt; predicate) | `bool` |  | 
| AsEnumerable() | `IEnumerable`&lt;[EntityAttr](api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class)&gt; |  | 
| FirstOrDefault(`Func`&lt;[EntityAttr](api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class), `bool`&gt; predicate) | [EntityAttr](api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) |  | 
| GetEnumerator() | `IEnumerator`&lt;[EntityAttr](api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class)&gt; |  | 
| InsertItem(`int` index, [MetaEntityAttr](api-reference/easydata-core/easydata-namespace/metaentityattr-class) item) | `void` |  | 
| SetItem(`int` index, [MetaEntityAttr](api-reference/easydata-core/easydata-namespace/metaentityattr-class) item) | `void` |  | 
| Where(`Func`&lt;[EntityAttr](api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class), `bool`&gt; predicate) | `IEnumerable`&lt;[EntityAttr](api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class)&gt; |  |