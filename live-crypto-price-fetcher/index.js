const axios = require("axios");

async function run({ coin = "bitcoin" }) {
  try {
    const [geckoRes, binanceRes] = await Promise.allSettled([
      axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`),
      axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${coin.toUpperCase()}USDT`),
    ]);

    const geckoData = geckoRes.status === "fulfilled" ? geckoRes.value.data : null;

    if (!geckoData) throw new Error("Could not fetch price data");

    return {
      success: true,
      coin,
      price_usd: geckoData.market_data.current_price.usd,
      change_24h: `${geckoData.market_data.price_change_percentage_24h.toFixed(2)}%`,
      market_cap: geckoData.market_data.market_cap.usd,
      volume_24h: geckoData.market_data.total_volume.usd,
      last_updated: geckoData.market_data.last_updated,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

module.exports = { run };