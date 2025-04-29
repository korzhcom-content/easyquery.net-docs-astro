---
title: Customizing common SQL clauses
slug: how-to/customizing-common-sql-clauses
sidebar:
  order: 27
---

## 1. Problem Overview
Working with EasyQuery, sometimes you need to add to generated SQL some additional clauses, which are common for the whole query (DISTINCT, TOP, etc)

## 2. Setting DISTINCT clause

To implement this you need to use `Options.SelectDistinct` property of a DbQuery object:

```
query.Options.SelectDistinct = true;
```

## 3. Setting LIMIT and/or TOP clauses
You can add TOP or LIMIT clause into result SQL statement using the following commands:
```
query.Options.SelectTop = "100";
```
Or

```
query.Options.LimitClause = "20";

```
