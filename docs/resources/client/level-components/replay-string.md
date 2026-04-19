# Replay String Resource

The replay string is a feature first added in 1.6, removed in 2.200 and re-added in 2.208 as a new format. This page documents the new 2.208 format.

Currently, it is only used for local levels, with it being stored on the client in keys `k34`, `k119` and `k120` and sent to the servers via uploadGJLevel21.php's `lrs` parameter.

It is separated into 2 sections with a `#` character: the inputs and the metadata

## Inputs
The inputs are a list of click/release actions, separated by `;`. 

Each input has a half-step value, which is the amount of 240 TPS half-steps (or 480 TPS steps) that have passed since any previous input. The number is negative if the input is being released.

Note that half-steps are used even if Click Between Steps is disabled.

Every replay string starts with either a `-0` or `0`, which indicates if the player is holding on the first halfstep of the level or not.

All input types other than P1 jump include a `,` after the value and the ID of the input being done.

| Key | Name                
|-----|---------------------|
| 2   | P1 Left             |
| 3   | P1 Right            |
| 6   | P2 Jump             | 
| 7   | P2 Left             | 
| 8   | P2 Right            | 

Here are some input examples:

`460` - P1 jump held 460 half-steps after the previous input
`-120` - P1 jump released 120 half-steps after the previous input
`340,7` - P2 left held 340 half-steps after the previous input
`-60,3` - P1 right released 60 half-steps after the previous input

## Checkpoint Data
TODO

## Metadata
The metadata is comparatively simple. It's a list of 5 values separated by `,`. The values are:

`Random Seed,Attempts,gameVersion,binaryVersion,unknown,`

- Random Seed is the seed used for random triggers on the attempt of the replay.
- Attempts is NOT the total amount of attempts, just the amount of attempts in the current session
- gameVersion and binaryVersion are the same as what the game sends to the servers. Currently `22` and `47` (`48` on mobile) respectively.
- The last value is unknown and seems to always be 1
