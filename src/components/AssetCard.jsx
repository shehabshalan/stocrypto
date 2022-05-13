import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Divider, CardActions, IconButton } from "@mui/material";
import CardItem from "./CardItem";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DataContext from "../context/DataContext";

const cardItems = [
  "Quantity",
  "Purchase Price Per Asset",
  "Asset Value",
  "Profit/Loss",
];
function AssetCard({ data }) {
  const { handleDelete } = useContext(DataContext);
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
        <Divider />

        <CardActions>
          <IconButton
            aria-label="add to favorites"
            onClick={() => handleDelete(data.id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
          <IconButton aria-label="share">
            <EditIcon sx={{ color: "green" }} />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default AssetCard;
