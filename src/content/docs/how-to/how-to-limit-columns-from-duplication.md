---
title: How to limit columns from duplication
slug: how-to/how-to-limit-columns-from-duplication
sidebar:
  order: 100
---

Sometimes you need to limit columns from duplication in MVC project, so when you add a column that is already used in a report it won’t be added again. 
 
So here is the way how to do. You can use `allowDuplicates` option of ColumnsPanel here. Just set it in `columnsPanel` section of `easyQuerySettings` variable definition:
 
```
window.easyQuerySettings = {
    serviceUrl: "/EasyQuery",
    loadDefaultModel: true,
    .    .    .   .    .
    columnsPanel: {
        allowDuplicates: false,
         .    .    .   .    .
    },
    .    .    .   .    .
}
```
