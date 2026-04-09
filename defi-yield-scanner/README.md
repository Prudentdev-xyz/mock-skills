# DeFi Yield Scanner

Scans top DeFi protocols and returns best yield opportunities.

## What it does

Queries Aave, Compound, and Uniswap to find current APY rates
for any token you specify. Returns a ranked list of yield opportunities
with protocol name, APY, TVL, and risk score.

## Usage

```js
const result = await run({
  token: "USDC",
});
```

## Input

- `token` (string) — token symbol e.g. USDC | ETH | DAI

## Output

```json
{
  "token": "USDC",
  "opportunities": [
    { "protocol": "Aave", "apy": "5.2%", "tvl": "$2.1B", "risk": "Low" },
    { "protocol": "Compound", "apy": "4.8%", "tvl": "$800M", "risk": "Low" }
  ]
}
```

## Price

2.50 USDC per call

## Author

Skillnet Verified Seller
