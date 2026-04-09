const { ethers } = require("ethers");

async function run({ walletAddress }) {
  const PROVIDERS = {
    ethereum: "https://eth.public-rpc.com",
    polygon: "https://polygon-rpc.com",
    bsc: "https://bsc-dataseed.binance.org",
  };

  try {
    const results = {};

    for (const [chain, rpc] of Object.entries(PROVIDERS)) {
      const provider = new ethers.JsonRpcProvider(rpc);
      const balance = await provider.getBalance(walletAddress);
      results[chain] = {
        nativeBalance: ethers.formatEther(balance),
        address: walletAddress,
      };
    }

    return { success: true, wallet: walletAddress, balances: results };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

module.exports = { run };