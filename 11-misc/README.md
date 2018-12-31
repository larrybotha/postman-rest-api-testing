# Miscellaneous

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Using 3rd-party libraries in Postman](#using-3rd-party-libraries-in-postman)
  - [Setup](#setup)
  - [Cleanup](#cleanup)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Using 3rd-party libraries in Postman

### Setup

If a 3rd-party script has a UMd export, that library can be used in Postman by
doing the following:

1. make a `GET` request for the plain text version of the module, such as by
   requesting the raw Github URL
2. assign `responseBody` to an environment variable
3. use `eval` to run the library as a string, and access the export via its name
   depending on where the library has written itself to, e.g. the global object,
   or `this`

```javascript
// 1. GET https://raw.githubusercontent.com/jsverify/jsverify/master/dist/jsverify.standalone.js
// 2. once we have the request
pm.environment.set('jscLib', responseBody)

// 3. in another request that uses the imported lib, execute the requested script
eval(pm.environment.get('jscLib'))

// JsVerify exports jsc onto the global object
console.log(jsc.sampler(jsc.nestring)(10))

// exports 10 randomly generated strings
`, so we access that via `this
```

### Cleanup

Once finished with the import, one should clean up the environment:

```javascript
pm.environment.unset('jscLib')
```
