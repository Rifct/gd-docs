# uploadFriendRequest20.php

> This endpont is used to send a friend request to other players

## Parameters

| Parameter       | Explanation                                                        | Required |
| --------------- | ------------------------------------------------------------------ | -------- |
| `accountID`     | The player's account ID                                            | Yes      |
| `toAccountID`   | The account which the player is trying to send a friend request to | Yes      |
| `gjp2`          | The player's [GJP2](/topics/gjp.md)                                | Yes      |
| `secret`        | [Common Secret]((/reference/secrets)): `Wmfd2893gb7`               | Yes      |
| `comment`       | The message sent along with the friend request                     | Yes      |
| `gameVersion`   | The Game Version the player is playing on. 22 for 2.2              |          |
| `binaryVersion` | The current build the player playing on. 42 for 2.206              |          |
| `gdw`           | If the player is using Geometry Dash World                         |          |

## Response

**Successful Request**

```py
1
```

**Failed Request**

```py
-1
```
