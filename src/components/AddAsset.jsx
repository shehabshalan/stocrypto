import React, { useContext } from "react";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import { Grid, TextField, Typography, Autocomplete } from "@mui/material";
import DataContext from "../context/DataContext";
import { LoadingButton } from "@mui/lab";
import AlertMessage from "./AlertMessage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "70%", md: "30%" },
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};
function AddAsset() {
  // position: "fixed", bottom: 4, right: 100, m: 1
  const {
    coins,
    totalSpent,
    setQuantity,
    pricePerAsset,
    setPricePerAsset,
    assetKey,
    setAssetKey,
    handleSubmit,
    setAssetName,
    open,
    setOpen,
    addLoading,
  } = useContext(DataContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          top: "auto",
          left: 0,
          // left: "70%",
          right: 0,
          marginBottom: "5rem",
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
        <Box sx={style} component="form" onSubmit={handleSubmit}>
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
                options={coins}
                fullWidth
                onChange={(event, value) => {
                  setPricePerAsset(value.price);
                  setAssetName(value.label);
                  setAssetKey(value.key);
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
              <LoadingButton
                fullWidth
                variant="contained"
                color="primary"
                loading={addLoading}
                type="submit"
              >
                Add
              </LoadingButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <AlertMessage />
    </Box>
  );
}

export default AddAsset;
