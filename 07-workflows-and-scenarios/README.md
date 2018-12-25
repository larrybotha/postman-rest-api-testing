# Workflows and scenarios

Currently our collections will run sequentially. This is not ideal if we have
scenarios where we need to re-run specific requests, as our collection order
would require clumsy duplication in order to achieve this.

Workflows and scenarios resolve this.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Creating a basic workflow or scenario](#creating-a-basic-workflow-or-scenario)
- [Advanced workflows](#advanced-workflows)
  - [Notes on `setNextRequest`](#notes-on-setnextrequest)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Creating a basic workflow or scenario

When running collections, this is what Postman does by default:

```
run request 1
run request 2
run request 3
run request 4
stop
```

If we wanted to change the order, or entirely skip one of the requests, using
collections alone won't help us.

Instead, we can specify in tests which request to run next, or if Postman should
stop executing any subsequent requests:

```javascript
postman.setNextRequest([next-request-name|next-request-id|null])
```

Executing `postman.setNextRequest(null)` will stop subsequent tests from running.

If no `setNextRequest` executions are called with `null`, Postman will continue
running the collection from that request until the last request in sequential
order until it finds another `setNextRequest` call.

This can result in an infinite loop of requests being run.

## Advanced workflows

To better control the flow of requests, one can set global variables to
determine whether or not to set subsequent requests:

```javascript
if (pm.globals.get('hasRun')) {
  postman.setNextRequest(null)
}

pm.globals.set('hasRun', true)
```

### Notes on `setNextRequest`

- only works in automated tests, such as in the collection runner or when run
    via Newman
- it doesn't matter where `postman.setNextRequest` is called - the next request
    will only run once the current request has responded
    - e.g. `setNextRequest` can even be added to the _Pre-request Script_ tab,
        and execution won't be affected
- to get the name or id of a request:

    ```javascript
    # request name
    pm.info.requestName

    # request id
    pm.info.requestId
    ```

    - this allows one to dynamically retrieve test names or ids to run, instead
        of hard-coding values
