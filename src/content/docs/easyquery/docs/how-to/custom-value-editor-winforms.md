---
title: Setup custom value editor — WinForms
slug: easyquery/docs/how-to/custom-value-editor-winforms
---


EasyQuery allows you to define custom value editor for some attribute and then create your UI to edit condition values for this attribute. Here are the step-by-step instructions:

1. Run Data Model Editor (DME) and open your model file.
2. Go to Entities tab and find necessary attribute.
3. At the right panel for this attribute open “Value Editors” tab and select “Custom (user defined)” in “Default value editor” combo-box.
4. Save your model and close DME.
5. Open your project in Visual Studio and select QueryPanel component on form designer.
6. Add an event handler for ValueRequest event (use Events tab in Properties panel).

Here is an example of ValueRequest event handler: 

```js
private void QPanel_ValueRequest(object sender, ValueRequestEventArgs e) {
  //checking if this condition row is associated with some SimpleCondition object
  if (((QueryPanel)sender).ActiveRow is QueryPanel.SimpleConditionRow) {
  SimpleCondition cond = (SimpleCondition)e.Condition;
 
  //if we need our entity attribute - we can get it from BaseAttr property of SimpleCondition object
  EntityAttr attr = cond.BaseAttr;
 
  //bring your own dialog to edit condition value
  //you can use event parameter properties Value and Text to get current value
  . . . . . . . .
  //after the dialog is closed - return new value and (if necessary) text via event's parameter
  e.Value = "<new value>";
  e.Text = "<new text>"; //you can omit this
  }
}
```