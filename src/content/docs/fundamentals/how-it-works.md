---
title: How it works
slug: fundamentals/how-it-works
sidebar:
  order: 2
---

![EasyQuery scheme](/easyquery/docs/images/eq-lib-schema.png)

 The above scheme shows the general internal structure of the library and the main principles of its work.

## EasyQuery components

All EasyQuery classes and components can be divided into two main parts:

* logical part (DataModel, Query, SqlQueryBuilder).
* the visual part (QueryPanel, ColumnsPanel, etc.).

The logical part is responsible for the internal representation of data structures and user queries, as well as for the generation of SQL statements (or statements in other query languages like LINQ).
The visual part contains components that provide a user interface (UI) to manage query conditions (QueryPanel) and the result columns (ColumnsPanel), as well as some other useful components.

## Data Model

It is necessary to emphasize that the EasyQuery components do not work with the database directly. All the information about the structure of the data is contained in a special repository called “data model”. We'll review it in details later, and now it’s enough to say that data model is, in fact, the representation of the data in a convenient form for the end users.

Regarding EasyQuery data model - is an object of DataModel class (or inherited from it such as DbModel). Typically, the data model is stored in an XML file that is loaded at program start. But it’s not a necessity - the model can be stored in the database (just as a string in XML format) or can be created "on the fly" directly in the program. More on this - also in a special section devoted to DataModel.

## Common scenario

Now let’s take a closer look how EasyQuery components work in your application.

We assume that your application contains some (page) where users can search for data with the help of EasyQuery visual components (widgets) and then view the results of this search in a convenient way (grid, chart, report, etc.).

As we can see from the scheme above, visual components (such as QueryPanel or ColumnsPanel) takes all necessary information about the available search attributes and operations from the DataModel object.
The internal representation of the query - is stored in the Query object.

So, a typical scenario, in this case, can be the following:

* The user specifies the search criteria and the columns he/she wants to see in result using visual EasyQuery components (QueryPanel, ColumnsPanel, and others).
* Any such modification in visual controls automatically changes the internal representation of the query stored inside Query object.
* When the user is ready to get the result of their query (for example, he/she pressed the Search button ) the application uses SqlQueryBuilder object to generate an SQL statement based on the current contents of the Query.
* The generated SQL query is executed and the results of this execution are shown in some grid, chart, report, diagram, etc.

Instead of SqlQueryBuilder, we can use some other classes to generate different types of queries (for example, LinqQueryBuilder can be used to create LINQ queries).

It is necessary to emphasize that EasyQuery components do not communicate with your database directly. They only provide a convenient UI to build the query and generate SQL (or LINQ) expression based on user input. Thus, you do not have to specifically change something in the already existing code that works with the data. EasyQuery will work well with your current connection and visual components that are involved in data visualization.

As we can see from the described scenario, all the information about the data structure is obtained from the data model (through a DataModel object). In the next section will talk about data model more in details: what is it, why we need it and the different ways of its creation.
