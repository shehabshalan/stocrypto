import React from "react";
import { Typography, Grid } from "@mui/material";

import AssetCard from "./AssetCard";
function AssetList() {
  return (
    <div>
      <Typography variant="h5" align="left" sx={{ marginBottom: "2rem" }}>
        Assets list
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        columns={12}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((video) => (
          <AssetCard />
        ))}
      </Grid>
    </div>
  );
}

export default AssetList;
