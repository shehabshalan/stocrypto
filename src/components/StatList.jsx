import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import StatCard from "./StatCard";

function StatList() {
  return (
    <div style={{ marginTop: "3rem" }}>
      <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
        Overview
      </Typography>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
        justifyContent="space-evenly"
      >
        {[0, 1, 2, 3].map((i) => (
          <StatCard />
        ))}
      </Stack>
    </div>
  );
}

export default StatList;
