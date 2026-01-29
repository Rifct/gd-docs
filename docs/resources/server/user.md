# Server User Resource

## Users

Each player of Geometry Dash has their own profile which includes various different elements such as in-game stats, icons and even socials.

A typical user server response is structured with a `key:value:key:value` pairing and is then split with a `|`

<!-- tabs:start -->

#### **User Example Response**
```md
1:Rifct:2:81183402:13:132:17:1921:10:17:11:12:51:105:3:23843:52:1607:46:36431:4:502:8:66:18:0:19:0:50:0:20:Rifct:21:334:22:129:23:67:24:148:25:62:26:40:28:1:43:38:48:1:53:25:54:1:30:6481:16:8927557:31::44:Rifct:45:RifctGD:59:RifctGD:60::58:Rifct:61:balls:49:0:55:336,34,15,12,9,16,5,5,2,1,51,11:56:90,95,100,1010,1424,346,210,66:57:4,3,11,101,92,25,0:29:1
```
<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component.  
A list of all known keys can be found in the table below

| Key | Name/Value          | Type        | Description                                                                                                                                                                                                 |
| --- | ------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | userName            | **String**  | The name of player                                                                                                                                                                                          |
| 2   | userID              | **Integer** | The ID of player                                                                                                                                                                                            |
| 3   | stars               | **Integer** | The count of stars player have                                                                                                                                                                              |
| 4   | demons              | **Integer** | The count of demons player have                                                                                                                                                                             |
| 6   | ranking             | **Integer** | the global leaderboard position of the player                                                                                                                                                               |
| 7   | accountHighlight    | **Integer** | The accountID of the player. Is used for highlighting the player on the leaderboards                                                                                                                        |
| 8   | creatorpoints       | **Integer** | The count of creatorpoints player have                                                                                                                                                                      |
| 9   | iconID              | **Integer** | maybe... [link](https://github.com/gd-programming/gddocs/pull/16/files#r417926661)                                                                                                                          |
| 10  | color               | **Integer** | First color of the player use                                                                                                                                                                               |
| 11  | color2              | **Integer** | Second color of the player use                                                                                                                                                                              |
| 12  | shipID              | **Integer** | Deprecated key; the player's ship ID in 1.4 and 1.5. Was 0 if a cube was selected instead of a ship                                                                                                         |
| 13  | secretCoins         | **Integer** | The count of coins player have                                                                                                                                                                              |
| 14  | iconType            | **Integer** | The iconType of the player use                                                                                                                                                                              |
| 15  | special             | **Integer** | The special number of the player use                                                                                                                                                                        |
| 16  | accountID           | **Integer** | The accountid of this player                                                                                                                                                                                |
| 17  | usercoins           | **Integer** | The count of usercoins player have                                                                                                                                                                          |
| 18  | messageState        | **Integer** | 0: All, 1: Only friends, 2: None                                                                                                                                                                            |
| 19  | friendsState        | **Integer** | 0: All, 1: None                                                                                                                                                                                             |
| 20  | youTube             | **String**  | The youtubeurl of player                                                                                                                                                                                    |
| 21  | accIcon             | **Integer** | The icon number of the player use                                                                                                                                                                           |
| 22  | accShip             | **Integer** | The ship number of the player use                                                                                                                                                                           |
| 23  | accBall             | **Integer** | The ball number of the player use                                                                                                                                                                           |
| 24  | accBird             | **Integer** | The bird number of the player use                                                                                                                                                                           |
| 25  | accDart(wave)       | **Integer** | The dart(wave) number of the player use                                                                                                                                                                     |
| 26  | accRobot            | **Integer** | The robot number of the player use                                                                                                                                                                          |
| 27  | accStreak           | **Integer** | The streak of the user                                                                                                                                                                                      |
| 28  | accGlow             | **Integer** | The glow number of the player use                                                                                                                                                                           |
| 29  | isRegistered        | **Integer** | if an account is registered or not                                                                                                                                                                          |
| 30  | globalRank          | **Integer** | The global rank of this player                                                                                                                                                                              |
| 31  | friendstate         | **Integer** | 0: None, 1: already is friend, 3: send request to target, but target haven't accept, 4: target send request, but haven't accept                                                                             |
| 38  | messages            | **Integer** | How many new messages the user has (shown in-game as a notification)                                                                                                                                        | <!-- there are a bunch of keys before here but they are exclusive to friend requests so i didnt add them here -->
| 39  | friendRequests      | **Integer** | How many new friend requests the user has (shown in-game as a notificaiton)                                                                                                                                 |
| 40  | newFriends          | **Integer** | How many new Friends the user has (shown in-game as a notificaiton)                                                                                                                                         |
| 41  | NewFriendRequest    | **Bool**    | appears on userlist endpoint to show if the friend request is new                                                                                                                                           |
| 42  | age                 | **String**  | the time since you submitted a levelScore                                                                                                                                                                   |
| 43  | accSpider           | **Integer** | The spider number of the player use                                                                                                                                                                         |
| 44  | twitter             | **String**  | The twitter of player                                                                                                                                                                                       |
| 45  | twitch              | **String**  | The twitch of player                                                                                                                                                                                        |
| 46  | diamonds            | **Integer** | The count of diamonds player have                                                                                                                                                                           |
| 48  | accExplosion        | **Integer** | The explosion number of the player use                                                                                                                                                                      |
| 49  | modlevel            | **Integer** | 0: None, 1: Normal Mod(yellow), 2: Elder Mod(orange)                                                                                                                                                        |
| 50  | commentHistoryState | **Integer** | 0: All, 1: Only friends, 2: None                                                                                                                                                                            |
| 51  | color3              | **Integer** | The ID of the player's glow color                                                                                                                                                                           |
| 52  | moons               | **Integer** | The amount of moons the player has                                                                                                                                                                          |
| 53  | accSwing            | **Integer** | The player's swing                                                                                                                                                                                          |
| 54  | accJetpack          | **Integer** | The player's jetpack                                                                                                                                                                                        |
| 55  | demons              | **String**  | Breakdown of the player's demons, in the format `{easy},{medium},{hard}.{insane},{extreme},{easyPlatformer},{mediumPlatformer},{hardPlatformer},{insanePlatformer},{extremePlatformer},{weekly},{gauntlet}` |
| 56  | classicLevels       | **String**  | Breakdown of the player's classic mode non-demons, in the format `{auto},{easy},{normal},{hard},{harder},{insane},{daily},{gauntlet}`                                                                       |
| 57  | platformerLevels    | **String**  | Breakdown of the player's platformer mode non-demons, in the format `{auto},{easy},{normal},{hard},{harder},{insane}`                                                                                       |
| 58  | discord             | **String**  | The player's Discord handle                                                                                                                                                                                 |
| 59  | instagram           | **String**  | The player's Instagram username                                                                                                                                                                             |
| 60  | tiktok              | **String**  | The player's TikTok handle                                                                                                                                                                                  |
| 61  | custom              | **String**  | The player's custom one-time authentication token                                                                                                                                                           |

### Trivia

- Setting Key `29` to `0` stops most aspects of your profile from loading

- Key `27` is impossible to recieve from the server as there is no way for the server to know what the player's `streak` is

