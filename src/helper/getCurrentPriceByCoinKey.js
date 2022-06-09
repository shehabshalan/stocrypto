function getCurrentPriceByCoinKey(coinKey) {
  const url = `https://api.coingecko.com/api/v3/coins/${coinKey}`;
  let currentPriceByCoinKey = 0;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      currentPriceByCoinKey = data.market_data.current_price.usd;
      return data.market_data.current_price.usd;
    });
  return currentPriceByCoinKey;
}
export default getCurrentPriceByCoinKey;
