# Mock servers

Mock servers can be used to fake APIs and simulate server responses. They can
serve canned responses to specific requests.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Why use a mock server?](#why-use-a-mock-server)
  - [API design and development](#api-design-and-development)
  - [API testing](#api-testing)
- [Create your first mock server](#create-your-first-mock-server)
- [Recording responses from an existing API](#recording-responses-from-an-existing-api)
- [Known limitations](#known-limitations)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Why use a mock server?

Mock servers can be used to:

- design APIs
- prototyping
- API testing

### API design and development

Mock servers are useful when building frontends and the actual API does not yet
exist or is under development.

### API testing

Mock servers can be used in scenarios where you want to test a 3rd party, such
as a payment gateway, but don't want to interact with the actual payment gateway
itself.

A mock server, in this scenario, is used to isolate an external process so that
tests are not run against that service.

Mock servers are also useful for evaluating how a UI will respond when 3rd party
APIs fail in different ways, when it may be difficult or cumbersome to evaluate
those failing cases with the APIs themselves.

## Create your first mock server

Mock servers are integrated in the Postman service, and ar configurable via the
Postman app.

They are CORS-enabled so that requests may be made from any domain.

Up to 1000 requests can be made per month on the free tier.

In Postman:

- click on _New_ in the top left corner
- click _Mock Server_ in the modal that appears
- enter endpoints and return values
- enter a name for the mock server
- click _Close_ on the final modal

This creates a new collection in the workspace with the name of your mock
server, as well as an environment of the same name as your mock server.

In order to send requests in the collection you'll need to select the matching
environment.

When inspecting the request, you'll notice that each request has an example with
the response entered into it during configuration.

Multiple examples can be added here, each with their own response codes and
bodies. This allows one to keep mock requests for any specific resource
organised under a single request in the collection.

If Postman is unable to match a request to an example, it'll return the response
for the request it most closely resemsbles.

## Recording responses from an existing API

To save response from an existing API, and create a mock server from that data:

1. Create a collection and request
2. Make a request
3. In the header of the response section click _Save_ to save the response as an
   example
4. Repeat for as many different responses as you want
5. Save the request
6. Create a mock server using the menu to the right of the collection name in
   the sidebar

## Known limitations

- data in response bodies is not dynamic; different `POST` data will get the
    same response
- query parameters are disregarded
- a workaround for getting different response bodies is to send different
    request headers
