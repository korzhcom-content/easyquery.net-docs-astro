---
title: EasyQuery License key
slug: easyquery/docs/getting-started/product-key
---


## 1. What is it?

The license (product) key unlocks all "Enterprise" level features of EasyQuery library.

A particular key works within one minor version of EasyQuery. For example, the key created for version 7.0.0 will be valid for versions 7.0.1 or 7.0.5, but will not work with version 7.1.0.
 
Therefore, on updating the version of EasyQuery packages used in your project, please remember to replace the key as well (see "How to use" section below to learn more about it).

> **NB: The keys are NOT used for version 3.x or lower**
>
> If you are still using version 3.x, you need to [download full version](https://korzh.com/account/assets) of the library and replace the assemblies from the trial version used in your project with their "full" versions.

## 2. How to get the key?

### 2.1 New to EasyQuery?

If you haven't used EasyQuery before you will need to [sign up first](https://korzh.com/easyquery#get-started)  to get the trial version key. The registration process takes just 2 minutes. 


### 2.2. EasyQuery license owner?

* Log in to [your account](https://korzh.com/account) on Korzh.com website using your email address as a username and the password you set up after the registration. If you don't remember the password - please use [Forgot Your Password?](https://korzh.com/account/auth/forgotpassword) link on the login form
 
* Go to the "License Details" page for your EasyQuery license.

* Click on the "Get Key" button for the version you need
 
If there is no the version you need in the list - it means that your software maintenance subscription has expired already and you need to renew it. You can do it on the same page by clicking on the "Renew Subscription" link.

## 3. How to use?

To use the license key, you just need to add it to your project's settings file  (for ASP.NET or ASP.NET Core editions) or to assign it to a special static global variable somewhere at the beginning of your program (before the first usage of any EasyQuery class). 

The actual place where to place the keys depends on the project's type.

### ASP.NET Core

To apply your license key to your ASP.NET Core solution set it in the "EasyQuery" section of `appsettings.json` file  for the web project where you use EasyQuery middleware (`endpoints.MapEasyQuery`):

```
{
  .   .   .   .
  "EasyQuery": {
    "LicenseKey": "Your license key for EasyQuery ASP.NET Core",
  }
}
```

__NB1:__ If you set the key via global static variables in your code (like `Korzh.EasyQuery.AspNetCore.License.Key = "..."`) you will need to replace them there instead of placing in a config file. In any case, it's better not to mix these two methods.

__NB2:__ Before version 7.1 it was necessary to set two keys: for EasyQuery ASP.NET Core and for EasyQuery.JS.  The EasyQuery.JS key could be set the same way (in `appsettings.json` using `JSLicenseKey` parameter). Starting from version 7.1 the key for ASP.NET Core edition will work for EasyQuery.JS scripts as well and you don't need to set it separately.
 

### ASP.NET

The best place to set the key in ASP.NET 4 web-app is to add it to the `appSettings` section of your  `web.config file` :

```
<configuration>
  .    .    .    .
  <appSettings>
    .    .    .    .

    <!-- EasyQuery license keys -->
    <add key="EasyQuery:LicenseKey" value=""/>
  </appSettings>
  .    .    .    .
```

Another possible way, is to set it via ` Korzh.EasyQuery.AspNet.License.Key` static field somewhere at the beginning of your program (for example in `Application_Start` method of `Global.asax.cs` file):

```
        protected void Application_Start()
        {
		    .    .    .    .    .

            Korzh.EasyQuery.AspNet.License.Key = "Your license key for EasyQuery ASP.NET";
        }
```

__NB:__ Please don't mix these two methods. Use either `web.config` or the static field.


### WPF

For WPF projects the key can be set anywhere before the first usage of EasyQuery classes. For example, in a constructor of the main form:

```
        public MainWindow()
        {
            Korzh.EasyQuery.Wpf.License.Key = "Your license key for EasyQuery WPF";

            .   .    .    .
        }
```

### Windows Forms

The same as for WPF projects the key can be set anywhere before the first usage of EasyQuery classes.

```
        public MainForm()
        {
            Korzh.EasyQuery.WinForms.License.Key = "Your license key for EasyQuery WinForms";

            .   .    .    .
        }
```