---
title: Replace "value" element in QueryPanel's conditions — WinForms
slug: how-to/replace-value-element
sidebar:
  order: 16
---

EasyQuery library provides you with several different controls which are used in conditions in QueryPanel. Most of them represented by a kind of hyperlink which shows an additional control when you click on it. An example of such additional controls can be a simple edit box, a menu which contains the list of available values or a date/time picker element for date/time values. However, sometimes you would like to create your control and use it inside QueryPanel for some conditions. Here is a step-by-step description what you need to achieve this goal.

## 1. Creating an XElement descendant

First of all, you need to create your type of element. This element must be an instance of some class inherited from the XElement class. In our example, we will create a very simple element which can be used for boolean values and will just change it's value from “true” to “false” and vice versa when a user clicks on it.

So here is our new class: 

```js
. . . . . . . . 
using Korzh.WinControls.XControls;
 
. . . . . . . . 
 
  class BoolXElement : LabelXElement {
  protected override void LinkClickedHandler(object sender, LinkLabelLinkClickedEventArgs e) {
  if (ReadOnly) return;
  if (Value == TrueValue)
  Value = FalseValue;
  else
  Value = TrueValue;
  }
 
  private string _trueValue = "true";
  public string TrueValue {
  get { return _trueValue; }
  set {
  _trueValue = value;
  }
  }
 
  private string _falseValue = "false";
  public string FalseValue {
  get { return _falseValue; }
  set {
  _falseValue = value;
  }
  }
 
 
  }
```

## 2. Using new element in conditions

Second step - is actual using our new control inside QueryPanel's conditions. To replace the default XElement by our own you can use CreateValueElement event of QueryPanel controls. Here how it may look in our case: 

```js
private void QPanel_CreateValueElement(object sender, CreateValueElementEventArgs e) {
  // this method demonstrates an ability to change value elelements at run-time
  // for example in this case we change element from ListXElement to EditXElement if list of available values is too long
  if (e.ConditionRow.Condition is Query.SimpleCondition) {
  Query.SimpleCondition simpleCondition = (Query.SimpleCondition)e.ConditionRow.Condition; 
  Expression baseExpr = ((Query.SimpleCondition)e.ConditionRow.Condition).BaseExpr;
  EntityAttr attr = ((EntityAttrExpr)baseExpr).Attribute;
  if (attr.DataType == DataType.Bool) {
  BoolXElement boolElement = new BoolXElement();
  boolElement.Value = simpleCondition.Expressions[1].Value;
  e.Element = boolElement; 
  }
  }
  }
```
That's all. As you can see it was quite simple.
