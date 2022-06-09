import getCurrentPriceByCoinKey from "./getCurrentPriceByCoinKey";
function profitLoss(purchasePrice, quantity, coinKey) {
  const currentPriceByCoinKey = getCurrentPriceByCoinKey(coinKey);
  const profitLoss = quantity * (currentPriceByCoinKey - purchasePrice);
  return profitLoss.toFixed(2);
}
export default profitLoss;
