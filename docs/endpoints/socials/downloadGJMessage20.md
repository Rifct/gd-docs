# downloadGJMessage20.php

Download a message.

## Parameters

| Parameter       | Explanation                                        | Required |
| --------------- | -------------------------------------------------- | -------- |
| `accountID`     | The person's account ID                            | Yes      |
| `gjp2`          | The person's [GJP2](/topics/gjp.md)                | Yes      |
| `messageID`     | The ID of the message to read                      | Yes      |
| `secret`        | [Common Secret](/reference/secrets): `Wmfd2893gb7` | Yes      |
| `gameVersion`   | 22                                                 |          |
| `binaryVersion` | 42                                                 |          |
| `gdw`           | 0                                                  |          |

## Response

Returns a [message object](/resources/server/message.md) separated by colons `:`

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code we are getting the message info of the message with ID 54109536

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp": "********", # This would be DevExit's password encoded with GJP encryption
        "messageID": 54109536,
        "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/downloadGJMessage20.php", data=data)
print(req.text)
```

**Response**
```py
6:DevExit:3:3935672:2:173831:1:54109536:4:WW91J3JlIGR1bWIgbG9s:8:1:9:0:5:TWhtIHllcCB5b3UncmUgcCBkdW1iIGxtYW8=:7:19 minutes
```

<!-- tabs:end -->
