import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

import S from "./styles";

const CrmAward = () => {
  return (
    <Card sx={{ position: "relative" }}>
      <CardContent>
        <Typography variant="h6">
          Congratulations{" "}
          <Box component="span" sx={{ fontWeight: "bold" }}>
            Norris
          </Box>
          ! 🎉
        </Typography>
        <Typography variant="body2" sx={{ mb: 3.25 }}>
          Best seller of the month
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: "primary.main" }}
        >
          $42.8k
        </Typography>
        <Typography variant="body2" sx={{ mb: 3.25 }}>
          78% of target 🤟🏻
        </Typography>
        <Button size="small" variant="contained">
          View Sales
        </Button>
        <Box>
          <S.TrophyImg alt="trophy" src="/images/cards/trophy.png" />
        </Box>
      </CardContent>
    </Card>
  );
};

export { CrmAward };
