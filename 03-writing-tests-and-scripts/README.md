# Writing tests and scripts

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [First test](#first-test)
  - [Notes on writing tests](#notes-on-writing-tests)
- [Testing an API](#testing-an-api)

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
specific user: [https://trello.com/app-key](https://trello.com/app-key)

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
