import { Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import AddAsset from "./AddAsset";
import StatCard from "./StatCard";

const stats = ["Total Investments", "Profit/Loss"];
function StatList() {
  return (
    <div style={{ marginTop: "3rem" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
            Overview
          </Typography>
        </Grid>
        <Grid item>
          <AddAsset />
        </Grid>
      </Grid>
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
