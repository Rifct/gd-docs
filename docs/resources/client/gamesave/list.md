# Client List Resource

## List

A level list is a list of levels - playable objects in Geometry Dash, namely coming with data that explains on what this list is and which levels it contains. It is stored in [XML](https://en.wikipedia.org/wiki/XML) format, and each level entry is a dictionary, containing key/value pairs denoting the list's properties.

### Level Data

**Level Structure**

| Key | Name/Value | Type | Description |
| --- | ---------- | ---- | ----------- |
| k1 | List ID | **integer** | the id of the list |
| k2 | List Name | **string** | the name of the list |
| k3 | Description | **string** | the list description, encoded in [base64](https://en.wikipedia.org/wiki/Base64) |
| k5 | Creator | **string** | the name of the level creator |
| k7 | list difficulty | **integer** | the difficulty the list has |
| k11 | Downloads | **integer** | the amount of times the list's been downloaded |
| k15 | Uploaded | **bool** | whether the list is uploaded to the server or not |
| k16 | List Version | **integer** | the version of the list |
| k21 | List Type | **Integer** | The List Type (2 = Local, 3 = Saved, 4 = Online) |
| k22 | Like Rating | **integer** | the level's like rating (`likes - dislikes`) |
| k25 | isDemon | **Bool** | if the level is demon or not |
| k26 | Stars | **integer** | the stars the level is worth |
| k27 | Featured | **Bool** | Whether the list is featured or not |
| k42 | Original | **integer** | The ID the of the original list (if the list was copied) |
| k46 | List Revision | **integer** | the revision of the list |
| k60 | AccountID | **integer** | the Creators AccountID |
| k79 | Unlisted | **bool** | Whether the list can only be found by searching the ID |
| k82 | Favourited | **Bool** | if you put the list in your favourites |
| k83 | levelOrder | **integer** | ordering for lists |
| k96 | Level IDs | **string** | Comma-separated list of all IDs in the list in order |
| k97 | Levels | **Dictionary** | Dictionary of all the [levels](/resources/client/level.md) in the list |
| k98 | Upload Date | **Integer** | UNIX timestamp of the level's upload date (in seconds) |
| k99 | Update Date | **Integer** | UNIX timestamp of the level's update date (in seconds) |
| k113 | Diamond Reward | **Integer** | Amount of diamonds awarded upon beating the required number of levels |
| k114 | Required Levels | **Integer** | How many levels have to be beaten to claim the award |

**Current Unknown Values**

| Key | Type | Info |
| --- | ---- | ---- |
| k94 | **Bool** | |
| k100 | **Bool** | |
