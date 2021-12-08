# v3.1.1
- *BREAKING CHANGE*: removed error handling from `getPlayer` api
- *BREAKING CHANGE*: removed custom errors from the api
- *BREAKING CHANGE*: removed `getMatchModeDetailsBatch` api due to its inappropriate name
- Added `getMatchDetailsBatch` api which gives response similar to `getMatchDetails`
- Added `GetMatchDetailsBatch` interface in `ApiResponses`
- Removed unnecessary interfaces from ApiResponses
- Removed unnecessary documentation for `@params` and `@return`
- Removed usage of `fs` module for caching sessions. This library can be used in froned-end as well 
- Removed fire emoji from README.md


>__Reason__: pe-paladins.js library is an intermediary between your application and paladins api. Its up-to the application to handle the error correctly on its own. This library should provide the response directly from paladins api with minimal processing.

View release on [npm](https://www.npmjs.com/package/pe-paladins.js/v/3.1.1)