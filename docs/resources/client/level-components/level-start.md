---
aside: true
---
# Client Level Start String

The start level string consists of information about the starting state of the level and the objects it contains. It is encoded in base64. Its raw representation is formatted as follows:

`{level_start};{object_string}`, where

- `level_start` is the level start object,
- `object_string` is the object string.

Theoretically, the start level string in its entirety is the object string, however the level start object is treated specially, unlike every other object, and doesn't even have an ID.

## Level Start Object
The level start object has the following properties, formatted as `{key},{value},{key},{value}`

| Key  | Name                   | Type                                        | Description                                                                                                    |
|------|------------------------|---------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| kA1  | AudioTrack             | **Integer**                                 | The audio track which the level uses |
| kA2  | Gamemode               | **[Gamemode](/resources/client/level-components/enumerations#gamemode)**             | the gamemode the player starts with                                                                            |
| kA3  | Mini Mode              | **bool**                                    | determines whether the player starts off as mini Mode                                                          |
| kA4  | Speed                  | **[Speed](/resources/client/level-components/enumerations#speed)**                | the speed of the level at the start                                                                            |
| kA5  | Obj-2 Blending         | **bool**                                    | (deprecated since 1.9) Whether Object-2 (color channel 1) uses blending or not                                 |
| kA6  | Background Texture ID  | **integer**                                 | the ID of the background texture that is being used in the level<br/>(enumerated in the same order as appears) |
| kA7  | Ground Texture ID      | **integer**                                 | the ID of the ground texture that is being used in the level<br/>(enumerated in the same order as appears)     |
| kA8  | Dual Mode              | **bool**                                    | determines whether the player starts off in dual Mode                                                          |
| kA9  | Level/Start Pos Object | **bool**                                    | determines whether this object represents a Level Start or a Start Pos object (true for the latter)            |
| kA10 | 2-Player Mode          | **bool**                                    | determines whether 2-Player Mode is toggled on for this level                                                  |
| kA11 | Flip Gravity           | **bool**                                    | determines whether the player starts off in flipped Gravity                                                    |
| kA12 | Color3 Blending (UNUSED)| **bool**                                   | Unused, apparently meant to determine whether color channel 3 is blending or not                               |
| kA13 | Song Offset            | **float**                                   | the song offset in seconds from which the level begins                                                         |
| kA14 | Guidelines             | **[Guideline String](/resources/client/level-components/guideline-string.md)** | the editor song guidelines of the level                                                                        |
| kA15 | Fade In                | **bool**                                    | determines whether the song will fade in as soon as the level starts                                           |
| kA16 | Fade Out               | **bool**                                    | determines whether the song will fade in as soon as the level ends                                             |
| kA17 | Ground Line            | **integer**                                 | the ID of the ground line that is being used in the level                                                      |
| kA18 | Font                   | **integer**                                 | the ID of the font that is being used in the level                                                             |
| kA20 | Reverse Gameplay       | **bool**                                    | Whether gameplay is reversed at the start                                                                      |
| kA22 | Platformer Mode        | **Bool**                                    | If the level is in Classic Mode (0) or Platformer Mode (1)                                                     |
| kA25 | Middleground Texture ID| **integer**                                 | the ID of the middleground texture that is being used in the level<br/>(enumerated in the same order as appears)|
| kA27 | Allow Multi-Rotation   | **bool**                                    | (Compatibility setting) Whether you can run multiple rotation actions on the same target group or not          |
| kA28 | Mirror Mode            | **bool**                                    | Whether the screen is mirrored at the start                                                                    |
| kA29 | Rotate Gameplay        | **bool**                                    | Whether gameplay is rotated at the start                                                                       |
| kA31 | Enable Player Squeeze  | **bool**                                    | (Compatibility setting) Whether the player can be killed by being squeezed between 2 objects                   |
| kA32 | Fix Gravity Bug        | **bool**                                    | (Compatibility setting) Whether the bug where flipped gravity behaves differently from normal is fixed         |
| kA33 | Fix Negative Scale     | **bool**                                    | (Compatibility setting) Whether negatively scaled objects have correct hitboxes (1) or not (0)                 |
| kA34 | Fix Robot Jump         | **bool**                                    | (Compatibility setting) Whether the robot can jump very high with a pad (0) or not (1)                         |
| kA36 | Spawn Group            | **integer**                                 | The group at which the player spawns                                                                           |
| kA37 | Dynamic Level Height   | **bool**                                    | (Compatiblity setting) Whether the level ceiling is affected by higher objects                                 |
| kA38 | Sort Groups            | **bool**                                    | (Compatibility setting) Whether groups are spawn triggered left to right or not                                |
| kA39 | Fix Radius Collision   | **bool**                                    | (Compatibility setting) Whether the player's hitbox has a circle for circular hazard collision or not          |
| kA40 | Enable 2.2 Changes     | **bool**                                    | (Compatibility setting) Whether miscellaneous 2.2 changes are enabled or not                                   |
| kA41 | Allow Static-Rotate    | **bool**                                    | (Compatibility setting) Whether static objects can be rotated or not                                           |
| kA42 | Reverse Sync           | **bool**                                    | (Compatibility setting) Whether the player's speed is changed when reversing to preserve music sync            |
| kA43 | No Time Penalty        | **bool**                                    | Whether you get a point penalty for time (0) or not (1) in platformer                                          |
| kA45 | Decrease Boost Slide   | **bool**                                    | (Compatibility setting) Whether the player receives a lesser boost in Platformer when boosted by dash orb or moving platforms|
| kS38 | Colors                 | **[Color String](/resources/client/level-components/color-string.md)**         | the color channels that are being used in this level                                                           |
| kS39 | Color Page             | **integer**                                 | the color page which was last displayed in the color channel display window                                    |

***Pre-2.0 Keys***

The following keys were valid prior to 2.0 and are deprecated, since they are included in the new `kS38` key. They all represented a color channel that is now indexed through the respective color channel ID.

| Key  | Name         | Color Channel ID |
|------|--------------|------------------|
| kS29 | BG Color     | 1000             |
| kS30 | Ground Color | 1001             |
| kS31 | Line Color   | 1002             |
| kS32 | Object Color | 1004             |
| kS33 | Color 1      | 1                |
| kS34 | Color 2      | 2                |
| kS35 | Color 3      | 3                |
| kS36 | Color 4      | 4                |
| kS37 | 3DL Color    | 1003             |

***Pre-1.9 Keys***

The following keys were valid prior to 1.9 and were deprecated as of 1.9, since they were included in the keys `kS29`-`kS33`. Each color, instead of using one key, used 3 keys to represent Red, Green, and Blue values, respectively. In 1.7 and 1.8, the game used a fourth key to determine if a color channel used a player color, and which player color it would use.

| Key(s)    | Name                | Key in 1.9 |
| --------- | ------------------- | ---------- |
| kS1-kS3   | BG Color            | kS29       |
| kS4-kS6   | Ground Color        | kS30       |
| kS7-kS9   | Line Color          | kS31       |
| kS10-kS12 | Object Color        | kS32       |
| kS13-kS15 | Obj-2 Color         | kS33       |
| kS16      | BG Player Color     | kS29       |
| kS17      | Ground Player Color | kS30       |
| kS18      | Line Player Color   | kS31       |
| kS19      | Object Player Color | kS32       |
| kS20      | Obj-2 Player Color  | kS33       |

Keys `kS16`-`kS20` used to determine the player color that was being used and their values were interpreted according to the following table:

| Value | Color          |
| ----- | -------------- |
| 0     | Neither        |
| 1     | Player Color 1 |
| 2     | Player Color 2 |

## Start Pos Object
The Start Pos object has the same special properties the level start object has, with a few not working and with a few exclusive ones, listed at the bottom. `kA9` must be set to `1` in the case that the object is indeed a Start Pos.

Specifically, the only functional properties in a Start Pos object are the ones involving gameplay state, thus excluding visual-related ones (BG/ground textures, font, colors, etc.)

Confirmed properties that do not work in the Start Pos:

| Key  |
| ---- |
| kA5  |
| kA6  |
| kA7  |
| kA10 |
| kA13 |
| kA14 |
| kA15 |
| kA16 |
| kA18 |
| kS*  |

Since 2.2, the Start Pos object has its own unique properties that do not work in the Level Start object. This is a table of all of them:

| Key  | Name                   | Type                                        | Description                                                                                                    |
|------|------------------------|---------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| kA19 | Target Order           | **Integer**                                 | The Target Order property of the Start Pos                                                                     |
| kA21 | Disable                | **bool**                                    | Whether the Start Pos is disabled                                                                              |
| kA26 | Target Order           | **Integer**                                 | The Target Channel property of the Start Pos                                                                   |
| kA35 | Reset Camera           | **bool**                                    | Whether the camera is reset when playing from this Start Pos                                                   |
