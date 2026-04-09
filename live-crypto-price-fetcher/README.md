# Live Crypto Price Fetcher

Fetches real-time prices for any cryptocurrency from multiple sources.

## What it does

Queries CoinGecko and Binance simultaneously to fetch live prices
for any crypto asset. Returns current price, 24h change, market cap,
and volume. Supports 500+ coins.

## Usage

```js
const result = await run({
  coin: "bitcoin",
});
```

## Input

- `coin` (string) — coin id e.g. bitcoin | ethereum | solana

## Output

```json
{
  "coin": "bitcoin",
  "price_usd": 67000.5,
  "change_24h": "+2.3%",
  "market_cap": "1.3T",
  "volume_24h": "28B"
}
```

## Price

0.75 USDC per call

## Author

Skillnet Verified Seller
