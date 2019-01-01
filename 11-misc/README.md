# Miscellaneous

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Using 3rd-party libraries in Postman](#using-3rd-party-libraries-in-postman)
  - [Setup](#setup)
  - [Cleanup](#cleanup)
- [Writing files with Postman](#writing-files-with-postman)

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

## Writing files with Postman

Postman doesn't have access to system commands, so one has to use Newman to
write files to the system.

Using Node's `fs.writeFile` along with `newman.run`s events, one can write files
to the system at different times with different data.

The following are the events currently supported by Newman at the time of
writing:

- `start`
- `beforeIteration`
- `beforeItem`
- `beforePrerequest`
- `prerequest`
- `beforeRequest`
- `request`
- `beforeTest`
- `test`
- `beforeScript`
- `script`
- `item`
- `iteration`
- `assertion`
- `console`
- `exception`
- `beforeDone`
- `done`

Visit [Newman's events docs](https://github.com/postmanlabs/newman#newmanrunevents)
for more info.
