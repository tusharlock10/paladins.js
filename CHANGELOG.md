# v3.1.0
- *BREAKING CHANGE*: removed error handling from getPlayer api
- *BREAKING CHANGE*: removed custom errors from the api
- Removed unnecessary interfaces from ApiResponses
- Removed fire emoji from README.md

Reason for removal of error handling - pe-paladins.js is an intermediary between your application and paladins api. Its up-to the application to handle the error correctly on its own. This api should provide the response directly from paladins api with minimal processing. 

View release on [npm](https://www.npmjs.com/package/pe-paladins.js/v/3.1.0)