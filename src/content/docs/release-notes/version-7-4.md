---
title: Version 7.4 release notes
slug: release-notes/version-7-4
sidebar:
  order: 2
---

Version 7.4 is a minor update of **EasyQuery.NET**. This version continues our goal of providing a platform-independent solution for embedding ad hoc reporting and advanced search functionality into web applications while hiding the complexity of SQL from end-users.

Here is the list of the most important changes we want to focus your attention on:

### 1. Support for .NET 10 and Entity Framework Core 10
In keeping with our commitment to support the latest modern frameworks, version 7.4.1 introduces full support for **.NET 10** and **EntityFramework Core 10**. This ensures that developers can leverage the newest features of the .NET ecosystem while maintaining the robust query-building capabilities of EasyQuery.

### 2. Enhanced Data Exporting Options
This update introduces more granular control over how data is retrieved and named during export operations:
*   **ExportRowLimit Option**: Developers can now set a hard limit on the number of rows included in exported data, helping to manage server load and prevent excessively large file generation.
*   **GetExportedFileName Method**: A new method has been added to the `EasyQueryManager` class, providing a standardized way to define or retrieve the filename for exported result sets.
*   **Asynchronous Exporting Operations**: Starting from the version 7.4.0 EasyQuery supports asynchronous exporting, where the operation is initiated on the frontend and performed in the background on the backend. This allows users to avoid browser timeouts when processing very large datasets, as the frontend is notified once the result file is ready for download.

### 3. Full-Text Search Improvements
We have enhanced the **Full-Text Search** capabilities within the library to better handle complex data structures:
*   **ProcessCollections Property**: A new property has been added to `FullTextSearchOptions` that allows the engine to specifically process collections during search operations.
*   **Navigation Properties**: The `FullTextSearch` method now correctly processes navigation properties, ensuring that related data is included in search results as expected.

### 4. Security and Stability Fixes
Version 7.4.1 addresses several critical issues to improve both the security and reliability of your applications:
*   **SQL Injection Prevention**: We have fixed a potential SQL injection vulnerability related to how float and integer values were handled in query conditions.
*   **Empty List Handling**: A fix was implemented for cases where the "in list" operator was used with an empty list of values, which previously resulted in incorrect SQL generation.
*   **Database-Specific Fixes**: This release resolves a problem in the `DbContextModelExtractor` when handling **JSON fields** and corrects the default identity quote used in **SQLite**.


