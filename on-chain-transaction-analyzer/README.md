# On-Chain Transaction Analyzer

Analyzes any blockchain transaction and returns a human-readable summary.

## What it does

Feed this skill a transaction hash from any EVM chain and it returns
a full breakdown — sender, receiver, value transferred, gas used,
method called, and a plain English summary of what happened.

## Usage

```js
const result = await run({
  txHash: "0xabc123...",
  chain: "ethereum",
});
```

## Input

- `txHash` (string) — the transaction hash to analyze
- `chain` (string) — ethereum | polygon | bsc

## Output

```json
{
  "from": "0x...",
  "to": "0x...",
  "value": "0.5 ETH",
  "gasUsed": 21000,
  "summary": "Transferred 0.5 ETH from wallet A to wallet B"
}
```

## Price

2.00 USDC per call

## Author

Skillnet Verified Seller
