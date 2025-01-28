---
title: EqServiceProviderLinq class
slug: api-reference-previous-versions/API reference 4.x (obsolete)/Korzh.EasyQuery.Services namespace/eqserviceproviderlinq-class
---


Class EqServiceProviderDb.  Provides basic functionality for building EasyQuery service to process AJAX requests from EasyQuery JavaScript widgets.  Can be used to create MVC controller, WebService class or WebAPI controller
```csharp
public class Korzh.EasyQuery.Services.EqServiceProviderLinq
    : EqServiceProvider

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Func<Object>` | ContextGetter |  | 
| `Type` | ContextType |  | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | DefaultModelLoader(`DataModel` model, `String` modelName) | Default implementation of the model loader <see cref="!:ModelLoader" />. | 
| `IEqResultSet` | ExecuteQueryCore(`Query` query, `JsonDict` optionsDict = <span style='color: blue'>null</span>) |  | 
| `IEnumerable<ListItem>` | GetListCore(`ListRequestOptions` options) | Returns custom list of values by its name. This method is usually called by GetList action of EasyQueryController. | 
| `IEqResultSet` | GetResultSetByQuery(`Query` query, `Object` context, `Type` resultType = <span style='color: blue'>null</span>, `JsonDict` optionsDict = <span style='color: blue'>null</span>) | Gets the result set by the query and some context (e.g. DbContext) object.  This method generates LINQ query, executes it over specified context and returns the result as DataSet. | 
| `IEqResultSet` | GetResultSetByQueryDict(`JsonDict` queryDict, `Object` context) | Gets the result set by the query (represented by some IDictionary object) and some context (e.g. DbContext) object.  This method generates LINQ query, executes it over specified context and returns the result as DataSet. |