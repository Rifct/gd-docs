# getTop1000.php

The purpose of this endpoint is to gather the top 1000 star grinders to be used on the star leaderboards.

> [!IMPORTANT]
> This endpoint uses the GET method.

## Parameters

This endpoint does not require any parameters

## Example

```py
import requests

req = requests.get("https://www.boomlings.com/database/accounts/getTop1000.php")
print(req.text)

```

## Response Structure

This endpoint returns an [HTML document containing a table](https://www.boomlings.com/database/accounts/getTop1000.php) with the following columns:

`Rank, AccountID, Username, Stars, Diamonds, Demons, UserCoins, Coins`.
