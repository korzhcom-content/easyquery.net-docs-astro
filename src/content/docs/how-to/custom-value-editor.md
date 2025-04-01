---
title: Processing custom value editors in EasyQuery JS (Obsolete)
slug: how-to/custom-value-editor
sidebar:
  order: 100
---

> NB: This example is obsolete. You will find an example for EasyQuery.JS 6.0 [in this article](///easyquery/docs/how-to/processing-custom-value-editors-in-easyquery-js).

## 1. Value editor setup

First, of you will need to assign a custom (user-defined) value editor for some attribute or operator in your data model.

* Run Data Model Editor (DME).
* Open your model.
* Select an entity attribute which you want to assign custom value editor to.
* On the “Value Editors” tab select “Custom (user-defined)” item in the drop-down list;
* Click “Settings…” button and enter a type name of your custom value editor. For example “MyValueEditor”.
* Save your model and close DME.

## 2. Value editor widget

To process this value editor on client-side, you will need to create a new ValueEditor widget. Place it in a separate .js file and include that file in the same view where other EasyQuery widgets are used. To create new value editor widget, you will need to inherit it from eqjs.ValueEditor widget and override several methods. The name of new widget must correspond to the name of your custom value editor with “eqjs.ValueEditor_” prefix. In our example, it will be “eqjs.ValueEditor_MyValueEditor”.

Here is an example of very simple value editor which just shows an OK alert when a user clicks on the value element in condition. 

```js
(function ($, undefined) {
 
  $.widget("eqjs.ValueEditor_MyValueEditor", $.eqjs.ValueEditor, {
 
  _renderEditor: function () {
  var self = this;
 
  //do widget rendering here
  },
 
  _showEditor: function () {
  alert("OK");
  }
  })
})(jQuery);
```
Now try to run your application, add a new condition with selected attribute and click on the last element in this condition. If everything was done right - the you should see “OK” alert message.
