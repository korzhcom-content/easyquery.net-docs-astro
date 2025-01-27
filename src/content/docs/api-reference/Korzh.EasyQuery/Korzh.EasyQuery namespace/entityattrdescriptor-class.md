---
title: EntityAttrDescriptor class
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery namespace/entityattrdescriptor-class
---


```csharp
public class Korzh.EasyQuery.EntityAttrDescriptor
    : MetaEntityAttrDescriptor

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EntityAttrDescriptor([Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) parent) | `void` |  | 
| EntityAttrDescriptor([Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) parent, `string` expr) | `void` |  | 
| EntityAttrDescriptor([Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) parent, [EntityAttrKind](/api-reference/easydata-core/easydata-namespace/entityattrkind-enum) kind, `string` expr = ) | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| UseInConditions | `bool` |  | 
| UseInResult | `bool` |  | 
| UseInSorting | `bool` |  |