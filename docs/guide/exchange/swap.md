---
id: swap
title: Swap
sidebar_position: 1
---

Main function of Kōyō Finance is **swaping** your tokens.

We currently support only four stable coins from our **4pool**:

-   Tether USD
-   USD Coin
-   FRAX
-   DAI Stablecoin

Swapping on Kōyō Finance is a very **simple** and straight forward process.

We start by navigating to [koyo.finance/swap](https://koyo.finance/swap).

![Kōyō Finance Swap page](/img/guide/swap/swapPage.png)

## Selecting tokens

By default the selected tokens are:

-   Swap from: DAI Stablecoin
-   Swap to: FRAX

We have an option to select tokens. Clicking on a current token will open a **modal**. You are presented with a **list of all tokens**, which does not include the token, chosen on the opposite side of the swap.

<img src="/img/guide/swap/token1.png" alt="Token one" width="500"/> <img src="/img/guide/swap/token1-select.png" alt="Token one selection" width="500"/>

When the token is chosen, you'll be able to select a token to swap **to**.

If you open the token list and see multiple tokens with the same name (USDT, USDT, USDT), don't worry. The tokens are not exeactly the same, because they are located in different **pools**.

Pool of the token is shown on the right side of the token list, so you can decide from which pool to get your tokens (each pool will have different amount liquidity).

<img src="/img/guide/swap/token2.png" alt="Token two" width="500"/> <img src="/img/guide/swap/token2-select.png" alt="Token two selection" width="460"/>

## Choosing amount

When you've selected your tokens, it's time to select the **amount of tokens** to swap.

### Balance

If your wallet is connected the **balance** of chosen tokens is displayed underneath the chosen token.

(_If selected amount of token you pay is higher than your balance of that token, the transaction will fail_).

### Token amount

When you enter the amount of token to pay, Kōyō Finance will automatically **calculate** the amount of token you get.

There is also an option to input the desired **amount** of the **token you get**. Kōyō Finance will also calculate the amount of token you'll have to swap to get the chosen amount.

<img src="/img/guide/swap/token1-amount.png" alt="Token one amount" width="490"/> <img src="/img/guide/swap/token2-amount.png" alt="Token two amount" width="500"/>

## Connect your wallet

If your wallet is already connected, the "SWAP" or "APPROVE - _[token name]_" button will be shown, so you can skip this and proceed to [Swap](#swap). Otherwise you will be presented with "Connect Wallet" button, which will allow you to connect your desired wallet to Kōyō Finance.

When you choose a wallet, your wallet application will most likely open your wallet or account and ask for **confirmation to connect** to Kōyō Finance.

To use Kōyō Finance, you have to be on **Boba Network**.

<img src="/img/guide/swap/connectWallet.png" alt="Connect wallet buttons" width="560"/> <img src="/img/guide/swap/wallet-popup.png" alt="Connect wallet - modal" width="500"/>

######

Second "Connect Wallet" button is always shown in **top right** of the page (desktop) or in the **navigation** (mobile).

## Swap

After you select the desired tokens, amount and connect your wallet, you're finally **ready to swap**.

### Approving

You should see "APPROVE - _[token name]_" button, if not skip this and go to [Swapping](#swapping). In our case it says "APPROVE - _DAI STABLECOIN_".

<img src="/img/guide/swap/approve.png" alt="Approve" width="550"/>

After clicking on the button, your wallet should open and ask for confirmation of **one-time transaction fee**. Once you pay the fee, you can swap as many times as you wish. In my case I am using [MetaMask](https://metamask.io/) as my wallet.

_Once you confirm the fee, click back into the application. It may take a few seconds for the approval (5-20 sec)._

<img src="/img/guide/swap/approved.png" alt="Approving transaction fee" width="900"/>

### Swapping

After approving the button will change to **"SWAP"**.

Click on the "SWAP" button will open your wallet and ask for **gas fee confirmation**.

<img src="/img/guide/swap/swap-gasFee.png" alt="Approving gas fee" width="1000"/>

After confirming the gas fee, transaction will go through.

That's it! Check your wallet
and enjoy your freshly swapped tokens.

## Problems

Transaction should be successfull except if you:

-   tried to swap larger amount of tokens than you own
-   don't have enough ETH for gas fee (beware that gas fee is usually a tad more than specified in confirmation because [BOBA Network](https://boba.network/) bumps it up for a few %)

If transaction failed for any other reason, try again and be careful about the possibilities of transaction failure specified above.

Transactions keeps failing? Please report the issue on [Twitter](https://twitter.com/KoyoFinance) or our [Discord Server](https://docs.koyo.finance/discord).
