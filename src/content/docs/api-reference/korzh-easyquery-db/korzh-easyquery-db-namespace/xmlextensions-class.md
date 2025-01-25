---
title: XmlExtensions class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/xmlextensions-class
---
Different extension methods used in other EasyQuery classes.
```csharp
public static class Korzh.EasyQuery.Db.XmlExtensions

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ElementLocal(<span style='color: blue'>this</span> `XElement` element, `string` name) | `XElement` | Returns one (the first) local element (an XElement object) for specified XElement by its name. | 
| ElementsLocal(<span style='color: blue'>this</span> `XElement` element, `string` name) | `IEnumerable`&lt;`XElement`&gt; | Returns all local elements for specified XElement by their name. |