# Wallet Balance Checker

Returns token balances for any wallet address across multiple chains.

## What it does

Given a wallet address, queries Ethereum, Polygon, and BSC simultaneously
and returns all token balances including native coins and ERC-20 tokens.

## Usage

```js
const result = await run({
  walletAddress: "0x1234...abcd",
});
```

## Input

- `walletAddress` (string) — the wallet address to check

## Output

```json
{
  "ethereum": { "ETH": "1.25", "USDC": "500.00" },
  "polygon": { "MATIC": "200.00" },
  "bsc": { "BNB": "0.85" }
}
```

## Price

1.00 USDC per call

## Author

Skillnet Verified Seller
