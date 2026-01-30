# joinMPLobby.php

> Note: everything here is based on leaks, unused code and educated guesses. As such, everything you see here is subject to change, and most likely **will** be changed!

Joins a multiplayer lobby. This endpoint is hosted on `geometrydash.com`, not `boomlings.com`.

## Parameters

| Parameter       | Explanation                                                              | Required |
| --------------- | ------------------------------------------------------------------------ | -------- |
| `accountID`     | The player's account ID                                                  | Yes      |
| `gjp2`          | The player's [GJP2](/topics/gjp.md)                                      | Yes      |
| `secret`        | [Account Secret](/reference/secrets): `Wmfv3899gc9`                      | Yes      |
| `gameID`        | The ID of the multiplayer lobby                                          | Yes      |
| `lastCommentID` | Your last multiplayer comment ID. It's unknown what the initial value is | Yes      |
| `gameVersion`   | 22                                                                       |          |
| `binaryVersion` | 42                                                                       |          |
| `gdw`           | 0                                                                        |          |

## Response

Currently unknown, but most likely some info about the lobby if successful and -1 if the request was rejected.
