---
title: IExpressionCreator interface
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/iexpressioncreator-interface
sidebar:
  order: 100
---

Represents special interface used for definition new (custom) types of expression
```csharp
public interface Korzh.EasyQuery.IExpressionCreator

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Create([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `int` tag) | [EqExpression](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | Creates an instance of Expression. | 
| CreateByClassName([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` className) | [EqExpression](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | Creates an instance of Expression by its old class name |
