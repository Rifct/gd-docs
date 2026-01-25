# Account Management

The Boomlings servers whitelist the `database/accounts` directory for user access (no requirement for a blank user agent). This directory is used to access several account management pages, including a few that can be accessed ingame. These requests are typically captcha blocked.

## register.php

This page replaced [registerGJAccount.md](/endpoints/accounts/registerGJAccount.md) in the 2.2 update. Besides the captcha, it does not contain any additional registration fields.

## accountManagement.php

Login for the account management page, which allows for changing username, the password, or deleting an account.

## lostpassword.php

Entering an email will send a password reset request to that email.

## lostusername.php

Entering an email will have the username associated with that email sent in an email.

