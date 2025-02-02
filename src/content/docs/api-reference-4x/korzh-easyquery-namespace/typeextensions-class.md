---
title: TypeExtensions class
slug: api-reference-4x/korzh-easyquery-namespace/typeextensions-class
---


```csharp
public static class Korzh.EasyQuery.TypeExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `IEnumerable<PropertyInfo>` | GetMappedProperties(<span style='color: blue'>this</span> `IEnumerable<PropertyInfo>` source) | Filters the list of properties (defined by source parameter) to return only those which does not have "NotMapped" attribute. | 
| `Boolean` | IsAttributeDefined(<span style='color: blue'>this</span> `PropertyInfo` pi, `String` attrName) | Determines whether the attribute with specified name is defined for the property. | 
| `Boolean` | IsComplexType(<span style='color: blue'>this</span> `Type` typeToCheck) | Determines whether the specified type is complex type (marked by ComplexType attribute). | 
| `Boolean` | IsEnum(<span style='color: blue'>this</span> `Type` typeToCheck) | Determines whether the specified type is an enumeration. | 
| `Boolean` | IsGenericType(<span style='color: blue'>this</span> `Type` typeToCheck) | Determines whether the specified type is generic type. | 
| `Boolean` | IsInheritedFrom(<span style='color: blue'>this</span> `Type` type, `String` fullTypeName) |  | 
| `Boolean` | IsNullable(<span style='color: blue'>this</span> `Type` typeToCheck) | Determines whether the specified type is a nullable type. | 
| `Boolean` | IsPrimaryKey(<span style='color: blue'>this</span> `PropertyInfo` pi) | Determines whether specified property is a primary key. | 
| `Boolean` | IsSimpleType(<span style='color: blue'>this</span> `Type` t) | Checks if the type can be used in columns and conditions |