# readGJFriendRequest20.php

> This endpoint is used to read friend requests recieved from other players

## Parameters

| Parameter       | Explanation                                              | Required |
| --------------- | -------------------------------------------------------- | -------- |
| `accountID`     | The player's account ID                                  | Yes      |
| `gjp2`          | The player's [GJP2](/topics/gjp.md)                      | Yes      |
| `requestID`     | The ID for the friend request recieved                   | Yes      |
| `secret`        | [Common Secret]((/reference/secrets)): `Wmfd2893gb7`     | Yes      |
| `gameVersion`   | The Game Version the player is playing on. 22 for 2.2    |          |
| `binaryVersion` | The current build the player is playing on. 42 for 2.206 |          |
| `gdw`           | If the player is using Geometry Dash World               |          |

## Response

**Successful Request**

```py
1
```

**Failed Request**

```py
-1
```
