function getSum(array, key) {
  if (key === "purchase_price_per_asset") {
    return array.reduce((a, b) => a + b.purchase_price_per_asset, 0).toFixed(2);
  } else if (key === "asset_value") {
    return array.reduce((a, b) => a + b.asset_value, 0).toFixed(2);
  }
}
export default getSum;
