---
id: poolCreation
title: Pool Creation
sidebar_position: 3
---

With the latest V2 updated of Kōyō Finance came the feature for our users to create liquidity pools.

To create liquidity pool you first navigate to the _[koyo.finance/deposit](https://koyo.finance/deposit)_.

To begin the process of creation, click on the "Create liquidity pool +" button.

<img src="/img/guide/swap/poolCreation.png" alt="Pool creation page" width="500" />

## Pool types

When creating a pool you have 3 types of pools to choose from:

-   Weighted pool, which allows you to have up to 8 tokens and each one can have a custom weight
-   Oracle pool, which allows you to choose only 2 tokens, but still allows you to set custom weihts
-   Stable pool, which allows you to have up to 8 tokens, but not costum weghts for each token

<img src="/img/guide/swap/poolTypes.png" alt="Pool types" width="500" />

## Choosing tokens

To change the already selected token click on the existing tokens box.

<img src="/img/guide/swap/tokenChange.png" alt="Change token button" width="400" />

To add a token to your list click on the "Add token +" button.

<img src="/img/guide/swap/addToken.png" alt="Add token button" width="400" />

A token modal, that doesn't include the already chosen tokens, should open.

<img src="/img/guide/swap/poolCreation-tokenModal.png" alt="Token modal" width="500" />

## Setting weights

If you have chosen the stable pool, you won't have the option to choose the custom weights for your tokens.

Otherwise you'll set the weight of each token on the right side of the token. _Weights of the tokens must add up to 100% otherwise you won't be able to proceed to the next step._

<img src="/img/guide/swap/setWeights.png" alt="Set token weights" width="500" />

When you are finished with choosing your tokens and setting the weights, you can proceed by clicking the "Confirm Tokens" button.

## Pool fees

When choosing the pool fees for your pool, you'll have 4 predefined options and a quick explanation of which pairs those fees are most suitable for.

<img src="/img/guide/swap/setFeeRate.png" alt="Pool fee rate" width="500" />

### Setting fee manager

After you set the fee rate, you'll be able to set the pool fee manager address.

First two options will be:

-   Fix the fees to the chosen rate
-   Allow dynamic pool fees from the chosen address

By clicking on the "Allow dynamic pool fees from the chosen address" three more options:

-   My address: 0x...
-   Let Kōyō manage the pool fees
-   Custom address

<img src="/img/guide/swap/feeAddress.png" alt="Fee manager options" width="500" />

Choosing the "Custom address" option, displays the input field, where you'll have to input the custom address for pool fees.

<img src="/img/guide/swap/customAddressInput.png" alt="Custom fee manager address" width="500" />

The address you input must be valid, otherwise you won't be able to proceed with pool creation.

To proceed press the "Confirm pool fees" button.

## Initial liquidity

When you set the fees, you'll have to set the initial liquidity, that your pool will recieve after created.

Setting the liquidity isn't any different from seting an amount when swapping, depositing, ... On the right of the token there is an input field in which you type the amount you want to deposit. There is also a MAX button, which will set the amount to your balance of that token. Your token balance is displayed underneath the input field.

<img src="/img/guide/swap/initialLiquidity.png" alt="Add initial liquidity" width="700" />

After setting the amount of initial liquidity press the "add initial liquidity" button to proceed.

## Creating pool

When everything is chosen and set up you'll se a summary window, which holds all the data about the pool you are about to create.

<img src="/img/guide/swap/poolSummary.png" alt="Pool summary" width="600" />

Check for all the data and when you are sure about everything, press the "Create liquidity pool". The process will begin and the transaction will ask for confirmation in the wallet.

Once the pool is created, the button should change to say "Add initial liquidity" which will deposit the initial liquidity into the pool.

That's it, your pool is finished and you can start depositing and withdrawing from the pool.

## Problems

Keep having trouble creating a liquidity pool? Please report the issue on [Twitter](https://twitter.com/KoyoFinance) or our [Discord Server](https://docs.koyo.finance/discord).
