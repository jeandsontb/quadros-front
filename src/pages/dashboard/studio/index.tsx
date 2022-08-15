import { Box, Grid } from "@mui/material";
import React from "react";
import { CrmAward } from "../../../components/CrmAward";

const Studio = () => {
  return (
    <Box>
      <Grid container spacing={6} className="match-height">
        <Grid item xs={12} md={4}>
          <CrmAward />
        </Grid>
      </Grid>

      <Grid item xs={6} sm={3} md={2}></Grid>
    </Box>
  );
};

export default Studio;
