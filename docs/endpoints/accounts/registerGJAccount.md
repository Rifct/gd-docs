# registerGJAccount.php

> This endpoint is used to register an account

**Note:** This page is under the `database/accounts` directory.

## Parameters

| Parameter | Explanation | Optional |
| --- | --- | --- |
| `userName` | The username of the account to create | `False` |
| `password` | The password of the account to create | `False` |
| `email` | The email of the account to create | `False` |
| `secret` | Account Secret: `Wmfv3899gc9` | `False` |

## Response

**Successful Request**

```
1
```

**Failed Request**

| Error Code | Meaning |
| --- | --- |
| -1 | Generic Error |
| -2 | Username taken |
| -3 | Email taken |
| -4 | Username is longer than 20 characters |
| -5 | Invalid Password |
| -6 | Invalid Email |
| -8 | Password to short |
| -9 | Username to short |
