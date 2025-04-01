---
title: Version 3.9.0 release notes
slug: release-notes/version-3-x/version-3.9.0
sidebar:
  order: 100
---

## 1. Core library

* Now you can choose the symbol which precedes the parameter name (e.g. '@' or ':') with the new `ParameterPrefix` option in `DbQueryFormats`.
* Another new option `PrefixUnicodeConsts` in DbQueryFormats: means that if `true` - 'N' prefix is added to SQL statements for Unicode string literals.
* There is a new possibility to mark any condition as "In Join", so that condition will be added into JOIN clause instead of WHERE. Also, you can mark any condition as "Parameterized", so the values in this condition will be placed into result SQL as parameters.

## 2. JavaScript widgets

* Now it is possible to turn on/off each widget separately thanks to the new configuration of buttons in QueryPanel widget. There is a new **SortingBar** widget, which allows defining the order of sorting columns.
* New "Options" button allows performing any operation with the condition. Besides, there is a new possibility to turn condition parameterization on/off, and another new function to mark a condition as "join condition".

## 3. Data Model Editor

* Now Data Model Editor saves its position on exit and restores on the next launch. Also, we'd like to note, that Data Model Editor now shows MS SQL as the default DB gate.

## 4. Other editions of EasyQuery

* There is a significant update for the users of ASP.NET MVC projects: we improved EqServiceProvider, so now it's not necessary to use Session to store data in between the requests.
* For WebForms users there is a new Refresh method and also a new property ShowCheckboxes in QueryPanel control. We also fixed DateTimePicker error for the values with time part.
* There are new menu items for each condition in WPF controls: "Toggle parameterization" and "Toggle 'in join' status".
