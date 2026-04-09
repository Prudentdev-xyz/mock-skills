const axios = require("axios");

async function run({ token = "USDC" }) {
  try {
    const aaveRes = await axios.get(
      "https://aave-api-v2.aave.com/data/liquidity/v2?poolId=0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5"
    );

    const aaveReserves = aaveRes.data.filter((r) =>
      r.symbol.toUpperCase().includes(token.toUpperCase())
    );

    const opportunities = aaveReserves.map((r) => ({
      protocol: "Aave v2",
      token: r.symbol,
      supply_apy: `${(parseFloat(r.liquidityRate) * 100).toFixed(2)}%`,
      borrow_apy: `${(parseFloat(r.variableBorrowRate) * 100).toFixed(2)}%`,
      tvl: r.totalLiquidity,
      risk: "Low",
    }));

    return { success: true, token, opportunities };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

module.exports = { run };