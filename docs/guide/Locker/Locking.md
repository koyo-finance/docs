---
id: Lock
title: Lock
sidebar_position: 1
---

To use the locker, you first have to lock your KYO tokens.

So let's quickly go through the locking process, since it's fairly simple.

First you'll have to navigate to the actual locking page [koyo.finance/lock]("https://koyo.finance/lock").

You should be presented with something similar to what you see down below.

<img src="/img/guide/locker/lock.png" alt="Lock page" width="800" />

## Connect your wallet

If your wallet is already connected, the "LOCK" or "APPROVE - _kyo_" button will be shown, so you can skip this and proceed to [Locking](#locking). Otherwise you will be presented with "Connect Wallet" button, which will allow you to connect your desired wallet to Kōyō Finance.

When you choose a wallet, your wallet application will most likely open your wallet or account and ask for **confirmation to connect** to Kōyō Finance.

<img src="/img/guide/swap/deposit-walletPoppup.png" alt="Wallet poppup" width="450" />

Second "Connect Wallet" button is always shown in **top right** of the page (desktop) or in the **navigation** (mobile).

## Locking

If you've connected your wallet successfuly, your KYO and veKYO balance should be displayed.

To start the locking process you're going to scroll down to "Lock KYO tokens" window.

You can see that there are 2 inputs yoou have to make. **Amount** of KYO tokens to lock and select the **lock duration** of your locker.

<img src="/img/guide/locker/locker-inputs.png" alt="Locker inputs" width="500" />

### Setting amount

Setting the amount you want to lock couldn't be simpler.

Just input the **number of tokens** you want to lock. Beware that setting a higher amount than you have will result in a failed transaction and you'll lose eth that you paid for gas.

### Lock duration

To select the lock duration you have 2 options:

-   choose one of multiple predifined values
-   choose a custom date in the datepicker

Keep in mind that the minimum lock duration is 2 weeks, so setting a lock period shorter than 2 weeks will result in a failed transaction, so you'll lose the eth you've paid for gas.

### Approving

When you set the amount and lock period of your locker you are going to be asked to approve the KYO tokens. If you don't see a "Approve - _KYO_" button an it says "LOCK" you can skip this section and proceed to [Create locker](#create-locker) section.

Once you click on approve, your wallet will ask you for transaction conformation. Once transactionsgoes through, wait for the button to say "LOCK" and proceed with the proces.

<img src="/img/guide/locker/locker-approve.png" alt="Approve KYO" width="500" />

### Create locker

You are finally ready to create your first locker.

Click on a "LOCK" button and confirm the gas fee in your wallet.

<img src="/img/guide/locker/locker-lock.png" alt="Approve KYO" width="800" />

When transaction goes through, your locker will be created on your account.

Beware that you can only have **one locker per account/address**, so if you want to have multiple lockers you should **create multiple accounts** in your wallet.

## Problems

Keep having trouble locking your KYO? Please report the issue on [Twitter](https://twitter.com/KoyoFinance) or our [Discord Server](https://docs.koyo.finance/discord).
