import { Box, Grid } from "@mui/material";
import React from "react";
import { CrmAward } from "../../../components/CrmAward";
import { CrmTotalGrowth } from "../../../components/dashboard/CrmTotalGrowth";
import { LinearProgressLine } from "../../../components/dashboard/LinearProgress";
import { AnalyticsSessions } from "../../../components/dashboard/Sessions";
import { LayoutMenu } from "../../../components/Layouts/LayoutMenu";

const Studio = () => {
  return (
    <LayoutMenu>
      <Box>
        <Grid container spacing={6} className="match-height">
          <Grid item xs={12} md={4}>
            <CrmAward />
          </Grid>
        </Grid>

        <CrmTotalGrowth />

        <AnalyticsSessions />

        <Grid item xs={6} sm={3} md={2} padding={10}>
          <LinearProgressLine />
        </Grid>
      </Box>
    </LayoutMenu>
  );
};

export default Studio;
