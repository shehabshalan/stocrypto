import React, { useContext } from "react";
import { Typography, Grid, Box } from "@mui/material";
import DataContext from "../context/DataContext";

import AssetCard from "./AssetCard";
function AssetList() {
  const { userData } = useContext(DataContext);

  return (
    <Box sx={{ marginBottom: "3rem" }}>
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
        {userData.map((data) => (
          <AssetCard data={data} />
        ))}
      </Grid>
    </Box>
  );
}

export default AssetList;
