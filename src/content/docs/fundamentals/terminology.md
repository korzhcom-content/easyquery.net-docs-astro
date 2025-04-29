---
title: Terminology
slug: fundamentals/terminology
sidebar:
  order: 1
---

## Common terms

* **Database** - may refer to any data storage but in most cases we mean some relational database such as MS SQL Server, My SQL, Oracle, etc.
* **Result set** - a result of some search request (query). Usually, is presented as tabular data.
* **Query** - a search request.
* **Query condition** - one of the search terms (for example: "Customer name starts with 'A'"). Any condition consists of some entity attribute ("Customer name"), operator ("starts with", "less than", etc) and one or more values ( "A", "John", "1001", "24 Aug 1991", etc).
* **Query column** - a column in result table we get after executing the query.
* **Database table** - one of the tables of some relational database.
* **AJAX request** - an asynchronous HTTP request which is sent from web page to server to get or transfer some data without reloading the entire web page. In a case of EasyQuery.JS, all visual widgets (such as QueryPanel, ColumnsPanel, and EntitiesPanel) send AJAX requests to get data model, to synchronize or to execute a current query and to get the result set.
* **Widget** - an element of the user interface (UI) on a web page that displays the current status of some object (e.g. Query) and allows to perform a set of operations with it.

## EasyQuery related terms

All following conditions might have other meaning, but here we talk about them in a context of EasyQuery products.

* **Data model** - a special repository for database structure, which presents data in more convenient for the end user form. Instead of tables and fields (as we see it in any relational database) data model has a hierarchic structure of entities and their attributes. More about data model please [read here](//fundamentals/data-model).
* **Entity** - an object of a user's domain area. Usually, it appears in some separate table in the database, but it is not required. Entities' examples: Customer, Order, Product, Patient.
* **Entity attribute** - some characteristic of the entity. For example, Customer Name, Order Date, Product Price, Patient Age. Usually, attribute corresponds to some field in a database table, bu it is not a requirement in general case. Two or more fields can calculate some attributes. For example, the attribute Patient Full Name can be defined as a concatenation of the field values Patients.FirstName and Patients.LastName.
* **Operator** - a particular function that compares two (or more) values and returns truth or false as a result. Examples of operators: "equal to", "not equal," "more than", "less," "starts with" (for textual values), "prior to" (for date and time). The first argument of the operator usually consists of some entity attribute, and the second - of some constant (1000, "A", "01 Jan 2017", etc.).
* **Value editor** - a type of editor to enter values when we define query condition. The most common value editor is just a text field where the user types required value. Another common case is "List" value editor when the user can select a value from some predefined list instead of entering it "manually".
