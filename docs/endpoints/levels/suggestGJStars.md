# suggestGJStars20.php

Endpoint used by moderators to send levels to RobTop

## Parameters

| Parameter       | Explanation                                                               | Required |
| --------------- | ------------------------------------------------------------------------- | -------- |
| `accountID`     | accountID of the user                                                     | Yes      |
| `gjp`           | The [GJP](/topics/gjp.md) of the user                                     | Yes      |
| `levelID`       | The ID of the level                                                       | Yes      |
| `stars`         | How many stars that are requested                                         | Yes      |
| `secret`        | [Moderator Secret](/reference/secrets): `Wmfp3879gc3`                     | Yes      |
| `gameVersion`   | the game version                                                          | Yes      |
| `binaryVersion` | the binary version                                                        | Yes      |
| `feature`       | 0 for star rate, 1 for feature, 2 for epic, 3 for legendary, 4 for mythic | Yes      |
| `gdw`           | 0                                                                         | Yes      |

## Response

-2 or 1

## example

<!--tabs:start -->

## Python
```py
import requests

data = {
        "gameVersion": 21,
        "binaryVersion":35
        "accountID": 71, # a moderators accountID
        "gjp": "********", # This would be the mods password encoded with GJP encryption
        "levelID": 128,
        "stars": 3,
        "feature": 0,
        "gdw": 0,
        "secret": "Wmfp3879gc3"
}

req = requests.post("http://boomlings.com/database/suggestGJStars20.php", data=data)
print(req.text)

```

**Response**
```py
1
```
