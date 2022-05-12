import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";

const Item = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
function CardItem({ item, data }) {
  return (
    <Item item xs={12}>
      <Typography gutterBottom variant="subtitle2">
        {item}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item === "Asset Value" && `$ ${data.asset_value}`}
        {item === "Profit/Loss" && `$ ${data.profit_loss}`}
        {item === "Price" && ` $ ${data.asset_price}`}
        {item === "Quantity" && ` ${data.asset_quantity}`}
      </Typography>
    </Item>
  );
}

export default CardItem;
