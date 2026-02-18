---
aside: true
---
# Changelog

## 2.208, 2.2081

- `binaryVersion`: `46` (2.208), `47` (2.2081)
- new getGJScores20 param: [`stat`](/endpoints/users/getGJScores20) which orders the requested leaderboard by a statistic
- new updateGJAccSettings20 params: [`instagram`, `tiktok`, `discord`, `custom`](/endpoints/accounts/updateGJAccSettings20) and the corresponding user keys [58-61](/resources/server/user)
- new getGJGauntlets21 param: [`vkey`](/endpoints/levels/getGJGauntlets21)
- new gauntlets ([55-60](/resources/server/gauntlet))
- new song type `2`: CHOMPO
- new game variables ([176, 177, 179-181](/resources/client/gamesave/gv))
- the `Cookie: gd=1` header is not sent in requests anymore, it was probably replaced by the new [`dvs`](/endpoints/generic#common-parameters) parameter that's common for almost all endpoints