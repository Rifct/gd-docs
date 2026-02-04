---
aside: true
---
# Enumerations (Enums)

Here you will find a list of all enumerations that can be found in the client.

> [!IMPORTANT]
> Some portions may be incomplete due to lack of information!

## Texture Quality

This enum represents the quality of the game's textures.

| Value | Quality |
| ----- | ------- |
| `0`   | Auto    |
| `1`   | Low     |
| `2`   | Medium  |
| `3`   | High    |

## Resolution

This enum represents the game window's resolution.

| Value | Width | Height | Aspect Ratio |
| ----- | ----- | ------ | ------------ |
| `1`   | 640   | 480    | 4:3          |
| `2`   | 720   | 480    | 3:2          |
| `3`   | 720   | 576    | 5:4          |
| `4`   | 800   | 600    | 4:3          |
| `5`   | 1024  | 768    | 4:3          |
| `6`   | 1152  | 864    | 4:3          |
| `7`   | 1176  | 664    | 147:83       |
| `8`   | 1280  | 720    | 16:9         |
| `9`   | 1280  | 768    | 5:3          |
| `10`  | 1280  | 800    | 16:10        |
| `11`  | 1280  | 960    | 4:3          |
| `12`  | 1280  | 1024   | 5:4          |
| `13`  | 1360  | 768    | 85:48        |
| `14`  | 1366  | 768    | 683:384      |
| `15`  | 1440  | 900    | 16:10        |
| `16`  | 1600  | 900    | 16:9         |
| `17`  | 1600  | 1024   | 25:16        |
| `18`  | 1600  | 1200   | 4:3          |
| `19`  | 1680  | 1050   | 16:10        |
| `20`  | 1768  | 992    | 221:124      |
| `21`  | 1920  | 1080   | 16:9         |
| `22`  | 1920  | 1200   | 16:10        |
| `23`  | 1920  | 1440   | 4:3          |
| `24`  | 2048  | 1536   | 4:3          |
| `25`  | 2560  | 1440   | 16:9         |
| `26`  | 2560  | 1600   | 16:10        |
| `27`  | 3840  | 2160   | 16:9         |

## Gamemode

| Key | Gamemode |
| --- | -------- |
| `0` | Icon     |
| `1` | Ship     |
| `2` | Ball     |
| `3` | UFO      |
| `4` | Wave     |
| `5` | Robot    |
| `6` | Spider   |
| `7` | Swing    |

## Speed

| Key | Name | Actual Speed (in Units/s) |
| --- | ---- | ------------------------- |
| `0` | 1x   | 311.58                    |
| `1` | 0.5x | 251.16                    |
| `2` | 2x   | 387.42                    |
| `3` | 3x   | 468.00                    |
| `4` | 4x   | 576.00                    |

## Easing

| Key  | Mode               |
| ---- | ------------------ |
| `0`  | None               |
| `1`  | Ease In Out        |
| `2`  | Ease In            |
| `3`  | Ease Out           |
| `4`  | Elastic In Out     |
| `5`  | Elastic In         |
| `6`  | Elastic Out        |
| `7`  | Bounce In Out      |
| `8`  | Bounce In          |
| `9`  | Bounce Out         |
| `10` | Exponential In Out |
| `11` | Exponential In     |
| `12` | Exponential Out    |
| `13` | Sine In Out        |
| `14` | Sine In            |
| `15` | Sine Out           |
| `16` | Back In Out        |
| `17` | Back In            |
| `18` | Back Out           |

## Pulse Mode

| Key | Mode  |
| --- | ----- |
| `0` | Color |
| `1` | HSV   |

## Pulse Target Type

| Key | Type    |
| --- | ------- |
| `0` | Channel |
| `1` | Group   |

## Touch Toggle Mode

| Key | Mode       |
| --- | ---------- |
| `0` | None       |
| `1` | Toggle On  |
| `2` | Toggle Off |

## Instant Count Comparison

| Key | Comparison |
| --- | ---------- |
| `0` | Equals     |
| `1` | Larger     |
| `2` | Smaller    |

## X/Y Only

| Key | Status  |
| --- | ------- |
| `0` | Neither |
| `1` | X Only  |
| `2` | Y Only  |

## Main/Secondary Color

| Key | Color                    |
| --- | ------------------------ |
| `0` | Default                  |
| `1` | Main (Base) Color        |
| `2` | Secondary (Detail) Color |

## Player Color

| Key | Color |
| --- | ----- |

## Player Icon

| Key | Icon |
| --- | ---- |

## Player Ship

| Key | Ship |
| --- | ---- |

## Player Ball

| Key | Ball |
| --- | ---- |

## Player UFO

| Key | UFO |
| --- | --- |

## Player Wave

| Key | Wave |
| --- | ---- |

## Player Robot

| Key | Robot |
| --- | ----- |

## Player Spider

| Key | Spider |
| --- | ------ |

## Player Swing

| Key | Swing |
| --- | ----- |

## Primary Player Color

| Key | Color |
| --- | ----- |

## Secondary Player Color

| Key | Color |
| --- | ----- |

## Glow Player Color

| Key  | Color                                                     |
| ---- | --------------------------------------------------------- |
| `-1` | Same as [Secondary Player Color](#secondary-player-color) |

## Player Trail

| Key | Trail |
| --- | ----- |

## Player Streak

| Key | Streak |
| --- | ------ |

## Player Death Effect

| Key | Effect |
| --- | ------ |

## Player Jetpack

| Key | Jetpack |
| --- | ------- |

## Player Icon Type

| Key | Type                       |
| --- | -------------------------- |
| `0` | [Icon](#player-icon)       |
| `1` | [Ship](#player-ship)       |
| `2` | [Ball](#player-ball)       |
| `3` | [UFO](#player-ufo)         |
| `4` | [Wave](#player-wave)       |
| `5` | [Robot](#player-robot)     |
| `6` | [Spider](#player-spider)   |
| `7` | [Swing](#player-swing)     |
| `8` | [Jetpack](#player-jetpack) |

## Quest Type

| Key | Type  |
| --- | ----- |
| `1` | Orbs  |
| `2` | Coins |
| `3` | Stars |

## Quest Position

| Key | Position |
| --- | -------- |
| `1` | Top      |
| `2` | Middle   |
| `3` | Bottom   |

## Difficulty

| Key  | Difficulty    |
| ---- | ------------- |
| `0`  | Auto          |
| `1`  | Easy          |
| `2`  | Normal        |
| `3`  | Hard          |
| `4`  | Harder        |
| `5`  | Insane        |
| `6`  | Hard Demon    |
| `7`  | Easy Demon    |
| `8`  | Medium Demon  |
| `9`  | Insane Demon  |
| `10` | Extreme Demon |