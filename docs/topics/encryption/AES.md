# AES

AES (The Advanced Encryption Standard) is an encryption algorithm used for encrypting Geometry Dash Save files on Mac and iOS

Geometry Dash uses `ECB` mode and a 256-bit key for encrypting and descrypting data

## AES Key

The key used by Geometry Dash is:

- **Hexadecimal**
  ```
  69 70 75 39 54 55 76 35 34 79 76 5d 69 73 46 4d 68 35 40 3b 74 2e 35 77 33 34 45 32 52 79 40 7b
  ```

- **Plaintext**
  ```
  ipu9TUv54yv]isFMh5@;t.5w34E2Ry@{
  ```

## Padding

The plaintext data sometimes may not perfectly align and therefore, some padding is implemented

<!-- tabs:start -->

### **Implement Padding**

```js
// Pseudocode
pad_offset = data.length % 16;

if (pad_offset != 0) {
  pad_total = 16 - pad_offset;

  for (i = 0; i < pad_total; i++) {
    data += pad_total.toByte();
  }
}
```

### **Remove Padding**

```js
// Pseudocode
total_padding = data.last_byte();

if (total_padding < 16) {
  data = data.slice(0, data.length - total_padding);
}
```

<!-- tabs:end -->

## Implementation

Decrypting and Encrypting data with AES is pretty simple

<!-- tabs:start -->

### **Encrypt**

```js
// Pseudocode
data = addPadding(data);

cipher = AES.new(
  "\x69\x70\x75\x39\x54\x55\x76\x35\x34\x79\x76\x5d\x69\x73\x46\x4d
  \x68\x35\x40\x3b\x74\x2e\x35\x77\x33\x34\x45\x32\x52\x79\x40\x7b",
  AES.MODE_ECB
);

encrypted_data = cipher.encrypt(data);
```

### **Decrypt**

```js
// Pseudocode
cipher = AES.new(
  "\x69\x70\x75\x39\x54\x55\x76\x35\x34\x79\x76\x5d\x69\x73\x46\x4d
  \x68\x35\x40\x3b\x74\x2e\x35\x77\x33\x34\x45\x32\x52\x79\x40\x7b",
  AES.MODE_ECB
);

decrypted = cipher.decrypt(data);

decrypted = removePadding(decrypted);
```

<!-- tabs:end -->
