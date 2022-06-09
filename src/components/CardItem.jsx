import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";

const Item = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
function CardItem({ item, data }) {
  const [pl, setPl] = React.useState(0);
  const { asset_key, asset_quantity, purchase_price_per_asset, asset_value } =
    data;

  function profitLoss(purchase_price_per_asset, asset_quantity, current_price) {
    const profitLoss =
      asset_quantity * (current_price - purchase_price_per_asset);
    setPl(profitLoss.toFixed(2));
  }
  function getCurrentPriceByCoinKey(coinKey) {
    const url = `https://api.coingecko.com/api/v3/coins/${coinKey}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let currentPrice = data.market_data.current_price.usd;
        profitLoss(purchase_price_per_asset, asset_quantity, currentPrice);
      });
  }

  useEffect(() => {
    getCurrentPriceByCoinKey(asset_key);
    //  eslint-disable-next-line
  }, [asset_key]);

  return (
    <Item item xs={12}>
      <Typography gutterBottom variant="subtitle2">
        {item}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item === "Asset Value" && `$ ${asset_value}`}
        {item === "Profit/Loss" && (
          <span style={{ color: pl < 0 ? "red" : "green" }}>$ {pl}</span>
        )}
        {item === "Purchase Price Per Asset" &&
          ` $ ${purchase_price_per_asset}`}
        {item === "Quantity" && ` ${asset_quantity}`}
      </Typography>
    </Item>
  );
}

export default CardItem;
