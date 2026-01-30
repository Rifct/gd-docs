# uploadGJComment21.php

Uploads a comment to a user level.

## Parameters

| Parameter                       | Explanation                                                                           | Required |
| ------------------------------- | ------------------------------------------------------------------------------------- | -------- |
| `accountID`                     | The commenter's account ID                                                            | Yes      |
| `gjp2`                          | The commenter's [GJP2](/topics/gjp.md)                                                | Yes      |
| `userName`                      | The commenter's username                                                              | Yes      |
| `comment`                       | The comment, converted to [URL-safe base64](/topics/encryption/base64)                | Yes      |
| `secret`                        | [Common Secret](/reference/secrets): `Wmfd2893gb7`                                    | Yes      |
| `levelID`                       | The ID of the level to comment on. If commenting on a list, the ID should be negative | Yes      |
| `percent`                       | The level percentage shown on the comment                                             | Yes      |
| [`chk`](/topics/encryption/chk) | `userName` + `comment` + `levelID` + `percent`                                        | Yes      |
| `gameVersion`                   | 22                                                                                    |          |
| `binaryVersion`                 | 42                                                                                    |          |
| `gdw`                           | 0                                                                                     |          |

## Response

Returns the ID of the posted comment, or `-1` if the request was rejected.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is posting the comment "Hello from the GDDocs!" to 62687277

chk = generate_chk(key="29481", values=["devexit", "SGVsbG8gZnJvbSB0aGUgR0REb2NzIQ==", 62687277, 69], salt="0xPT6iUrtws0J")
# These values can be found in the XOR and CHK pages

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp": "********", # This would be DevExit's password encoded with GJP encryption
    "userName": "devexit",
    "comment": "SGVsbG8gZnJvbSB0aGUgR0REb2NzIQ==", # "Hello from the GDDocs!"
    "levelID": 62687277,
    "percent": 69,
    "chk": chk,
    "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/uploadGJComment21.php", data=data)
print(req.text)
```

**Response**
```py
31444784
```

<!-- tabs:end -->
