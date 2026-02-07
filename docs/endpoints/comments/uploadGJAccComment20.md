# uploadGJAccComment20.php

Posts an account comment

## Parameters

| Parameter       | Explanation                                                                    | Required |
| --------------- | ------------------------------------------------------------------------------ | -------- |
| `accountID`     | Account ID of the user posting the comment                                     | Yes      |
| `gjp2`          | The [GJP2](/topics/gjp.md) of the user posting the comment                     | Yes      |
| `comment`       | The comment's text, converted to [URL-safe base64](/topics/encryption/base64). | Yes      |
| `secret`        | [Common Secret](/reference/secrets.md): `Wmfd2893gb7`                          | Yes      |
| `gameVersion`   | 22                                                                             |          |
| `binaryVersion` | 48                                                                             |          |
| `gdw`           | 0                                                                              |          |
| `cType`         | The comment type, 0 for level, 1 for user                                      |          |
| `chk`           | [See Here](/topics/encryption/chk.md#comment)                             |          |

## Response

Returns account comment ID if the comment was successfully posted, but a 500 error code if the comment is either left out or could not be posted

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp2": "********", # This would be DevExit's password encoded with GJP2 encryption
    "comment": base64.b64encode(b"This comment was uploaded for the GD Docs!").decode(),
    "secret": "Wmfd2893gb7",
}

data["chk"] = generate_chk(key="29481", values=["devexit", "SGVsbG8gZnJvbSB0aGUgR0REb2NzIQ==", 0, 0, 1], salt="xPT6iUrtws0J")

r = requests.post('https://www.boomlings.com/database/uploadGJAccComment20.php', data=data)
print(req.text)
```

**Response**
```py
1772719
```

<!-- tabs:end -->
