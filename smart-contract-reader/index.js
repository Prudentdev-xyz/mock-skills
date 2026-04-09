const axios = require("axios");

async function run({ contractAddress, chain = "ethereum" }) {
  const RPC_URLS = {
    ethereum: "https://eth.public-rpc.com",
    polygon: "https://polygon-rpc.com",
    bsc: "https://bsc-dataseed.binance.org",
  };

  const EXPLORER_APIS = {
    ethereum: `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}`,
    polygon: `https://api.polygonscan.com/api?module=contract&action=getabi&address=${contractAddress}`,
    bsc: `https://api.bscscan.com/api?module=contract&action=getabi&address=${contractAddress}`,
  };

  try {
    const response = await axios.get(EXPLORER_APIS[chain]);
    const abi = JSON.parse(response.data.result);

    const functions = abi.filter((item) => item.type === "function");
    const events = abi.filter((item) => item.type === "event");
    const stateVariables = abi.filter((item) => item.type === "constructor");

    return {
      success: true,
      contractAddress,
      chain,
      functions,
      events,
      stateVariables,
      totalItems: abi.length,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

module.exports = { run };