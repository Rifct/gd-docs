# requestUserAccess.php

Requests moderator access.

## Parameters

| Parameter       | Explanation                                                  | Required |
| --------------- | ------------------------------------------------------------ | -------- |
| `accountID`     | The accountID of the user requesting mod access              | Yes      |
| `gjp2`          | The [GJP2](/topics/gjp.md) of the user requesting mod access | Yes      |
| `secret`        | [Common Secret](/reference/secrets): `Wmfd2893gb7`           | Yes      |
| `gameVersion`   | 22                                                           |          |
| `binaryVersion` | 42                                                           |          |
| `gdw`           | 0                                                            |          |

## Response

1 if granted Moderator, 2 if granted Elder Moderator, 99 if granted Leaderboard Moderator, and -1 if not granted

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
	data = {
    'accountID': 173831, # DevExit's account ID
    'gjp': "********", # This would be DevExit's password encoded with GJP encryption
    "secret": "Wmfd2893gb7"
}

req = requests.post('http://boomlings.com/database/requestUserAccess.php', data=data)
print(req.text)
```

**Response**
```py
-1
```

<!-- tabs:end -->
