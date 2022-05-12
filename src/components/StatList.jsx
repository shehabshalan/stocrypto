import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import StatCard from "./StatCard";

const stats = ["Total Investments", "Net Worth", "Profit/Loss"];
function StatList() {
  return (
    <div style={{ marginTop: "3rem" }}>
      <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
        Overview
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
        justifyContent="space-evenly"
      >
        {stats.map((stat, i) => (
          <StatCard stat={stat} index={i} />
        ))}
      </Stack>
    </div>
  );
}

export default StatList;
