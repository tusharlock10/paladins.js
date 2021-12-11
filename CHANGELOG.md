# v3.2.0
- *BREAKING CHANGE*: renamed `GetMatchIDSByQueue` ApiResponse interface to `GetMatchIdsByQueue`
- *BREAKING CHANGE*: renamed `Data` objects from capital to pascal case and changed keys from strings to enums
- Refactored `ApiResponse`, `Data`, `Enums`, `Strings` into their own folders
- Updated documentation for a few API methods
- Updated `getPlayerQueueStats` and `getMatchIdsByQueue` queueId params to be Enums.Queue instead of number

>__Reason__: these changes are a part of the library refactoring and removing clutter, and making things consistent. These will be the last set of breaking changes.


View release on [npm](https://www.npmjs.com/package/pe-paladins.js/v/3.2.0)