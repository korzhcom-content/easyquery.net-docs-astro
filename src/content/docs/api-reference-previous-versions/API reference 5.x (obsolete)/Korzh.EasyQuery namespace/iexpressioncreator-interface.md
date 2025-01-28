---
title: IExpressionCreator interface
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery namespace/iexpressioncreator-interface
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