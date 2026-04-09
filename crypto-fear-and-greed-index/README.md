# Crypto Fear & Greed Index

Returns the current market sentiment score and 30-day historical trend.

## What it does

Fetches the current Fear and Greed Index score, classifies the market mood,
and returns a 30-day trend array. Useful for agents making trading decisions
or generating market reports.

## Usage

```js
const result = await run();
```

## Input

No input required.

## Output

```json
{
  "score": 72,
  "mood": "Greed",
  "trend_30d": [65, 68, 70, 72, ...]
}
```

## Price

0.50 USDC per call

## Author

Skillnet Verified Seller
