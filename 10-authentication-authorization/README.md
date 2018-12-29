# Authentication / Authorization

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Basic access authentication](#basic-access-authentication)
  - [Postman Echo](#postman-echo)
- [OAuth2 authorization flow (Authorization code grant)](#oauth2-authorization-flow-authorization-code-grant)
  - [Authorising requests for Imgur](#authorising-requests-for-imgur)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Basic access authentication

Basic access authentication is a simple method for implementing authentication,
making use of base64 encoded usernames and passwords submitted via header
values.

The following is an example of what one can expect when making a request to a
server and the request is unauthorised:

```
Status code: 401 Unauthorized
Response-header: WWW-Authenticate: Basic realm="Users"
```

The `Response-header` indicates that the server requires basic authentication.

To send authorisation data to the server, the request would like something as
follows:

```
Authorization: Basic username:password
```

`username:password` would be base64 encoded. Note that this doesn't mean that
the data can't be intercepted or uninterprable. HTTPS should be used to secure
communication between networks.

### Postman Echo

[Postman Echo](https://docs.postman-echo.com/) can be used to import a
collection where one can evaluate different requests, including authorisation
requests.

To recreate basic authentication in Postman:

1. Create a request with an authorisation endpoint
2. Add an `Authorization` header with `Basic [encoded-username-password]`

Postman makes this simpler by allowing one to specify the type of authorisation
via the request configuration's _Authorization_ tab and selecting _Basic_ from
the menu.

This allows one to add a _username_ and _password_ field (which should be
managed using environment variables), with Postman generating the
`Authorization` field with a base64 encoded username and password.

Instead of sending requests with invalid data, one can preview the request using
the _Preview_ button in the _Authorization_ tab. This will generate the
necessary data for the request, which in the case of basic auth can be viewed
under the _Headers_ tab.

## OAuth2 authorization flow (Authorization code grant)

This is the preferred method used by Facebook, Google, etc.:

1. application directs user to authentication server, providing redirect URL,
   scope of access, etc.
2. on user confirming authentication of application, application server
   redirects user to application with an authorisation code
3. the application then sends that authorisation code in a request to the
   authorisation server, which responds with an access token
4. the application can then make requests for other resources from the 3rd part
   service using that access token

### Authorising requests for Imgur

In Postman:

```
Method: GET
Address: https://api.imgur.com/3/account/me/images
```

This responds with a `401 Unauthorized` because we haven't authenticated yet. To
authenticate with Imgur, we'll need the following:

1. a client id and secret that we send to Imgur so that Imgur can identify our
   application
2. a callback URL that Imgur will be able to send an authorisation code to once
   authorised
3. an authorisation URL on Imgur's side that we send our client id and secret to
4. a token URL on Imgur's side that we will request a token from in exchange for
   the authorisation code we receive in the response to authorisation

Postman has a `https://app.getpostman.com/oauth2/callback` endpoint that will
handle the redirect and make the request to Imgur's token URL once we have an
authorisation code from the first request to the authorisation URL.

This data can all be entered into the _Get new access token_ modal that appears
when clicking on the button of the same name after selecting _Oauth2.0_ from the
_Type_ menu in the _Authorization_ tab of the request.

Once we have an authorisation token, we can send requests for data in one of two
ways:

1. Manually set an `Authorization` header with a value of `Bearer [auth-token]`
2. Let Postman generate the header for us by click on the _Authorization_ tab
   and setting the type to _Oauth2.0_ and sending data via headers.
