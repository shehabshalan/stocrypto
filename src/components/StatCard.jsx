import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import DataContext from "../context/DataContext";
import getSum from "../helper/getSum";
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

const Heading = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  color: theme.palette.text.primary,
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
}));

function StatCard({ stat, index }) {
  const { userData } = useContext(DataContext);
  const subheading = [
    getSum(userData, "asset_value"),
    getSum(userData, "asset_value"),
    0,
  ];

  return (
    <Item>
      <Heading>{stat}</Heading>
      <SubHeading>${subheading[index]}</SubHeading>
    </Item>
  );
}

export default StatCard;
