# getGJSongInfo.php

Gets info about a newgrounds song.

## Parameters

<!-- TODO: fill out explanations -->
| Parameter       | Explanation                                              | Required |
| --------------- | -------------------------------------------------------- | -------- |
| `songID`        | The newgrounds ID of the song you want information about | Yes      |
| `secret`        | [Common Secret](/reference/secrets): `Wmfd2893gb7`       | Yes      |
| `accountID`     |                                                          |          |
| `binaryVersion` | 45                                                       |          |
| `gameVersion`   | 22                                                       |          |
| `gjp2`          |                                                          |          |
| `secret`        |                                                          |          |
| `udid`          |                                                          |          |
| `uuid`          |                                                          |          |


## Response

A [song object](/resources/server/song.md) with `~|~` as the delimiter

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7",
    "songID": 803223
}

req = requests.post("http://boomlings.com/database/getGJSongInfo.php", data=data)
print(req.text)
```

**Response**
```py
1~|~803223~|~2~|~Xtrullor - Arcana~|~3~|~2159~|~4~|~Xtrullor~|~5~|~8.81~|~6~|~~|~10~|~https%3A%2F%2Faudio.ngfiles.com%2F803000%2F803223_Xtrullor---Arcana.mp3%3Ff1524940372~|~7~|~UCejLri1RVC7kj8ZVNX2a53g
```

<!-- tabs:end -->