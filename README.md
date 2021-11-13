# pe-paladins.js 🔥

![NPM License](https://img.shields.io/npm/l/pe-paladins.js.svg?style=flat) 
![Downloads](https://img.shields.io/npm/dm/pe-paladins.js.svg?style=flat)
[![Production Test & Deploy](https://github.com/tusharlock10/pe-paladins.js/actions/workflows/production-deploy.yml/badge.svg)](https://github.com/tusharlock10/pe-paladins.js/actions/workflows/production-deploy.yml)

A strongly typed fork of [paladins.js](https://www.npmjs.com/package/paladins.js), used by [Paladins Edge](https://paladinsedge.ml)

- Well maintained and up-to-date library
- All of the methods have the exact response type
- Removed the deprecated `request` library for `axios`
- Updated champion enums to include `Azaan` as per `Absolution` patch
- Added fire emoji for clickbaits

## Changelog

v3.0.2
- Added champion Azaan
- Removed deprecated api getPlayerIdByName
- Removed redundant apis getPlayerIdByPortalUserId, getPlayerIdsByGamertag, getPlayerIdInfoForXboxAndSwitch
- Fixed GetPlayerMatchHistory ApiResponse type


## Install

```
$ npm install pe-paladins.js
```

## Usage

### TypeScript

```javascript
import { API } from "pe-paladins.js";

let api = new API({
  devId: "1234",
  authKey: "abcd1234",
}); // API loaded and ready to go.

api
  .getDataUsage()
  .then((response: any) => {
    // Do something with response
  })
  .catch((err: any) => {
    // Handle the error
  });
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
  .then((response: any) => {
    // Do something with response
  })
  .catch((err: any) => {
    // Handle the error
  });
```

## Documentation / Methods

You can view all the available methods and documentation on [pe-paladins.paladinsedge.ml](https://pe-paladins.paladinsedge.ml/). Some of the methods are removed/changed in pe-paladins.js compared to paladins.js
