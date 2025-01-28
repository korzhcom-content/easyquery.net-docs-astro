---
title: Localization of query builder's UI
slug: tutorials/query-builder-ui-localization
---


It is quite easy to translate the user interface of EasyQuery components into another language. There two possible methods of localization:

## 1. Satellite assemblies

First of all, you can do it using satellite assemblies which are the standard way of localization for .NET components.

After installation you can find EasyQuery [satellite assemblies](https://blogs.msdn.microsoft.com/global_developer/2011/07/22/introduction-to-satellite-assemblies/) in the the following folder: {install dir}\assemblies\NET##\XX Here * {install dir} - is the folder where you have installed EasyQuery (C:\Program Files\Korzh.NET by default) * ## - indicates to the number of .NET version you need (e.g. 40 or 35) * XX - is the language code (e.g. \fr - for French or \de - for German)

## 2. "On-the-fly localization through .properties files

However, there is another way: more easy and faster one. All EasyQuery namespaces contain a unique static TextResources class which you can use to change the texts employed in EasyQuery controls. You can change each string separately through `Put()` static method or directly load a `.properties` which contains all translations for current namespace.

Here are more detailed instructions:

1) Find all `.properties` files in the \res\EasyQuery\ subfolder of the EasyQuery.NET installation folder.

2) Make a copy of each such file with some language code suffix. For example `EQCoreMessages.properties` will become `EQCoreMessages_PT.properties` for the Portuguese language. After that just translate all text messages at the right part (after '=' symbol) in each row of all new `.properties` files.

3) Finally, just load those files somewhere at the beginning of your application e.g. in a constructor or during form loading.

Example: 

```
Korzh.EasyQuery.TextResources.LoadFromFile("EQCoreMessages_PT.properties");
Korzh.EasyQuery.WebControls.TextResources.LoadFromFile("EQWebMessages_PT.properties");
```

In the example above we have loaded the resources for core Korzh.EasyQuery and for WebControls assemblies. For other editions, you will need to change the second line of code correspondingly.

Here is how it will look for WPF edition: 

```
Korzh.EasyQuery.TextResources.LoadFromFile("EQCoreMessages_PT.properties");
Korzh.EasyQuery.WpfControls.TextResources.LoadFromFile("EQWpfMessages_PT.properties");
```

or for WinForms: 

```
Korzh.EasyQuery.TextResources.LoadFromFile("EQCoreMessages_PT.properties");
Korzh.EasyQuery.WinControls.TextResources.LoadFromFile("EQWinMessages_PT.properties");
```