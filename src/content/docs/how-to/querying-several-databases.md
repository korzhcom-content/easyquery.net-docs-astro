---
title: Generating queries for 2 (or more) databases
slug: how-to/querying-several-databases
sidebar:
  order: 100
---

This option is not available “out-of-the-box”, but you can do it using some tricks.

**1)** Run Data Model Editor (DME) and create a new data model based on connection to the first database. Add all the tables from that DB you need.

**2)** Then connect to another database using Model | Model Settings… menu item. Again add the tables you need from that database.

**3)** Add necessary links between tables from the first DB and tables from the second one.

**4)** Don't forget to set Formats.UseDbName option to `true` in your code:

`query1.Formats.UseDbName = true;`
