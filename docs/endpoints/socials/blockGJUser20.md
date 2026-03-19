# blockGJUser20.php

Blocks a user.

## Parameters

| Parameter         | Explanation                                        | Required |
| ----------------- | -------------------------------------------------- | -------- |
| `accountID`       | The blocking person's account ID                   | Yes      |
| `gjp2`            | The blocking person's [GJP2](/topics/gjp.md)       | Yes      |
| `targetAccountID` | The account ID of the person being blocked         | Yes      |
| `secret`          | [Common Secret](/reference/secrets.md): `Wmfd2893gb7` | Yes      |
| `gameVersion`     | 22                                                 |          |
| `binaryVersion`   | 42                                                 |          |
| `gdw`             | 0                                                  |          |

## Response

Always returns 1, regardless of if the target account exists or not.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is blocking RobTop

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
        "targetAccountID": 71, # Robtop's account ID
        "secret": "Wmfd2893gb7"
}

req = requests.post("https://www.boomlings.com/database/blockGJUser20.php", data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
