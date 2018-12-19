# Writing tests and scripts

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [First test](#first-test)
  - [Notes on writing tests](#notes-on-writing-tests)
- [Testing an API](#testing-an-api)
- [Testing an API - Writing more tests](#testing-an-api---writing-more-tests)
- [Recap: Path parameters vs query parameters](#recap-path-parameters-vs-query-parameters)
- [Assignment notes](#assignment-notes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## First test

Tests in Postman run only after a request is completed.

```javascript
pm.test('Status code is 200', () => {
  pm.response.to.have.status(200)
})
```

This is added to the _Tests_ tab of the request builder.

Once a request is made and responds, the result of your tests can be evaluated
in the response section under _Tests_.

If a test is passing without having failed before... test that it does fail! We
don't want false positives leading us astray.

### Notes on writing tests

- tests always start with `pm.test`
- tests are run in a non-blocking in case of developer errors
- each test can contain multiple assertions
- `pm.response` is Postman's response assertion API for making assertions on the
    response specifically (status, headers, body, etc)

## Testing an API

We'll use Trello as a basis for our API tests.

We'll need to get an API key, which identifies the application (Postman, in this
case) making requests to Trello, and get a token, which is what identifies the
specific user: [trello.com/app-key](https://trello.com/app-key)

- Method: `POST`
- Address: `https://api.trello.com/1/boards/`
- Query Params:

    ```
      name: 'My board',
      key: [My Trello API key]
      token: [My Trello token]
    ```

This creates a board with Trello's default lists. To disable the default lists
one can provide a query param of `defaultList=false`.

## Testing an API - Writing more tests

When creating a Trello board, it's not good enough to only test that the status
code in the response is correct. We need to evaluate the data returned in the
response is correct, too.

To do this, we need to do a few things:

```javascript
pm.test('sets the correct board name', () => {
  // get the json data from the response
  const jsonData = pm.response.json()

  pm.expect(jsonData.name).to.eql('My board name')
})
```

Check that the test fails by adding a name that is incorrect.

We can expand on these tests:

```javascript
pm.test('sets the correct board name', () => {
  // get the json data from the response
  const jsonData = pm.response.json()

  pm.expect(jsonData.name).to.eql('My board name')
  pm.expect(jsonData.closed).to.eql(false)
  pm.expect(jsonData.prefs.permissionLevel).to.eql('private')
})
```

## Recap: Path parameters vs query parameters

When using the _Params_ section of the request builder, path variables cannot be
toggled, as this changes the path, whereas query parameters being toggled don't
change the path.

## Assignment notes

It's tedious to add query parameters with hard-coded values to multiple
requests, so to make this easier to manage, we can save parameters to global
variables:

1. Copy the `key` value in the previous request's query parameters
2. Click the eye in the top right, and edit globals
3. Add a `trelloKey` and paste your value
4. Do the same for your Trello token
5. In the _Params_ tab replace the hardcoded values for `key` and `token` with
   `{{trelloKey}}` and `{{trelloToken}}`

Hovering over the global variables will show what is stored.

To quickly copy query parameters to other requests in Postman, select _Bulk
edit_ and copy what you want, instead of manually creating individual params in
each request.
