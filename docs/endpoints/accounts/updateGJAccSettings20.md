# updateGJAccSettings20.php

Updates a user's account settings

## Parameters

| Parameter   | Explanation                                                                                               | Required |
| ----------- | --------------------------------------------------------------------------------------------------------- | -------- |
| `accountID` | The accountID of the user whose account is being updated                                                  | Yes      |
| `gjp2`      | The [GJP2](/topics/gjp.md) of the user whose account is being updated                                     | Yes      |
| `secret`    | [Account Secret](/reference/secrets): `Wmfv3899gc9`                                                       | Yes      |
| `mS`        | Who the user allows messages from: 0 for anyone, 1 for just friends, and 2 for no one                     |          |
| `frS`       | Who the user allows friend requests from: 0 for anyone, and 1 for no one                                  |          |
| `cS`        | Who the user allows to view their comments: 0 for anyone, 1 for just friends, and 2 for only themselves   |          |
| `yt`        | The end of the link to the user's youtube channel, after the `/channel/`. e.g. `UCZoN2WLAooS6uhREa9Cgpwg` |          |
| `twitter`   | The user's twitter handle                                                                                 |          |
| `twitch`    | The user's twitch username                                                                                |          |
| `instagram` | The user's Instagram username                                                                             |          |
| `tiktok`    | The user's TikTok handle                                                                                  |          |
| `discord`   | The user's Discord handle                                                                                 |          |
| `custom`    | The user's custom one-time authentication token                                                           |          |

## Response

1 if the required parameters are passed, regardless of whether anything is being updated, -1 otherwise.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp": "********", # This would be DevExit's password encoded with GJP encryption
    "secret": "Wmfv3899gc9",
    "mS": 0,
    "frS": 0,
    "cS": 0,
    "yt": "UCZoN2WLAooS6uhREa9Cgpwg",
    "twitter": "DevExit",
    "twitch": "devexit",
    "instagram": "devexit",
    "tiktok": "",
    "discord": "devexit",
    "custom": "Custom123"
}

req = requests.post('https://www.boomlings.com/database/updateGJAccSettings20.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
