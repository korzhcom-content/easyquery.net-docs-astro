---
title: Processing custom value editors in EasyQuery JS
slug: how-to/version-5-x/processing-custom-value-editors-in-easyquery-js
---

## 1. Value editor setup

First, of you will need to assign a custom (user-defined) value editor for some attribute or operator in your data model.

You have to ways to do it:

### 1.1 Using Data Model Editor

* Run Data Model Editor (DME).
* Open your model.
* Select an entity attribute which you want to assign custom value editor to.
* On the “Value Editors” tab select “Custom (user-defined)” item in the drop-down list;
* Click “Settings…” button and enter a type name of your custom value editor. For example “ContactNameEditor”.
* Save your model and close DME.

### 1.2. Using EasyQuery API

You can add a custom editor to any entity attribute in your model at run-time. The best place for doing it is a `ModelTuner` delegate. 
Let's define it via  `EasyQueryOptions` (either in your ApiController for ASP.NET or in EasyQuery middleware setup in ASP.NET Core):

```
options.UseModelTuner((model) =>
{
	// create editors
	var editor = new CustomValueEditor(EditorTags.Custom);
	editor.Id = "ContactNameEditor";
	model.Editors.Add(editor);

	// set editor for entity attribute
	var attr = model.FindEntityAttr("Customers.ContactName");
	attr.DefaultEditor = editor;
});
```


## 2. Value editor renderer

To process this value editor on the client-side, you will need to create a new `ExpressionRenderer`. Place it in a separate .ts or .js file and include that file in the same view where other EasyQuery widgets are used. To create new value editor widget, you will need to inherit it from `ExpressionRenderer` class and override several methods. 

Here is an example of very simple value editor in TypeScript. This implemention just uses `prompt` function to enter the value. 

```ts
import { Expression, ValueEditor } from "@easyquery/core"
import { ExpressionRenderer, QueryPanel } from "@easyquery/ui"

export class CustomExpressionRenderer extends ExpressionRenderer {

  constructor(queryPanel: QueryPanel, expression: Expression, valueEditor: ValueEditor, slot?: HTMLDivElement) {
      super(queryPanel, expression, valueEditor, slot);
  }

  protected renderEditor(): void {
    // Build your editor here
  }

  protected appear(): void {
    // show your editor
    const value = prompt("Enter value: ");
    this.setValue(value);
  }

  protected disappear(): void {
    // hide your editor
  }

}
```

At the end, you need to register `onGetExpressionRenderer` function in the `queryPanel` section of view options.

```ts
let viewOptions = {
.  .   .   .   .   .  . 
	queryPanel: {
	.  .   .   .   .   .  . 
		onGetExpressionRenderer: (queryPanel, expression, valueEditor, slot) => {

			  const condition = expression.getParent() as Condition;
			  const model = condition.getQuery().getModel();
			  const attrId = condition.expressions[0].value;
			  const attr = model.getAttributeById(attrId);

			  if (attr.defaultEditor.id === "ContactNameEditor") {
				return new CustomExpressionRenderer(queryPanel, expression, attr.defaultEditor, slot);
			  }

			  return null;
		}
	.  .   .   .   .   .  . 
	}
.  .   .   .   .   .  . 
}

.   .   .   .

view.init(viewOptions);
```

> NB: If you are using JS ES6, just remove types from our example. For older versions of JS you should use prototypes to write your own renderer

You can find the full example in our [GitHub repository](https://github.com/easyquery/AspNetCoreSamples/commit/6b6bbcbe613dedb78a57064f6fff60c4078f0038) with sample projects for EasyQuery.

Now try to run your application, add a new condition with the selected attribute and click on the last element in this condition. If everything was done right, you should see a prompt message.