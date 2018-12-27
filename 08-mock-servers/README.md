# Mock servers

Mock servers can be used to fake APIs and simulate server responses. They can
serve canned responses to specific requests.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Why use a mock server?](#why-use-a-mock-server)
  - [API design and development](#api-design-and-development)
  - [API testing](#api-testing)

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
