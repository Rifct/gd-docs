# deleteGJFriendRequests20.php

> This endpoint is used to delete friend requests that the player may have recieved from other players

## Parameters

| Parameter         | Explanation                                                                         | Required |
| ----------------- | ----------------------------------------------------------------------------------- | -------- |
| `accountID`       | The player's account ID                                                             | Yes      |
| `gjp2`            | The player's [GJP2](/topics/gjp.md)                                                 | Yes      |
| `targetAccountID` | The accountID of the player you are declining the friend request                    | Yes      |
| `secret`          | [Common Secret](/reference/secrets): `Wmfd2893gb7`                                  | Yes      |
| `gameVersion`     | The Game Version the player is playing on. 22 for 2.2                               |          |
| `binaryVersion`   | The current build the player playing on. 42 for 2.206                               |          |
| `gdw`             | If the player is using Geometry Dash World                                          |          |
| `accounts`        | Account IDs seperated by `,` for users the player is declining friend requests from |          |
| `isSender`        | If the player is the sender of this friend request                                  |          |

**Note:** `isSender` must be set to `1` if you are deleting a request you have sent

## Response

**Successful Request**

```py
1
```

**Failed Request**

```py
-1
```
