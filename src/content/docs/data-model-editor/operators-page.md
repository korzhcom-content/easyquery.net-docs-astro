---
title: Operators page
slug: data-model-editor/operators-page
---

This article defines operators which can be used in conditions (such as 'is equal to', 'less than' and others). List in the left part shows defined operations. Add or delete one by right-clicking the list and choosing an appropriate topic from the pop-up menu or using corresponding speed buttons on the top of the page. To edit an operation select it from the list and modify its properties in the right part of the page.

## Operator properties

* **Operator ID** is an internal identifier for the operator.

* **Caption property** allows specifying how this operator will be presented to a user when he/she selects it in condition.

* **Display Format** is a template which describes how an operator (an all condition) will be shown to end user in query panel. The most usual value of this field is: `{expr1} [[operator text]] {expr2}`

Here `{expr1}` and `{expr2}` will be substituted by the corresponding expression in condition (an entity attribute or constant).

The text in `[[ ]]` brackets will be shown as a link for operator selection.

For “between” operator Display Format property will also contain '**and**' word between second and third expression:

```
{expr1} [[is between]] {expr2} and {expr3}
```

* **Expression** is a template for condition expression in generated SQL query. It may contain any correct SQL expressions (operators such as =, >,<, functions or even names of stored procedures) and the following special variables:

  * `{expr1}` - is substituted with the entity attribute selected by user

  * `{expr2}`, `{expr3}`, … - are substituted by constant values typed or selected by user or entity attributes selected at the right part of the condition.

Additionally, you can use the following constructions:

* `{exprN.table}` - will be replaced by table name of N expression if this expression represents an entity attribute or by an empty string in another case.
* `{exprN.field}` - will be replaced by field name of N expression if this expression represents an entity attribute or by an empty string in another case.

Examples:

 * For the simple “is equal to” operator the format string is:

```
{expr1} = {expr2}
```
 * The “starts with” operator has the following format:

```
{expr1} LIKE {expr2}
```

You can define more complex operators even with sub-queries. For example here is an expression for “more then average” operator:

```
{expr1} > (SELECT AVG({expr2.field}) FROM {expr2.table})
```

* **Default data type** - represents an expected type of operator parameters used in condition expression. “Auto” value means the same type as the type of entity attribute used at the left part of the condition; other values correspond to particular data types.

* **Default value kind** - defines the kind of data which has the parameters of this operator.
  
  * “Scalar” - means a simple single value is needed: one string, one number, etc. This kind also allows specifying entity attribute.
  * “Const” - the same as previous one but allows specifying the only constant value (entity attributes are not allowed).
  * “Attribute” - the same as the first one but allows to specify only entity attribute (constant values are not allowed).
  * “List” type requires a list of scalar values separated by the comma. E.g., having this option checked, when the user enters a, b, c as a parameter value, it's treated as 'a', 'b', 'c' instead of 'a, b, c' in the generated SQL text.
  * “Query” type means that operator requires SQL SELECT statement as a value in the right part of the condition. To build this statement query panel opens a separate dialog.

* **Group** - allows selecting the group which operators belong to.

* **Default value editor** - allows specifying the value editor for operator's parameters. To learn more about free editors see Value Editors topic. To specify editor parameters click on “Settings…” button. Operator value editor has higher priority in a condition than the editor defined for entity attribute used at the left part of this condition.

* **Apply to types** is a list of check boxes defining data types to which the operation is applicable.

## Main operations

To add new operator use “Operators | Add operator” menu item. To delete - use “Operators | Delete selected”.

Operators menu also contains “Add/Update default operators” menu item which can be used to add the default operators in the model or update the parameters of existing one.

There are the following default operators: 

| ID | Caption | SQL expression |
|-------------------------|-------------------------------|--------------------|
|Equal | is equal to | {expr1} = {expr2} |
|NotEqual | is not equal to | {expr1} <> {expr2} |
|LessThan | is less than | {expr1} < {expr2} |
|LessOrEqual | is less than or equal to | {expr1} <= {expr2} |
|GreaterThan 	 | greater than | {expr1} > {expr2} |
|GreaterOrEqual | greater than or equal to | {expr1} >= {expr2} |
|IsNull			 | is null			 | {expr1} is null |	
|InList 	 | is in list | {expr1} in ({expr2})|
|StartsWith 	 	 | starts with | {expr1} like {expr2}|
|NotStartsWith	 | does not start with | not({expr1} like {expr2})|
|Contains 	 | contains | {expr1} like {expr2}|
|NotContains 	 | does not contain | not({expr1} like {expr2})|
|Between 	 | is between | {expr1} between {expr2} and {expr3}|
|InSubQuery 	 | is in set 	 | {expr1} in ({expr2})|
|DateEqualSpecial 	 | is 	 | {expr1} = {expr2} |
|DateEqualPrecise 	 | is 	 | {expr1} = {expr2} |
|DateBeforeSpecial 	 | is before (special date) | {expr1} < {expr2} |
|DateBeforePrecise | is before (precise date) | {expr1} < {expr2} |
|DateAfterSpecial | is after (special date) | {expr1} > {expr2} |
|DateAfterSpecial | is after (precise date) | {expr1} > {expr2} |

 “Special” and “Precise” operators with the same expressions differ by value editors. “Special” operators have “Custom List” value editor with “SpecDateValues” name. This list is filled at runtime by such values as Today, Yesterday, First day of the month, etc.

The “Precise” operator has usual “Date/time value editor” which allows simply to enter a necessary date (or select it using the calendar).