---
title: How to remove "Powered by..." link (full version only)
slug: how-to/mvc-remove-powered-by
---

After purchasing a full version of EasyQuery library you may want to remove “Powered by EasyQuery” link that appears in the bottom-right corner of QueryPanel.

Here are the instructions.

## 0) Setup full version of EasyQuery

Obvious step but we should mention it. First of all, you need to uninstall the trial version of EasyQuery and install its full version (eqn_asp_full_setup_##_##_##.exe file) that you can download from [Client Area](//account) of Korzh.com web-site.

## 1) Replace EasyQuery assemblies

Replace all EasyQuery assemblies used in your project by their full versions from. You can find those assemblies in `{install dir}\Korzh.NET\Assemblies` folder (in its sub-folders to be precise). By default, it's `C:\Program Files\Korzh.NET\Assemblies`

## 2) Replace JavaScript files

The same with JavaScript files `eq.all.min.js` and `eq.view.basic.js` (or any other `eq.view.something.js` file) - use the ones from full version. You will find them in `{install dir}\Korzh.NET\JS` folder

## 3) Turn off showPoweredBy option

Finally, you need to turn off (set to 'false') `showPoweredBy` option in QueryPanel widget. You can do directly by calling `QueryPanel` method for widget's placeholder element or through `easyQuerySettings` global variable. Example: 

```js
window.easyQuerySettings = {
  serviceUrl: "/EasyQuery",
  modelName: "YourModelName", 
  . . . . . . .
  queryPanel: {
  showPoweredBy: false,
  . . . . . .
  }
  . . . . . .
}
```