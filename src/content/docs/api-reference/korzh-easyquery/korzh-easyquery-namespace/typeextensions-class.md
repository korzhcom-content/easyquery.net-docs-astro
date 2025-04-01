---
title: TypeExtensions class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/typeextensions-class
sidebar:
  order: 100
---

Contains several useful extensions for reflection types and structures.
```csharp
public static class Korzh.EasyQuery.TypeExtensions

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetMappedProperties(<span style='color: blue'>this</span> `IEnumerable`&lt;`PropertyInfo`&gt; source) | `IEnumerable`&lt;`PropertyInfo`&gt; | Filters the list of properties (defined by source parameter) to return only those which does not have "NotMapped" attribute. | 
| IsAttributeDefined(<span style='color: blue'>this</span> `PropertyInfo` pi, `string` attrName) | `bool` | Determines whether the attribute with specified name is defined for the property. | 
| IsComplexType(<span style='color: blue'>this</span> `Type` typeToCheck) | `bool` | Determines whether the specified type is complex type (marked by ComplexType attribute). | 
| IsEnum(<span style='color: blue'>this</span> `Type` typeToCheck) | `bool` | Determines whether the specified type is an enumeration. | 
| IsGenericType(<span style='color: blue'>this</span> `Type` typeToCheck) | `bool` | Determines whether the specified type is generic type. | 
| IsInheritedFrom(<span style='color: blue'>this</span> `Type` type, `string` fullTypeName) | `bool` | Determines whether the type is inherited from another type specified by the specified full type name. | 
| IsInheritedFrom(<span style='color: blue'>this</span> `Type` type, `Type` baseType) | `bool` | Determines whether the type is inherited from another type specified by the specified full type name. | 
| IsInheritedFromGeneric(<span style='color: blue'>this</span> `Type` type, `Type` baseType) | `bool` | Determines whether the type is inherited from generic type. | 
| IsNullable(<span style='color: blue'>this</span> `Type` typeToCheck) | `bool` | Determines whether the specified type is a nullable type. | 
| IsPrimaryKey(<span style='color: blue'>this</span> `PropertyInfo` pi) | `bool` | Determines whether specified property is a primary key. | 
| IsSimpleType(<span style='color: blue'>this</span> `Type` t) | `bool` | Checks if the type can be used in columns and conditions |
