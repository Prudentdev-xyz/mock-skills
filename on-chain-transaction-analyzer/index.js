const axios = require("axios");
const { ethers } = require("ethers");

async function run({ txHash, chain = "ethereum" }) {
  const PROVIDERS = {
    ethereum: "https://eth.public-rpc.com",
    polygon: "https://polygon-rpc.com",
    bsc: "https://bsc-dataseed.binance.org",
  };

  try {
    const provider = new ethers.JsonRpcProvider(PROVIDERS[chain]);
    const tx = await provider.getTransaction(txHash);
    const receipt = await provider.getTransactionReceipt(txHash);

    const valueInEth = ethers.formatEther(tx.value);
    const summary = `Transferred ${valueInEth} ETH from ${tx.from} to ${tx.to} on ${chain}. Gas used: ${receipt.gasUsed.toString()}.`;

    return {
      success: true,
      from: tx.from,
      to: tx.to,
      value: `${valueInEth} ETH`,
      gasUsed: receipt.gasUsed.toString(),
      blockNumber: receipt.blockNumber,
      status: receipt.status === 1 ? "Success" : "Failed",
      summary,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

module.exports = { run };