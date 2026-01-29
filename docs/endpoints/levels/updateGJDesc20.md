# updateGJDesc20.php

Updates the description of a level

## Parameters


| Parameter       | Explanation                                                                                 | Optional |
| :-------------- | :------------------------------------------------------------------------------------------ | -------- |
| `accountID`     | The account ID of the level's author                                                        | `False`  |
| `gjp2`          | The [GJP2](/topics/gjp.md) of the level's author                                            | `False`  |
| `levelID`       | The ID of the level                                                                         | `False`  |
| `levelDesc`     | The new description of the level, converted to [URL-safe base64](/topics/encryption/base64) | `False`  |
| `secret`        | Wmfd2893gb7                                                                                 | `False`  |
| `gameVersion`   | 22                                                                                          | `True`   |
| `binaryVersion` | 42                                                                                          | `True`   |
| `gdw`           | 0                                                                                           | `True`   |

## Response

1 if successful, -1 if not

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "accountID": 18178627, # shikoshib's account ID
    "gjp": "********", # This would be shikoshib's password encoded with GJP encryption
    "levelID": 85555028,
    "levelDesc": "V2l0aCBsb3ZlIGZyb20gR0QgRG9jcyE=", # With love from GD Docs!
    "secret": "Wmfd2893gb7",
}

r = requests.post('http://boomlings.com/database/updateGJDesc20.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
