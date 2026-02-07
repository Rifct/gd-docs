# Sending Requests

## Requirements

To make a successful request to the Geometry Dash servers, there are a couple factors to consider:

- Cloudflare
- Request Type
- Rate Limits

### Cloudflare
The Geometry Dash servers are protected using a service called [Cloudflare](https://www.cloudflare.com/). In order to send a successful request, bypassing cloudflare is essential. In order to that, you must:

- send the request to the `www.` subdomain,
- send the request with an empty user-agent.

If you don't follow these steps, cloudflare will block the request and you will recieve [error 1020](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1020/).

### Request Type
In 99% of cases, Geometry Dash requires you to send an HTTP `POST` request. The request parameters require the following header: `Content-Type: application/x-www-form-urlencoded`.

### Rate Limits
Sending too many requests at a given time will result in you becoming rate limited and not being able to send any more requests for a certain duration. As the number of requests required to start a rate limit changes, we are unable to provide exact numbers, but as of November 3rd, 2023, they are roughly:
- 20x downloadGJLevel per minute, all other data-retrieval endpoints - 2 per second

However, there are some longer-term limits applied on top of that as well.

## Common Parameters
Several POST params are common across many or almost all requests. Here's a list of them:

| Param                                | Type    | Description                                                                                                                                                                                                                                                               |
| ------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `secret`                             | string  | A constant string that is required for a request to go through. See [list of secrets](/reference/secrets.md)                                                                                                                                                              |
| `gameVersion`                        | integer | A number representing the game's version. The current value is `22` for 2.2                                                                                                                                                                                               |
| `binaryVersion`                      | integer | A number representing the game's small version. The current value is `48` for 2.2081 on PC and `47` for 2.208 on mobile                                                                                                                                                   |
| [`uuid`](/topics/encryption/id#uuid) | integer | In modern versions, this is sent as the player's user ID                                                                                                                                                                                                                  |
| [`udid`](/topics/encryption/id#udid) | string  | The player's UDID (Unique Device Identifier). Used to identify unregistered users                                                                                                                                                                                         |
| `accountID`                          | integer | The player's account ID (not to be confused with user ID). Used for authorization                                                                                                                                                                                         |
| [`gjp2`](/topics/gjp)                | string  | The player's account password, encoded with [GJP2](/topics/gjp.md). Used for authorization                                                                                                                                                                                |
| `dvs`                                | integer | A number added in 2.208 representing the device the player is using. Corresponds to the [Cocos2d `CC_TARGET_PLATFORM` macro](https://docs.cocos2d-x.org/api-ref/cplusplus/V2.2/dd/d96/_c_c_platform_config_8h.html): 1 for iOS, 2 for Android, 3 for Windows, 8 for macOS |
| `gdw`                                | boolean | Whether the request is coming from GD World. This used to block some requests if set to `1`, and used to be sent as `0` in full GD 2.1, but is no longer sent at all outside of GDW                                                                                       |
| `gdl`                                | boolean | Whether the request is coming from GD Lite                                                                                                                                                                                                                                |
