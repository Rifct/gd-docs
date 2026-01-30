# uploadMPComment.php

> Note: everything here is based on leaks, unused code and educated guesses. As such, everything you see here is subject to change, and most likely **will** be changed!

Uploads a comment (chat message?) to a multiplayer lobby. This endpoint is hosted on `geometrydash.com`, not `boomlings.com`.

## Parameters

| Parameter                       | Explanation                                              | Required |
| ------------------------------- | -------------------------------------------------------- | -------- |
| `accountID`                     | The commenter's account ID                               | Yes      |
| `gjp2`                          | The commenter's [GJP2](/topics/gjp.md)                   | Yes      |
| `extra`                         | 10 random characters from `[A-Za-z0-9]`                  | Yes      |
| `comment`                       | The comment, with some delimiter characters stripped out | Yes      |
| `secret`                        | [Account Secret](/reference/secrets): `Wmfv3899gc9`      | Yes      |
| `gameID`                        | The ID of the multiplayer lobby                          | Yes      |
| [`chk`](/topics/encryption/chk) | `accountID` + `comment` + `gameID` + `extra`             | Yes      |
| `gameVersion`                   | 22                                                       |          |
| `binaryVersion`                 | 42                                                       |          |
| `gdw`                           | 0                                                        |          |

## Response

Currently unknown, but most likely the comment ID if it was posted and -1 if the request was rejected.
