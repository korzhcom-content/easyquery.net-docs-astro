---
title: JavaScript widgets formats and settings (Webforms)
slug: tutorials/version-3-x-tutorials/javascript-widgets-settings-formats-webforms
sidebar:
  order: 100
---

## Display formats for columns 

When you need to change default format for columns, you should implement additional settings. 

For Webforms use `Appearance.AttrElementFormat` property of QueryColumnsPanel control. By default, it's set to `{entity}` `{attr}` value what means that we need to show the entity name and then attribute's name. You can set it to simply `{attr}` to remove the entity name part.

Additionally, you may also want to change the format of the first (Expression) column in Columns Panel - use `EntityAttrExpr.TextFormat` static property for that.

So, combining both these options, here is the code sample:

```
QueryColumnsPanel1.Appearance.AttrElementFormat = "{attr}";
EntityAttrExpr.TextFormat = "{attr}";
```
