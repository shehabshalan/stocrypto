import { Container, Divider } from "@mui/material";
import React from "react";
import AddAsset from "../components/AddAsset";
import AssetList from "../components/AssetList";
import Navbar from "../components/Navbar";
import StatList from "../components/StatList";
function Home() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <StatList />
        <Divider sx={{ marginTop: "2rem", marginBottom: "2rem" }} />
        <AssetList />
        <AddAsset />
      </Container>
    </div>
  );
}

export default Home;
