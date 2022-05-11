import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  width: "100%",
  height: 200,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function StatCard({ stat }) {
  return (
    <Item>
      <Typography variant="h5" sx={{ marginBottom: 3 }}>
        {stat}
      </Typography>
      <Typography variant="body2">{stat}</Typography>
    </Item>
  );
}

export default StatCard;
