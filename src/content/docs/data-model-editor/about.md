---
title: About Data Model Editor
slug: data-model-editor/about
sidebar:
  order: 1
---

## What is it?

EasyQuery uses a special repository (called “data model”) that allows you to hide the details of your database structure from the end-users. It contains information about tables, links between them, entities of the data domain (and their attributes) and operators which can be used in query conditions (such as "equals” or “is greater than”).

Data Model Editor (DME) is a GUI tool (Windows only for now) that allows you to create and modify  data models. 


## Installation

To install DME you need to [download the setup file](https://korzh.com/download/dme_setup.exe), run the installation and follow the instructions. 

After the setup is fininhished you will have two new shortcuts in your Start menu list: "Data Model Editor" and "Create New Model". The first one actually opens the DME, the second will launch it in a "Create Model" mode (so you can start creating a new model right away).

Data Model Editor is a free utility and can be used by anybody without restrictions. The source code for DME is provided with [Developer, Team or Company license for EasyQuery](https://korzh.com/easyquery/licensing).

## How to use DME?

Though being easy to use and self-explanatory, data model editing requires some understanding of the relational databases handling. Users totally unfamiliar with database management should better leave this dialog for a database operator or another experienced user.

First of all, you will use DME to create your first data model. Here is a detailed instruction which will guide you through all steps of model creation process:

 * [Creating new data model using Data Model Editor](/easyquery/docs/getting-started/working-with-data-model)

Once a model is created (or opened), you will see 3 main tabs:

* [Tables and Links](//data-model-editor/tables-links-page) - to describe tables taking part in the data model. You may define an alias for each table, as described in [”Working with table aliases”](//data-model-editor/working-with-aliases) topic.
* [Entities](//data-model-editor/entities-page) - to describe the entities and their attributes which end-user can operate with to build queries.
* [Operators](//data-model-editor/operators-page) - to describe operations (like comparisons) upon the data model's fields. Each operator should have a default value editor set. All available editors are listed in [”Value editors”](//data-model-editor/value-editors) topic.
