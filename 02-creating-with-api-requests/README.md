# Creating with API requests

This section uses a Docker container to run a local instance of [requestbin](https://github.com/Runscope/requestbin#deploy-your-own-instance-using-docker).

The local server instance is managed via a git submodule. To install and run the server:

```bash
# update the submodule
$ git submodule update --init --recursive

# run the docker container and server
$ npm run server
```

To create a URL to make requests against, go to the URL the app is served at
(likely [localhost:8080](http://localhost:8080)), and click 'Create a RequestBin'.

Refreshing the page where the URL is generated after requests have been made
will list those requests.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Creating requests](#creating-requests)
  - [`GET` with query params](#get-with-query-params)
  - [Path variables](#path-variables)
  - [Headers](#headers)
  - [Body](#body)
    - [Form data](#form-data)
    - [Raw data](#raw-data)
    - [Binary data](#binary-data)
  - [Prettifying JSON](#prettifying-json)
- [Importing requests from the browser](#importing-requests-from-the-browser)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Creating requests

HTTP requests are comprised of 4 parts:

- method
- url
- headers
- body

Firstly, generate a URL using RequestBin.

### `GET` with query params

- Method: `GET`
- Address: `[requestbin-url]?foo=bar`

On the RequestBin page for that URL you'll see a **QueryString** heading with
the query params used in the request.

**NOTE:** Postman does not URL encode query paramaters by default. e.g. in

- Method: `GET`
- Address: `[requestbin-url]?foo=bar bar`

The space in the string `bar bar` will not be encoded to `%20`. If you need
encoding, in Postman's Params area one can right-click on a highlighted value and
select _EncodeUriComponent_.

### Path variables

One can hard-code variables into requests in Postman, but a convenient
alternative is to use path variables.

e.g. `http://api.example.com/users/3/posts/4` can be written in Postman as
`http://api.example.com/users/:userid/posts/:postid`, and the variables will
appear in the Params section above query parameters.

Values can be added managed in the same way as query parameters are, and Postman
will submit the values in place of the variables.

This is important as it allows values to be replaced dynamically which will be
required for more advanced requests and automation.

### Headers

The Headers section will allow you to define your own headers for requests, but
also provides a list of common headers to add to requests.

### Body

Ths data sent with the request is the body. `GET` can't submit a body.

#### Form data

`form-data` and `x-www-form-urlencoded` work similarly, and simulate data sent
via forms.

Data can be entered in a similar manner as query parameters, and in RequestBin
one can see key value pairs sent through under a **Form/Post Parameters**
heading.

Raw data can also be viewed for the request.

Postman will add a `Content-type: multipart/form-data` header to requests using
`form-data`, and `Content-type: application/x-www-form-urlencoded` to requests
using `x-www-form-urlencoded` requests.

#### Raw data

RESTful APIs generally expect raw data, often as JSON.

After adding some JSON, select `JSON` from the dropdown next to the radios to
indicate the type of data you intend on sending in the request. Navigating to
the Headers section will show that a `Content-type: application/json` header has
been added to the request.

When updating requests, it's a good habit to evaluate how the request headers
are changing.

By clicking _Bulk Edit_ in the _Headers_ section we can toggle between raw editing
of all the current headers, or a key-value style of editing.

If you are frequently making use of custom headers, then the _Presets_ button
next to _Bulk Edit_ is useful to save and apply headers.

Viewing submitted raw data in RequestBin shows the JSON in the _Raw Body_
section of the request.

#### Binary data

Binary data is useful when sending binary data such as images etc. to a server.
Rather than copying the contents of files, Postman allows one to upload files
before making requests.

The `form-data` option for body also allows for file uploads.

### Prettifying JSON

On Mac one can use `CMD+b` to prettify data added to the _raw data_ if the
selected content type supports it.

## Importing requests from the browser

Complex requests made in the browser can be imported into Postman by doing the
following:

In Chrome:

1. In Chrome in the _Network_ tab visit the XHR filter
2. Make the request
3. Right-click on the request, and select _Copy as cURL_

In Postman

1. Click _Import_ in the top left
2. Select _Paste raw text_
3. Paste the data
4. Import

You can now view all the details pertaining to that request, and make the same
complex requests directly from Postman.
