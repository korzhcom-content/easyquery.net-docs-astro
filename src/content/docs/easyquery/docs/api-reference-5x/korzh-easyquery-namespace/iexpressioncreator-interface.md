---
title: IExpressionCreator interface
slug: easyquery/docs/api-reference-5x/korzh-easyquery-namespace/iexpressioncreator-interface
---


Represents special interface used for definition new (custom) types of expression
```csharp
public interface Korzh.EasyQuery.IExpressionCreator

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `EqExpression` | Create(`DataModel` model, `Int32` tag) | Creates an instance of Expression. | 
| `EqExpression` | CreateByClassName(`DataModel` model, `String` className) | Creates an instance of Expression by its old class name |