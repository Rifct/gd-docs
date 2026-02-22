## Gamemodes

For the tables below, gravity is describing whether the player falls up or down.
The variable G is simply 1 when the player has regular gravity, or -1 when the player has inverse gravity. 
All the velocities are in Vels (1 Vel = 60 units/sec).
Max velocity is the highest velocity the player can reach by falling normally, with the exception of ship which also has an upwards max velocity in addition to the downwards one.
However the max velocity can be temporarily overridden by force blocks until it goes back down to the regular max velocity.
Ticks held is how many ticks one needs to hold for before the click action triggers.
1 would mean it triggers on that tick, 2 would mean it triggers on the nextt
(Both would have their actions occur on the following tick, but 2 would mean swift clicks don't trigger the click action).

Robot is also just 1/2 of cube jump velocity and ball is 3/10 of cube jump velocity.

#### 0.5x Speed Portal

| Gamemode    | Click                                                     | Release                                                      | Max y-velocity               | Ticks held | Can click in midair? |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------- | ---------- | -------------------- |
| Cube        | Sets the y-velocity to 10.62G                             | N/A                                                          | -15G                         | 1          | No                   |
| Ship        | skipped for now                                           | skipped for now                                              | 8G on hold, -6.4G on release | 2          | Yes                  |
| Ball        | Sets the y-velocity to 3.186G then toggles the gravity    | N/A                                                          | -15G                         | 1          | No                   |
| Ufo         | Sets the y-velocity to 7G                                 | N/A                                                          | -6.4G                        | 2          | Yes                  |
| Wave        | Sets the y-velocity to 4.186G                             | Sets the velocity to -4.186G                                 | N/A                          | 2          | Yes                  |
| Robot       | Sets the y-velocity to 5.31G                              | Decelerates according to the tps                             | -15G                         | 1          | No                   |
| Spider      | See section "Spider" below                                | N/A                                                          | -15                          | 1          | No                   |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | N/A                                                          | -8G                          | 2          | Yes                  |

#### 1x Speed Portal

| Gamemode    | Click                                                     | Release                                                      | Max y-velocity               | Ticks held | Can click in midair? |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------- | ---------- | -------------------- |
| Cube        | Sets the y-velocity to 11.18G                             | N/A                                                          | -15G                         | 1          | No                   |
| Ship        | skipped for now                                           | skipped for now                                              | 8G on hold, -6.4G on release | 2          | Yes                  |
| Ball        | Sets the y-velocity to 3.354G then toggles the gravity    | N/A                                                          | -15G                         | 1          | No                   |
| Ufo         | Sets the y-velocity to 7G                                 | N/A                                                          | -6.4G                        | 2          | Yes                  |
| Wave        | Sets the y-velocity to 5.193G                             | Sets the velocity to -5.193G                                 | N/A                          | 2          | Yes                  |
| Robot       | Sets the y-velocity to 5.31G                              | Decelerates according to the tps                             | -15G                         | 1          | No                   |
| Spider      | See section "Spider" below                                | N/A                                                          | -15                          | 1          | No                   |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | N/A                                                          | -8G                          | 2          | Yes                  |

#### 2x Speed Portal

| Gamemode    | Click                                                     | Release                                                      | Max y-velocity               | Ticks held | Can click in midair? |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------- | ---------- | -------------------- |
| Cube        | Sets the y-velocity to 11.42G                             | N/A                                                          | -15G                         | 1          | No                   |
| Ship        | skipped for now                                           | skipped for now                                              | 8G on hold, -6.4G on release | 2          | Yes                  |
| Ball        | Sets the y-velocity to 3.426G then toggles the gravity    | N/A                                                          | -15G                         | 1          | No                   |
| Ufo         | Sets the y-velocity to 7G                                 | N/A                                                          | -6.4G                        | 2          | Yes                  |
| Wave        | Sets the y-velocity to 6.457G                             | Sets the velocity to -6.457G                                 | N/A                          | 2          | Yes                  |
| Robot       | Sets the y-velocity to 5.31G                              | Decelerates according to the tps                             | -15G                         | 1          | No                   |
| Spider      | See section "Spider" below                                | N/A                                                          | -15                          | 1          | No                   |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | N/A                                                          | -8G                          | 2          | Yes                  |

#### 3x Speed Portal

| Gamemode    | Click                                                     | Release                                                      | Max y-velocity               | Ticks held | Can click in midair? |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------- | ---------- | -------------------- |
| Cube        | Sets the y-velocity to 11.23G                             | N/A                                                          | -15G                         | 1          | No                   |
| Ship        | skipped for now                                           | skipped for now                                              | 8G on hold, -6.4G on release | 2          | Yes                  |
| Ball        | Sets the y-velocity to 3.369G then toggles the gravity    | N/A                                                          | -15G                         | 1          | No                   |
| Ufo         | Sets the y-velocity to 7G                                 | N/A                                                          | -6.4G                        | 2          | Yes                  |
| Wave        | Sets the y-velocity to 7.8G                               | Sets the velocity to -7.8G                                   | N/A                          | 2          | Yes                  |
| Robot       | Sets the y-velocity to 5.31G                              | Decelerates according to the tps                             | -15G                         | 1          | No                   |
| Spider      | See section "Spider" below                                | N/A                                                          | -15                          | 1          | No                   |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | N/A                                                          | -8G                          | 2          | Yes                  |

#### 4x Speed Portal

| Gamemode    | Click                                                     | Release                                                      | Max y-velocity               | Ticks held | Can click in midair? |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------- | ---------- | -------------------- |
| Cube        | Sets the y-velocity to 11.23G                             | N/A                                                          | -15G                         | 1          | No                   |
| Ship        | skipped for now                                           | skipped for now                                              | 8G on hold, -6.4G on release | 2          | Yes                  |
| Ball        | Sets the y-velocity to 3.369G then toggles the gravity    | N/A                                                          | -15G                         | 1          | No                   |
| Ufo         | Sets the y-velocity to 7G                                 | N/A                                                          | -6.4G                        | 2          | Yes                  |
| Wave        | Sets the y-velocity to 9.6G                               | Sets the velocity to -9.6G                                   | N/A                          | 2          | Yes                  |
| Robot       | Sets the y-velocity to 5.31G                              | Decelerates according to the tps                             | -15G                         | 1          | No                   |
| Spider      | See section "Spider" below                                | N/A                                                          | -15                          | 1          | No                   |
| Swingcopter | Multiplies the y-velocity by 0.8 then toggles the gravity | N/A                                                          | -8G                          | 2          | Yes                  |
