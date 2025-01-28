---
title: Data Model
slug: fundamentals/data-model
---


In short (and by its name), data model - is a model (representation) of some data stored in your database. It solves two major problems:

* Presents the data to the end user in a more friendly and familiar way.
* Contains some meta information that helps EasyQuery components to build query statements in SQL or other query languages.

Any data model contains the following main sections:

1. Entities and their attributes.
2. Operators.
3. Tables and the links between them.

In the following paragraphs, we will examine all these sections in more detail. 

## Entities and their Attributes

In general, an entity represents some object from real life and an attribute - is some property of that object.
Examples of entities: Customer, Order, Product, Vendor, etc.
Examples of attributes: Customer Name, Product price, Order freight, Vendor country, etc.

When creating a new model, each entity usually represents a table in the database and each attribute - one field in that table.
However, it is not a rule in general case: some entities can combine fields from different tables. Furthermore, there are "virtual" attributes, whose values are calculated from other fields.

Each entity and attribute have a variety of properties. For example "Name" or "Caption" property contains the name that end users will see when they build a query.
For entity attributes, you can also specify a list of possible values (so the user can choose from this list, instead of entering data manually). Another important property of an entity attribute is "Expression" - it contains the exact expression that goes into the generated SQL statement.

## Operators

We use operators to define query conditions. For example: "is equal to", "is greater than", "starts with", "is between", etc. Typically, each operator directly "represents" some conditional operation in SQL or any other query language but instead of mathematical symbols (like "=", ">") or some tricky SQL structures, operators in EasyQuery are presented to end users as simple phrases in natural language.
Compare:

```
Emp.fname LIKE 'Alex%'
```

and

```
Employee first name starts with 'Alex'
```

## Tables and their links

Entities, their attributes, and operators - is that part of the model, which end users work with when building a query. But the tables and their links are needed for internal use only by EasyQuery components - to generate SQL statements correctly.

Using the list of tables and you can control which tables can take part in the queries built over this model.
Additionally, for each link, you can define a default link type (INNER, LEFT, RIGHT) which will be used in generated SQL statements.

## Creating a Model

So, now we know that the model is necessary for a proper work of EasyQuery components. The only question is: how could we create one?

There are several different ways to set up and populate the data model. Here are the most popular:

* **Manually**
  
The model is created using a single utility Data Model Editor (DME), which is supplied EasyQuery. When you create a model, we usually connect to the database using one of the available connection types (OLEDB, SQL Client, Oracle, etc.), to get the necessary information about structure database: list of tables, relationships between them, the fields for each table, etc. Then you can manually add/delete attributes (fields), change their description, etc.
  With this approach, the model is usually stored in an XML file, which is then loaded when you start the application using the LoadFromFile().
  If the structure of your database does not change often - we recommend you use this approach because it provides greater control over the presentation of data to the end user. Some fields can be hidden, for others, you can change the name or assign an individual "value editor" that allows users to choose a value from some list instead of entering it manually.

* **Creating model "on the fly"**
  
There is an opportunity to create a model directly based on Connection object using DbGate component and a special method of DataModel: `LoadFromConnection()`.
  In this case, in fact, we just have a mapping of the database structure with all tables (including some service tables or the tables which just implement many-to-many relations) and the fields in these tables. All entities and attributes will have the same names as their corresponding tables and fields.

* **Creating a model by DbContext**
  
When using EntityFramework we can get a model by DbContext (or ObjectContext for older versions of EF) class using special method `LoadFromDbContext()` (or `LoadFromContext()`).
This method is very similar to the previous one, with the difference that we get the model's structure directly from a "context" class instead of using meta-information from database.