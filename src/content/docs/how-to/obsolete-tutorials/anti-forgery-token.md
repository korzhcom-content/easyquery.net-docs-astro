---
title: Setting anti-forgery token for AJAX requests from EasyQuery widgets
slug: how-to/obsolete-tutorials/anti-forgery-token
sidebar:
  order: 1
---

Starting from version 3.7.0 of EasyQuery there is a possibility to add an anti-forgery token to each AJAX request from visual widgets to the server-side.

Use `antiForgeryToken` option of `easyQuerySettings` variable:

```
window.easyQuerySettings = {
  serviceUrl: "/EasyQuery",
  . . . . . . . .
  antiForgeryToken: document.querySelector('#__AjaxAntiForgeryForm input[name=__RequestVerificationToken]').value

};
```

If it's set - this token will be added to each AJAX request to EasyQueryController.

Of course, you need to add AntiForgeryToken helper somewhere on your page:

```
  @using (Html.BeginForm(null, null, FormMethod.Post, new { id = "__AjaxAntiForgeryForm" }))
  {
  @Html.AntiForgeryToken()
  . . . . . . .
```
