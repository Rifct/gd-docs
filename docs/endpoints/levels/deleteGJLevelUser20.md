# deleteGJLevelUser20.php

Deletes a level from the server.

## Parameters

| Parameter   | Explanation                                       | Required |
| ----------- | ------------------------------------------------- | -------- |
| `accountID` | The level author's account ID                     | Yes      |
| `gjp`       | The level author's [GJP](/topics/gjp.md)          | Yes      |
| `levelID`   | The ID of the level being deleted                 | Yes      |
| `secret`    | [Level Secret](/reference/secrets): `Wmfv2898gc9` | Yes      |

## Response

Returns 1 if deleted, -1 if it failed or the level does not exist.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting the level with ID 62689548

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp": "********", # This would be DevExit's password encoded with GJP encryption
        "levelID": 62689548,
        "secret": "Wmfv2898gc9"
}

req = requests.post("http://boomlings.com/database/deleteGJLevelUser20.php", data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
