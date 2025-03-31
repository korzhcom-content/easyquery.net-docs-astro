---
title: How to add a column with the same attribute as in newly added condition
slug: how-to/add-column-by-condition-attribute
---

```js


var query = EQ.client.getQuery();
query.addChangedCallback(function (eventParams) {
    if (eventParams.changeType == "condition.add") {
        var cond = eventParams.condition;
        if (cond.expressions) {
            var attrID = cond.expressions[0].id;
            var ColumnsPanelWidget = $('#ColumnsPanel');
            ColumnsPanelWidget.ColumnsPanel("addNewColumn", attrID);
        }
    }
});

```