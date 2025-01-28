---
title: User-friendly name for tables
slug: how-to/user-friendly-name-for-tables
---


When users build queries with EasyQuery UI, they do not work with tables and fields. Instead, they work with “entities” and their “attributes”. Each entity represents some object from the real word, e.g., “Customer” or “Order”. Entity attribute is some property of such objects for example “Order date” or “Customer's first name”.

All entities and attributes are described in data model which can be created and then modified using **Data Model Editor**. Entity attributes usually correspond to some fields, but it is not obligatory since you can define “virtual attribute” which is represented by some expression.

For example attribute “Full customer name” can be described as *“Customer.FirstName + ' ' + Customer.LastName”*. Both entities and attributes have Caption property which is shown to a user when he/she defines conditions in QueryPanel control or columns in QueryColumnsPanel control. So it can be considered as that “user-friendly name” you asked for.