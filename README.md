# pe-paladins.js

![NPM License](https://img.shields.io/npm/l/pe-paladins.js.svg?style=flat) 
![Downloads](https://img.shields.io/npm/dm/pe-paladins.js.svg?style=flat)
[![Production Test & Deploy](https://github.com/tusharlock10/pe-paladins.js/actions/workflows/production-deploy.yml/badge.svg)](https://github.com/tusharlock10/pe-paladins.js/actions/workflows/production-deploy.yml)

A strongly typed fork of [paladins.js](https://www.npmjs.com/package/paladins.js), used by [Paladins Edge](https://paladinsedge.ml)

- Well maintained and up-to-date library
- All of the methods have the exact response type
- Removed the deprecated `request` library for `axios`
- Updated champion enums to include `Azaan` as per `Absolution` patch

## Changelog

v3.1.0
- *BREAKING CHANGE*: removed error handling from getPlayer api
- *BREAKING CHANGE*: removed custom errors from the api
- Removed unnecessary interfaces from ApiResponses
- Removed fire emoji from README.md

Reason for removal of error handling - pe-paladins.js is an intermediary between your application and paladins api. Its up-to the application to handle the error correctly on its own. This api should provide the response directly from paladins api with minimal processing. 


## Install

```
$ npm install pe-paladins.js
```

## Usage

### TypeScript

```typescript
import { API, ApiResponse } from "pe-paladins.js";

let api = new API({
  devId: "1234",
  authKey: "abcd1234",
}); // API loaded and ready to go.

let response: ApiResponse.GetDataUsage
try {
  response = api.getDataUsage()
  // Do something with response
} catch(error) {
  // Handle the error
}
```

### JavaScript

```javascript
const { API } = require("pe-paladins.js");

let api = new API({
  devId: "1234",
  authKey: "abcd1234",
}); // API loaded and ready to go.

api
  .getDataUsage()
  .then((response) => {
    // Do something with response
  })
  .catch((err) => {
    // Handle the error
  });
```

## Documentation / Methods

You can view all the available methods and documentation on [pe-paladins.paladinsedge.ml](https://pe-paladins.paladinsedge.ml/). Some of the methods are removed/changed in pe-paladins.js compared to paladins.js
