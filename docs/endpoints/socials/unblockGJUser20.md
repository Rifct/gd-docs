# unblockGJUser20.php

Unblocks a user.

## Parameters

| Parameter         | Explanation                                        | Required |
| ----------------- | -------------------------------------------------- | -------- |
| `accountID`       | The unblocking person's account ID                 | Yes      |
| `gjp2`            | The unblocking person's [GJP2](/topics/gjp.md)     | Yes      |
| `targetAccountID` | The account ID of the person getting unblocked     | Yes      |
| `secret`          | [Common Secret](/reference/secrets.md): `Wmfd2893gb7` | Yes      |
| `gameVersion`     | 22                                                 |          |
| `binaryVersion`   | 48                                                 |          |
| `gdw`             | 0                                                  |          |

## Response

Always returns 1, regardless of if the target account exists or not.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is unblocking RobTop

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
        "targetAccountID": 71, # Robtop's account ID
        "secret": "Wmfd2893gb7"
}

req = requests.post("https://www.boomlings.com/database/unblockGJUser20.php", data=data)
print(req.text)

```

**Response**
```py
1
```

<!-- tabs:end -->
