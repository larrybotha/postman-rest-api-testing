# Advanced assertions

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Testing headers and cookies](#testing-headers-and-cookies)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Testing headers and cookies

In addition to responses, headers and cookies can also be accessed and tested:

```javascript
# headers
pm.response.headers.get('Content-type')

pm.response.to.have.header('Content-type')

pm.expect(pm.response.headers.get('Content-type')).to.eql('application/json')

# cookies
pm.expect(pm.cookies.has('sessionId')).to.be.true

pm.expect(pm.cookies.get('sessionId')).to.eql(’ad3se3ss8sg7sg3')
```
