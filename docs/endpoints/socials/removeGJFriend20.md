# removeGJFriend20.php

Removes someone from a user's friend list

## Parameters

| Parameter         | Explanation                                               | Required |
| ----------------- | --------------------------------------------------------- | -------- |
| `accountID`       | The accountID of the user removing the friend             | Yes      |
| `gjp`             | The [GJP](/topics/gjp.md) of the user removing the friend | Yes      |
| `targetAccountID` | The accountID of the user being removed                   | Yes      |
| `secret`          | [Common Secret](/reference/secrets): `Wmfd2893gb7`        | Yes      |
| `gameVersion`     | 21                                                        |          |
| `binaryVersion`   | 35                                                        |          |
| `gdw`             | 0                                                         |          |

## Response



## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    'accountID': 173831, # DevExit's account ID
    'gjp': "********", # This would be DevExit's password encoded with GJP encryption
    'targetAccountID': 5317656,
    'secret': 'Wmfd2893gb7'
}

r = requests.post('http://boomlings.com/database/removeGJFriend20.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->