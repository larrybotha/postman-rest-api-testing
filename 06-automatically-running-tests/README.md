# Automatically running tests

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Collection runner](#collection-runner)
  - [Postman monitors](#postman-monitors)
    - [Limitations of monitors](#limitations-of-monitors)
  - [Running a collection with Newman](#running-a-collection-with-newman)
  - [Accessing collections from Newman](#accessing-collections-from-newman)
    - [Collection link](#collection-link)
    - [Export the collection](#export-the-collection)
  - [Using the Postman API](#using-the-postman-api)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Collection runner

The collection allows one to run a collection of requests, either in their
entirety, or by running a subset of those tests by selecting a folder.

The requests will be made in the order they are in the collection if no
workflows are configured, and no `setNextRequest` commands are defined.

The collection runner can be started in a number of ways:

- selecting _Runner_ at the top of the UI
- selecting a collection and clicking _Run_
- opening the runner via _Collection_ -> _Runner_ in the application bar

The collection runner opens in a new windows where you can select the collection
or subset of a collection to run, the environment to use for the run, and a
number of other options.

Once all requests are run, one can evaluate the requests and responses in the
results tab by clicking on the name of the request.

Only saved requests are run in the collection runner.

## Postman monitors

Monitors allow collections to be run at regular intervals.

Monitors are a pro feature, but allow for up to 1000 API calls free per month.

To create a monitor:

1. click on the arrow on a collection in the sidebar
2. click on the _Monitors_ tab
3. click _Create a monitor_
4. add a name, select an environment, and add an interval

### Limitations of monitors

- Postman servers are not in the same network as you are
- global variables cannot be imported
- global and environment variables are not persisted
- a Pro feature, but with 1000 free API calls per month

Monitors are mostly useful for running tests on APIs that are open.

## Running a collection with Newman

Newman is a command line tool that allows one to run Postman collections.

To do a simple run on a collection:

```bash
$ npx newman run <collection>
```

where `collection` could be a URL to your collection.

Newman can also be run from a node script:

```bash
$ node test/newman
```

## Accessing collections from Newman

### Collection link

The problem with this is, every time the collection changes, the link needs to
updated when calling Newman, otherwise only the snapshot of the collection for
the currently used link will be tested.

### Export the collection

In Postman's sidebar for collections, click the menu button, select, _Export_,
and export using the latest version.

This is also not a great strategy.

## Using the Postman API


