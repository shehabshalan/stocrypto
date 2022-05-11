import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
function AssetCard() {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div>
          <CardMedia
            component="img"
            height="100"
            width="100%"
            image={"https://via.placeholder.com/150?text=asset"}
            alt="alt"
          />
        </div>

        <CardContent style={{ marginTop: "-10px", textAlign: "left" }}>
          <Typography gutterBottom variant="h6" component="h5">
            H
          </Typography>
          <Typography variant="body2" color="text.secondary">
            h
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default AssetCard;
