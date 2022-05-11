import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  width: 200,
  height: 200,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function StatCard() {
  return (
    <Item>
      <Typography variant="h5">StatCard</Typography>
    </Item>
  );
}

export default StatCard;
