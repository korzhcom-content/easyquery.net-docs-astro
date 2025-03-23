---
title: LinqTypeExtensions class
slug: api-reference-5x/korzh-easyquery-namespace/linqtypeextensions-class
---


Contains different extension functions for working with refrection and types
```csharp
public static class Korzh.EasyQuery.LinqTypeExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Type` | CreateType(<span style='color: blue'>this</span> `TypeBuilder` builder) | Creates the type. | 
| `ConstructorInfo` | GetConstructor(<span style='color: blue'>this</span> `Type` type, `Type[]` types) | Searches for a public instance constructor whose parameters match the types in  the specified array. | 
| `String` | GetDisplayName(<span style='color: blue'>this</span> `PropertyInfo` pi) | Returns the display name of the property.  This function tries to get the name defined by Display or DisplayName attributes.  If any of these attributes is not defined - then the property name is returned. | 
| `FieldInfo[]` | GetFields(<span style='color: blue'>this</span> `Type` type) | Gets the list of fields for the specified type. | 
| `Type[]` | GetGenericArguments(<span style='color: blue'>this</span> `Type` type) | Gets the generic arguments (the list of types) for the specified type. | 
| `IEnumerable<Type>` | GetInterfaces(<span style='color: blue'>this</span> `Type` type) | Gets the list of interfaces for the specified type. | 
| `MethodInfo` | GetMethod(<span style='color: blue'>this</span> `Type` type, `String` methodName) | Searches for the public method with the specified name. | 
| `MethodInfo` | GetMethod(<span style='color: blue'>this</span> `Type` type, `String` methodName, `Type[]` types) | Searches for the public method with the specified name. | 
| `PropertyInfo[]` | GetProperties(<span style='color: blue'>this</span> `Type` type) | Gets the list of properties for the specified type. | 
| `PropertyInfo[]` | GetProperties(<span style='color: blue'>this</span> `Type` type, `BindingFlags` bindingFlags) | Gets the list of properties for the specified type. | 
| `PropertyInfo` | GetProperty(<span style='color: blue'>this</span> `Type` type, `String` name) | Gets the property info for the specified type and property name. | 
| `String` | GetTypeDisplayName(<span style='color: blue'>this</span> `Type` type) | Gets the display name of the type.  This function tries to get the name defined by Entity or EntityName attributes.  If any of these attributes is not defined - then the type name is returned. | 
| `Boolean` | IsEnumerable(<span style='color: blue'>this</span> `Type` typeToCheck) | Determines whether the specified type is enumerable (supports `System.Collections.Generic.IEnumerable` interface. | 
| `Boolean` | IsEnumerableOfSimpleType(<span style='color: blue'>this</span> `Type` typeToCheck) | Determines whether the specified type is an enumerable of some simple type . | 
| `Boolean` | IsGenericEnumerable(<span style='color: blue'>this</span> `Type` type) | Determines whether the specified type is a generic enumerable. | 
| `Boolean` | IsQueryable(<span style='color: blue'>this</span> `Type` typeToCheck) | Determines whether the specified type implements `System.Linq.IQueryable` interface. |