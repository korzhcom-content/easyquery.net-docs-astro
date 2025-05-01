---
title: Version 4.2.0 release notes
slug: release-notes/version-4-x/version-4.2.0
sidebar:
  order: 5
---

 ## 1. Core library

* Some improvements in `FillByDbGate` method of DbModel class: new `options` parameter and a possibility to turn on/off DB views from scanning
* A possibility to use indexing in operator expressions for "List" kind of values. For example: `{expr1} BETWEEN {expr2[0]} AND {expr2[1]}

## 2. JavaScript

* onError and onLoadQuery callbacks in easyQuerySettings
* setDescription() method in Query object

## 3. Angular sample

* Now we have a sample project which demonstrates you how to use EasyQuery to set up an advanced search page in an Angular application.

**NB:** All EasyQuery samples (including the new one) are available on [GitHub repository](https://github.com/easyquery/AspNetCoreSamples)

## 4. Custom value editor example

* We have added an example of defining a custom value editor in our EqAspNetCoreDemo01 sample project. You can check how it works by adding a condition with "Product | Units in stock" attribute and "In range" operator.

## 5. Fixes

* AlphaAlias and QuoteColumnAlias settings now work separately from each other
* Collection navigation properties are now supported in DbModel.LoadFromEntityType and IQueryable.DynamicQuery extension methods.
