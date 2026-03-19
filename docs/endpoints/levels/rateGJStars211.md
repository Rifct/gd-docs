# rateGJStars211.php

Sends a star suggestion for a level

## Parameters

| Parameter       | Explanation                                          | Required |
| --------------- | ---------------------------------------------------- | -------- |
| `secret`        | [Common Secret](/reference/secrets.md): `Wmfd2893gb7`   | Yes      |
| `levelID`       | The ID of the level receiving the star suggestion    | Yes      |
| `stars`         | The amount of stars being suggested                  | Yes      |
| `rs`            | 10 randomly generated characters from `[A-Za-z0-9]`  | Yes      |
| `accountID`     | Your account ID                                      | Yes      |
| `gjp2`          | Your password, encrypted with [GJP2](/topics/gjp.md) | Yes      |
| `udid`          | Your UDID                                            | Yes      |
| `uuid`          | Your player ID (different from account ID)           | Yes      |
| `chk`           | [See here](/topics/encryption/chk.md#rate)           | Yes      |
| `gameVersion`   | 22                                                   |          |
| `binaryVersion` | 42                                                   |          |
| `gdw`           | 0                                                    |          |

## Response

Always 1 if the parameters `secret`, `levelID` and `stars` are specified. `chk`, `udid`, `uuid`, `rs`, `accountID` and `gjp2` are technically not required but the star rating will not go through if these parameters aren't specified

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7",
    "levelID": 15254724,
    "stars": 3
}

req = requests.post('https://www.boomlings.com/database/rateGJStars211.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
