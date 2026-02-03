# Particle String

The particle string is a long string of values separated by the `a` character that defines how particle systems in-game such as the particle object behave. Here is an example of a particle string:

```
30a-1a1.3a0.2a20a90a0a10a5a20a20a0a0a8a0a0a0a4a1a0a0a0a0a1a0a1a0a1a0a1a1a0a0a0 a0a0.784314a0a1a0a1a0a0.27a0a0.27a0a0a0a0a0a0a0a0a2a1a0a0a0a0a0a0a0.25a0a0a0a0a0a0a0a0a0a0a0
```

(this is the particle string of the particles around the Mythic rating fire)

## The Values

| Index | Name                     | Description                                                              |
| ------| -------------------------| -------------------------------------------------------------------------|
| 1     | Max Particles            | The maximum number of particles to be generated                          |
| 2     | Duration                 | The animation duration. `-1` for indefinite                              |
| 3     | Lifetime                 | How long the particles last. `-1` for indefinite                         |
| 4     | Lifetime +-              | Random offset for Lifetime                                               |
| 5     | Emission                 | Particle spawn rate. `-1` for max                                        |
| 6     | Angle                    | In what direction the particles are generated towards                    |
| 7     | Angle +-                 | Random offset for Angle                                                  |
| 8     | Speed                    | How fast the particles are                                               |
| 9     | Speed +-                 | Random offset for Speed                                                  |
| 10    | PosVar X                 | The horizontal particle spawn area                                       |
| 11    | PosVar Y                 | The vertical particle spawn area                                         |
| 12    | Gravity X                | The horizontal gravitational pull                                        |
| 13    | Gravity Y                | The vertical gravitational pull                                          |
| 14    | AccelRad                 | Radial particle acceleration                                             |
| 15    | AccelRad +-              | Random offset for AccelRad                                               |
| 16    | AccelTan                 | Tangential particle acceleration                                         |
| 17    | AccelTan +-              | Random offset for AccelTan                                               |
| 18    | StartSize                | The scale the particles start at                                         |
| 19    | StartSize +-             | Random offset for StartSize                                              |
| 20    | StartSpin                | The rotation of the particles when they spawn                            |
| 21    | StartSpin +-             | Random offset for StartSpin                                              |
| 22    | StartR                   | The red color value the particles start at                               |
| 23    | StartR +-                | Random offset for StartR                                                 |
| 24    | StartG                   | The green color value the particles start at                             |
| 25    | StartG +-                | Random offset for StartG                                                 |
| 26    | StartB                   | The blue color value the particles start at                              |
| 27    | StartB +-                | Random offset for StartB                                                 |
| 28    | StartA                   | The opacity the particles start at                                       |
| 29    | StartA +-                | Random offset for StartA                                                 |
| 30    | EndSize                  | The scale the particles end at                                           |
| 31    | EndSize +-               | Random offset for EndSize                                                |
| 32    | EndSpin                  | The rotation of the particles at the end of their lifetime               |
| 33    | EndSpin +-               | Random offset for EndSpin                                                |
| 34    | EndR                     | The red color value the particles end at                                 |
| 35    | EndR +-                  | Random offset for EndR                                                   |
| 36    | EndG                     | The green color value the particles end at                               |
| 37    | EndG +-                  | Random offset for EndG                                                   |
| 38    | EndB                     | The blue color value the particles end at                                |
| 39    | EndB +-                  | Random offset for EndB                                                   |
| 40    | EndA                     | The opacity the particles end at                                         |
| 41    | EndA +-                  | Random offset for EndA                                                   |
| 42    | Fade in                  | Fade time for particles to appear                                        |
| 43    | Fade in +-               | Random offset for Fade in                                                |
| 44    | Fade out                 | Fade time for particles to disappear                                     |
| 45    | Fade out +-              | Random offset for Fade out                                               |
| 46    | StartRad                 | Start radius of the particles                                            |
| 47    | StartRad +-              | Random offset for StartRad                                               |
| 48    | EndRad                   | End radius of the particles                                              |
| 49    | EndRad +-                | Random offset for EndRad                                                 |
| 50    | RotSec                   | Rotation per second                                                      |
| 51    | RotSec +-                | Random offset for RotSec                                                 |
| 52    | Mode                     | 0 for Gravity, 1 for Radius                                              |
| 53    | Mode 2                   | 0 for Free, 1 for Relative, 2 for Grouped                                |
| 54    | Additive                 | Whether the particles color is blending or not                           |
| 55    | Start spin = end         | Whether the particles have the same rotation through their lifetime      |
| 56    | Start rot is dir         | Whether the particles' direction will be their starting rotation         |
| 57    | Dynamic rotation         | Whether particles rotate towards the direction they are going towards    |
| 58    | Texture                  | The particle texture. 0 for Square, and the ID matches the order in the particle object |
| 59    | Uniform obj color        | Whether the particles color is the same through their lifetime           |
| 60    | FrictionP                | Particle friction                                                        |
| 61    | FrictionP +-             | Random offset for FrictionP                                              |
| 62    | Respawn                  | Particle respawning rate                                                 |
| 63    | Respawn +-               | Random offset for Respawn                                                |
| 64    | Order Sensitive          | The newest particles are layered on top of the older ones                |
| 65    | Start size = end         | Whether the particles have the same size through their lifetime          |
| 66    | Start rad = end          | Whether the particles have the same radius through their lifetime        |
| 67    | StartRGB Var Sync        | Whether to sync the Start R/G/B values                                   | 
| 68    | EndRGB Var Sync          | Whether to sync the End R/G/B values                                     | 
| 69    | FrictionS                | Particle speed friction                                                  |
| 70    | FrictionS +-             | Random offset for FrictionS                                              |
| 71    | FrictionR                | Particle rotation friction                                               |
| 72    | FrictionR +-             | Random offset for FrictionR                                              |
