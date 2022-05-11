import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5">Page not found</Typography>
      <br />
      <br />
      <Typography variant="body2">
        Taking you back in 3 seconds or click in the button below to go back
      </Typography>
      <br />
      <Button variant="outlined" onClick={() => navigate("/")}>
        Go back
      </Button>
    </Box>
  );
}

export default NotFound;
