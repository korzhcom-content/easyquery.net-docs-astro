---
title: LinqTypeExtensions class
slug: api-reference-4x/korzh-easyquery-namespace/linqtypeextensions-class
sidebar:
  order: 100
---

```csharp
public static class Korzh.EasyQuery.LinqTypeExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Type` | CreateType(<span style='color: blue'>this</span> `TypeBuilder` builder) |  | 
| `ConstructorInfo` | GetConstructor(<span style='color: blue'>this</span> `Type` type, `Type[]` types) |  | 
| `String` | GetDisplayName(<span style='color: blue'>this</span> `PropertyInfo` pi) | Returns the display name of the property.  This function tries to get the name defined by Display or DisplayName attributes.  If any of these attributes is not defined - then the property name is returned. | 
| `FieldInfo[]` | GetFields(<span style='color: blue'>this</span> `Type` type) |  | 
| `Type[]` | GetGenericArguments(<span style='color: blue'>this</span> `Type` type) |  | 
| `IEnumerable<Type>` | GetInterfaces(<span style='color: blue'>this</span> `Type` type) |  | 
| `MethodInfo` | GetMethod(<span style='color: blue'>this</span> `Type` type, `String` methodName) |  | 
| `MethodInfo` | GetMethod(<span style='color: blue'>this</span> `Type` type, `String` methodName, `Type[]` types) |  | 
| `PropertyInfo[]` | GetProperties(<span style='color: blue'>this</span> `Type` type) |  | 
| `PropertyInfo[]` | GetProperties(<span style='color: blue'>this</span> `Type` type, `BindingFlags` bindingAttr) |  | 
| `PropertyInfo` | GetProperty(<span style='color: blue'>this</span> `Type` type, `String` name) |  | 
| `String` | GetTypeDisplayName(<span style='color: blue'>this</span> `Type` type) | Gets the display name of the type.  This function tries to get the name defined by Entity or EntityName attributes.  If any of these attributes is not defined - then the type name is returned. | 
| `Boolean` | IsEnumerable(<span style='color: blue'>this</span> `Type` typeToCheck) | Determines whether the specified type is enumerable (supports `System.Collections.Generic.IEnumerable` interface. | 
| `Boolean` | IsEnumerableOfSimpleType(<span style='color: blue'>this</span> `Type` typeToCheck) | Determines whether the specified type is an enumerable of some simple type . | 
| `Boolean` | IsGenericEnumerable(<span style='color: blue'>this</span> `Type` type) |  | 
| `Boolean` | IsQueryable(<span style='color: blue'>this</span> `Type` typeToCheck) | Determines whether the specified type implements `System.Linq.IQueryable` interface. |
