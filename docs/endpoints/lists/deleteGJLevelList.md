# deleteGJLevelList.php

Deletes a list from the server.

## Parameters

| Parameter       | Explanation                                       | Required |
| --------------- | ------------------------------------------------- | -------- |
| `accountID`     | The list author's account ID                      | Yes      |
| `udid`          | The list author's UDID                            | Yes      |
| `uuid`          | The list author's UUID                            | Yes      |
| `gjp2`          | The level author's [GJP2](/topics/gjp.md)         | Yes      |
| `listID`        | The ID of the level being deleted                 | Yes      |
| `secret`        | [Level Secret](/reference/secrets): `Wmfv2898gc9` | Yes      |
| `gameVersion`   | 22                                                |          |
| `binaryVersion` | 42                                                |          |

## Response

Returns 1 if deleted, -1 if it failed or the list does not exist.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting the list with ID 414808
headers = {
    "User-Agent": ""
}

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
        "listID": 414808,
        "secret": "Wmfv2898gc9"
}

req = requests.post("http://www.boomlings.com/database/deleteGJLevelList.php", data=data, headers=headers)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
