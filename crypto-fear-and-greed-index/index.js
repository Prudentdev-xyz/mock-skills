const axios = require("axios");

async function run() {
  try {
    const response = await axios.get("https://api.alternative.me/fng/?limit=30");
    const data = response.data.data;

    const current = data[0];
    const trend = data.map((d) => ({
      date: new Date(d.timestamp * 1000).toISOString().split("T")[0],
      score: parseInt(d.value),
      mood: d.value_classification,
    }));

    return {
      success: true,
      current_score: parseInt(current.value),
      current_mood: current.value_classification,
      trend_30d: trend,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

module.exports = { run };