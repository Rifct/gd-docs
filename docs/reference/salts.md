# Salts

> Salts are small strings of random characters appended onto the end of strings. In the context of Geometry Dash, salts are used within request validation to make it a bit more difficult for a 3rd parties to interact with the private API

## List of known Salts

| Salt           | Usage                                    |
| -------------- | ---------------------------------------- |
| `xI25fpAapCQg` | Level Upload Seed                        |
| `xPT6iUrtws0J` | Comment Chk                              |
| `ysg6pUrtjn0J` | Like and Rate Chk                        |
| `xI35fsAapCRg` | Update Profile Chk                       |
| `yPg6pUrtWn0J` | Level Leaderboard Chk                    |
| `ask2fpcaqCQ2` | Vault of Secrets & Chamber of Time Codes |
| `oC36fpYaPtdg` | getGJChallenges hash                     |
| `pC26fpYaQCtg` | getGJRewards hash                        |
| `mI29fmAnxgTs` | [GJP2](/topics/gjp.md)                   |

## How Salts are used

- Salts are appended onto the end of a string of data. What happens to the salted string depends on what its used for.

Below is an example of a salt being implemented within **Vault Codes**

```js
    function generate_vault_code(str /*brainpower*/)
    {
    const SALT = "ask2fpcaqCQ2";
    const URL_SAFE  = true;

    let raw_str = str + SALT; // "brainpowerask2fpcaqCQ2"
    let xor_str = xor_cycle_cipher(raw_str, "19283");

    return base64_encode(xor_str, URL_SAFE).toString();
    }
```

Please refer to the Encryption Section for more information about the implementation
