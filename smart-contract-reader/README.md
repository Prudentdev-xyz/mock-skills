# Smart Contract Reader

Reads and parses any EVM smart contract ABI and returns structured data.

## What it does
Connects to any EVM-compatible chain, fetches a smart contract by address,
parses its ABI, and returns all functions, events, and state variables
in a clean structured JSON format.

## Usage
```js
const result = await run({
  contractAddress: "0x1234...abcd",
  chain: "ethereum"
});
```

## Input
- `contractAddress` (string) — the contract address to read
- `chain` (string) — ethereum | polygon | bsc

## Output
```json
{
  "functions": [...],
  "events": [...],
  "stateVariables": [...]
}
```

## Price
1.50 USDC per call

## Author
Skillnet Verified Seller