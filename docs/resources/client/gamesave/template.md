---
title: Smart Templates
---

# Smart Templates (kCEK 10 & 11)

Smart Templates are user-made templates used for the Auto Build feature. They are stored in [GLM_20](/resources/client/gamesave/GLM.md#GLM_20).

## kCEK 10

| Key | Value               | Type    |
| --- | ------------------- | ------- |
| 1   | Smart Template ID   | integer |
| 2   | Name                | string  |
| 3   | Template Variations | dict    |
| 4   | Unknown             | integer |
| 5   | Unknown             | integer |
| 6   | Unknown             | integer |
| 7   | Unknown             | integer |

## kCEK 11

kCEK 11's are stored in key 3 of kCEK 10 in the following format:

```
<k>100010000</k>
<d>
  <k>_isArr</k>
  <t />
  <k>k_0</k>
  <d>
    <k>kCEK</k><i>11</i>
    <k>1</k><s>1,1,2,0,3,-90;1,2895,2,0,3,-90,34,1;</s>
  </d>
  <k>k_1</k>
  <d>
    <k>kCEK</k><i>11</i>
    <k>1</k><s>...</s>
  </d>
</d>
```

kCEK 11 key 1 is the [object string](/resources/client/level-components/level-string.md) of the template variation. The object string is **unencoded** and stored raw. The center point is at X: 0, Y: -90.

The keys of the dictionary are 9-bit bitfields (binary numbers) representing the exact type of template variation. The first bit is reserved and is always set to `1`. Other bits represent:

| Bit | Position      |
| --- | ------------- |
| 2   | Top Middle    |
| 3   | Bottom Middle |
| 4   | Center Left   |
| 5   | Center Right  |
| 6   | Top Left      |
| 7   | Top Right     |
| 8   | Bottom Left   |
| 9   | Bottom Right  |
