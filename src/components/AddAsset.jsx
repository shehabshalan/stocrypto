import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import { Grid, TextField, Typography, Autocomplete } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "70%", md: "30%" },
  bgcolor: "background.paper",
  borderRadius: "5px",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function AddAsset() {
  // position: "fixed", bottom: 4, right: 100, m: 1
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [totalSpent, setTotalSpente] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [pricePerAsset, setPricePerAsset] = useState(0);

  useEffect(() => {
    setTotalSpente((quantity * pricePerAsset).toFixed(2));
  }, [quantity, pricePerAsset]);

  const top100Films = [
    { label: "Bitcoin", price: 29133.97 },
    { label: "Ethereum", price: 20000 },
    { label: "Litecoin", price: 10000 },
    { label: "Bitcoin a", price: 10000 },
    { label: "Ethereum Classic", price: 10000 },
    { label: "Stellar", price: 10000 },
    { label: "Cardano", price: 10000 },
    { label: "Tether", price: 10000 },
    { label: "Monero", price: 10000 },
    { label: "Nano", price: 10000 },
    { label: "IOTA", price: 10000 },
    { label: "TRON", price: 10000 },
    { label: "META", price: 203 },
    { label: "AAPL", price: Math.floor(Math.random() * 100) },
    { label: "AMZN", price: Math.floor(Math.random() * 100) },
    { label: "GOOGL", price: Math.floor(Math.random() * 100) },
    { label: "MSFT", price: Math.floor(Math.random() * 100) },
    { label: "FB", price: Math.floor(Math.random() * 100) },
    { label: "TWTR", price: Math.floor(Math.random() * 100) },
    { label: "INTC", price: Math.floor(Math.random() * 100) },
    { label: "AMD", price: Math.floor(Math.random() * 100) },
  ];
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          top: "auto",
          left: 0,
          right: 0,
          marginBottom: "1rem",
        }}
      >
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add asset
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                fullWidth
                onChange={(event, value) => {
                  setPricePerAsset(value.price);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Asset" />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Quantity"
                focused
                variant="outlined"
                onChange={(e) => setQuantity(e.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Price Per Asset"
                variant="outlined"
                focused
                value={pricePerAsset}
                onChange={(e) => setPricePerAsset(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  borderRadius: "10px",
                  backgroundColor: "#eef2f5",
                  padding: "1rem",
                  height: "3rem",
                  marginBottom: "1rem",
                }}
              >
                <Typography variant="h6">Total spent:</Typography>
                <Typography variant="body2" color="text.secondary">
                  {`$ ${totalSpent}`}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <LoadingButton fullWidth variant="contained" color="primary">
                Add
              </LoadingButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}

export default AddAsset;
