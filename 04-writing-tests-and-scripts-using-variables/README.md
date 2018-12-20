# Writing tests and scripts using variables

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Variables](#variables)
- [Global variables](#global-variables)
  - [Accessing variables in scripts](#accessing-variables-in-scripts)
- [Environments](#environments)
- [Session variables](#session-variables)
- [Pre-request scripts](#pre-request-scripts)
- [How to configure different URLs using environments](#how-to-configure-different-urls-using-environments)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Variables

If there are variables of the same name in different scopes, variables with the
higher specificity will win over those with a lower specificity.

i.e. Data > Local > Environment > Global

## Global variables

Variables can be accessed in the request builder using the `{{[myVariable]}}`
syntax.

Hovering over variables in the request builder will show the current value of
the variable, as well as the scope of the variable.

Variables can be accessed using curly brace option in the following areas in the
request builder:

- Request address
- Params
- Authorization
- Headers
- Body

### Accessing variables in scripts

```javascript
// globals
pm.globals.get('varName')
pm.globals.set('varName', value)
pm.globals.unset('varName')
pm.globals.clear()

// environment
pm.environment.get('varName')
pm.environment.set('varName', value)
pm.environment.unset('varName')
pm.environment.clear()
```

## Environments

Environments are useful for configuring values for different application
environments, e.g. development and production.

**Note:** To quickly copy global variables to  environment variables, in the
_Manage Environments_ modal, `CMD+click` each variable you want to copy, go to
the environment you want to copy the variables to, and paste inside a row.

## Session variables

Postman allows for session variables, which are variables users can define for
their instance of Postman.

When editing variables, there are _Initial values_ and _Current values_.
_Initial values_ are sync'd with the collection - so changing them will affect
all other team members in real time. _Current values_ do not sync to other team
members.

Postman recommend providing values to _Initial values_ that should not be sync'd
using descriptive names, e.g. `your-trello-key`, `your-trello-token`.

By default Postman will persist current values to initial values after each
request. This can (should?) be disabled via the preferences menu.

## Pre-request scripts

Pre-request scripts are ideal for making requests dynamic, and are usually used
in combination with variables.

e.g.:

1. calculate a timestamp and save it to a variable
2. make the request
3. run the tests

## How to configure different URLs using environments

1. Add an environment in Postman's envinronment manager for each environment
   where you need a specific URL to test
2. add a variable for the url in each environment, say `url`
3. replace the hard-coded url in each request address with `{{url}}`

For running tests during CI these environments will need to be exported so that
the CI server can access configurations.

Tests run using the runner will use the same environment variables, and can be
configured to do so.

To know which environment you are currently working in via scripts, add a
`environment` key to each environment with a descriptive name.

This will allow you to write tests that run based on the active environment.
