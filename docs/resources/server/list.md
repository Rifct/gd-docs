# Server List Resource

## List Object
A level list is a list of levels - playable objects in Geometry Dash.

A typical list server response is structured with a `key:value:key:value` pairing and is then split with a `|`
#### **List Example Response**
```md
1:4788:2:Progression Level 1:3:R0QgQmVnaW5uZXJzIExpc3QgbGV2ZWwgMSEgR29vZCBsaXN0IG9mIGxldmVscyB0byBpbnRyb2R1Y2UgZnJpZW5kcyB0byB0aGUgZ2FtZSE=:5:5:49:6061424:50:tricipital:10:1451689:7:1:14:61715:19:1:51:90752263,59760047,88982532,78743788,88022936,89413344,90994090,74542823,74612523,55037478:55:20:56:5:28:1703050435:29:1703402400#15479163:tricipital:6061424#9999:0:10#f5da5823d94bbe7208dd83a30ff427c7d88fdb99
```

Each `key` is tied to a component within the client and the `value` sets data for the specific component.
A list of all known keys can be found in the table below

#### List Structure
| Key | Name/Value | Type | Description 
|-----|------------|------|-------------
| 1   | listID | **Integer** | The id of the list 
| 2   | listName | **String** | The name of the list 
| 3   | description | **String** | The list description, encoded in [base64](/topics/encryption/base64.md) 
| 5   | version | **Integer** | The version of the list published
| 7   | difficulty | **Integer** | The difficulty face for the list. -1 = N/A, 0 = Auto, 1 = Easy, 2 = Normal, 3 = Hard, 4 = Harder, 5 = Insane, 6 = Easy Demon, 7 = Medium Demon, 8 = Hard Demon, 9 = Insane Demon, 10 = Extreme Demon
| 10  | downloads | **Integer** | The amount of times the list has been downloaded
| 14  | likes | **Integer** | likes - dislikes |
| 19  | rated | **Bool** | If the list is rated or not
| 28  | uploadDate | **String** | The Unix timestamp of when the list was uploaded
| 29  | updateDate | **String** | The Unix timestamp of when the list was last updated
| 49  | accountID | **Integer** | The account ID of the list author
| 50  | username | **String** | The username of the list author
| 51  | levelIDs | **Comma-Separated List** | All level IDs in the list, separated by commas
| 55  | listReward | **Integer** | The amount of diamonds awarded upon beating the required amount of levels in the list
| 56  | listRewardRequirement | **Integer** | The amount of levels needed to claim the list reward
