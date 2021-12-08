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

### v3.1.1
- *BREAKING CHANGE*: removed error handling from `getPlayer` api
- *BREAKING CHANGE*: removed custom errors from the api
- *BREAKING CHANGE*: removed `getMatchModeDetailsBatch` api due to its inappropriate name
- Removed unnecessary interfaces from ApiResponses
- Added `getMatchDetailsBatch` api which gives response similar to `getMatchDetails`
- Added `GetMatchDetailsBatch` interface in `ApiResponses`
- Removed unnecessary documentation for `@params` and `@return`
- Removed fire emoji from README.md


>__Reason__: pe-paladins.js library is an intermediary between your application and paladins api. Its up-to the application to handle the error correctly on its own. This library should provide the response directly from paladins api with minimal processing.


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

const foo = async () => {
  let response: ApiResponse.GetDataUsage
  try {
    response = await api.getDataUsage()
    // Do something with response
  } catch(error) {
    // Handle the error
  }
}
```

### JavaScript

```javascript
const { API } = require("pe-paladins.js");

let api = new API({
  devId: "1234",
  authKey: "abcd1234",
}); // API loaded and ready to go.

const foo = async () => {
  let response;
  try {
    response = await api.getDataUsage()
    // Do something with response
  } catch(error) {
    // Handle the error
  }
}
```

## Documentation / Methods

You can view all the available methods and documentation on [pe-paladins.paladinsedge.ml](https://pe-paladins.paladinsedge.ml/). Some of the methods are removed/changed in pe-paladins.js compared to paladins.js
