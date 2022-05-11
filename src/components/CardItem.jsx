import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";

const Item = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
function CardItem({ item }) {
  return (
    <Item item xs={12}>
      <Typography gutterBottom variant="subtitle2">
        {item}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        0.03
      </Typography>
    </Item>
  );
}

export default CardItem;
