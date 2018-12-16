# First steps

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc -->

- [Request builder](#request-builder)
  - [Simple request](#simple-request)
  - [Simple JSON request](#simple-json-request)
    - [With query params](#with-query-params)
  - [Saving requests](#saving-requests)
  - [Sending a basic POST request](#sending-a-basic-post-request)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Request builder

This is the primary area above the `Response` area that allows one to configure
requests using:

- HTTP method
- Address
- Body
- Headers
- Cookies

### Simple request

- Method: GET
- Address: httpbin.org

Once the request is sent and we get a response there are a few areas we can
evaluate in the `Response` section. It's good to get into a habit of first
checking the status of the response before anything else.

`Body` lets us evaluate the response, which we can see for this request is HTML,
as `Raw`, `Prettyprinted`, or `Preview` which renders the page.

We can also see that the `History` tab in the sidebar on the left now has our
latest request listed there, too.

### Simple JSON request

- Method: GET
- Address: httpbin.org/get

In `Body` in the `Response` section we can now see that we have a `json`
response.

#### With query params

- Method: GET
- Address: httpbin.org/get?myparam1=1&myparam2=my-string

httpbin.org responds with a `json` object including an `args` property with our
query parameters.

To make working with query params easier, Postman has a `PARAMS` button left of
the `SEND` button that is populated with parameters in the address.

We can add parameters here, disable them, reorder them, and delete them.

Disabling parameters is great for saving time during manual testing.

### Saving requests

The previous request can be saved, but a collection first needs to be created.
Postman only saves requests to collections. Postman will save the request with
the address of the request by default, but this can be changed to something
easier to read.

### Sending a basic POST request

- Method: POST
- Address: httpbin.org/post
- Body:
    ```json
    {
      "name": "John",
      "email": "john@example.com"
    }
    ```

In the request builder the `Body` tab is disabled when the active method is
`GET` because a body of data can't be appended to a `GET` request.

Switching to `POST` we see that `Body` is enabled.

In `Body` there are a number of ways that data can be sent in the request:

- form-data
- x-www-form-urlencoded
- raw
- binary

To send data as `json` one needes to select `raw` and then from the `Text`
button that appears on the right select `JSON`.

With the details of the request above we can see that the response we get from
httpbin.org includes a `json` property with the payload we sent in the request.
