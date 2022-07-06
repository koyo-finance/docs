---
id: ExtendLockTime
title: Extend Lock Time
sidebar_position: 3
---

In your locker you have an option, to extend the lock period if you wish to.

Extending your lock period can be changed on [koyo.finance/lock](https://koyo.finance/lock) page.

To be able to extend the duration of your lock, you must first have your wallet connected to Kōyō Finance. however we won't go through the connect wallet process as we already did in [Lock](http://localhost:3000/protocol/guide/Locker/Lock#connect-your-wallet) section of the guide.

On the page you should see something similar to this.

<img src="/img/guide/locker/locker-extendTime.png" alt="Extend lock time" width="500" />

You can see that the current lock time is displayed, but beware that the lock **duration is set in weeks** and when you set it, it might be a bit shorter than shown in the date picker (_Few days might be missing_).

## Selecting the duration

To select the lock duration you have 2 options:

-   choose one of multiple predefined values
-   choose a custom date in the datepicker

Keep in mind that you **cannot set** the lock duration **shorter than the one that is already set**, so setting a lock period that's shorter will result in a failed transaction, so you'll lose the eth you've paid for gas.

## Extending lock period

When you've selected the desired date to extend your lock time to, just press the "EXTEND LOCK" button.

You should be asked to confirm the transaction in your wallet.

That's it! Your locker period has been extended.

## Problems

Having trouble extending your lock time? Please report the issue on [Twitter](https://twitter.com/KoyoFinance) or our [Discord Server](https://docs.koyo.finance/discord).
