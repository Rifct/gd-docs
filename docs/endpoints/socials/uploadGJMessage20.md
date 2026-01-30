# uploadGJMessage20.php

Sends a message to a user

## Parameters

| Parameter       | Explanation                                                                           | Required |
| --------------- | ------------------------------------------------------------------------------------- | -------- |
| `accountID`     | Account ID of the user sending the message                                            | Yes      |
| `gjp2`          | The [GJP2](/topics/gjp.md) of the user sending the message                            | Yes      |
| `toAccountID`   | Account ID of the user retrieving the message                                         | Yes      |
| `subject`       | The subject of the message, converted to [URL-safe base64](/topics/encryption/base64) | Yes      |
| `body`          | The body of the message, converted to [URL-safe base64](/topics/encryption/base64)    | Yes      |
| `secret`        | [Common Secret](/reference/secrets): `Wmfd2893gb7`                                    | Yes      |
| `gameVersion`   | 22                                                                                    |          |
| `binaryVersion` | 42                                                                                    |          |
| `gdw`           | 0                                                                                     |          |

## Response

1 if the message was sent, -1 if a problem occurred, or if the receiver has messages disabled

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "gameVersion": 21,
    "binaryVersion": 35,
    "gdw": 0,
	"accountID": 173831, # This is DevExit's account ID
	"gjp": "*******", # This would be DevExit's password encoded with GJP encryption
    "toAccountID": 173831, # Yes! You can send messages to yourself
    "subject": base64.b64encode(b"You're dumb lol").decode(),
    "body": base64.b64encode(b"Mhm yep you're p dumb lmao").decode(),
    "secret": "Wmfd2893gb7",
}

r = requests.post('http://boomlings.com/database/uploadGJMessage20.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
