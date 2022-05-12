import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import CardItem from "./CardItem";

const cardItems = ["Quantity", "Price", "Asset Value", "Profit/Loss"];
function AssetCard({ data }) {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography sx={{ fontWeight: "bold" }} variant="h5" align="center">
            {data.asset_name}
          </Typography>
        </CardContent>
        <Divider />
        <Grid container spacing={1} padding={2}>
          {cardItems.map((item) => (
            <CardItem item={item} data={data} />
          ))}
        </Grid>
      </Card>
    </Grid>
  );
}

export default AssetCard;
