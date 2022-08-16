import React from "react";
import { LinearProgress } from "@mui/material";

const LinearProgressLine = () => {
  return (
    <LinearProgress
      value={24}
      variant="determinate"
      sx={{
        height: 10,
        "&.MuiLinearProgress-colorPrimary": {
          backgroundColor: "var(--blue-l-200)",
        },
        "& .MuiLinearProgress-bar": {
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: "var(var(--blue-l-400))",
        },
        borderRadius: 10,
      }}
    />
  );
};

export { LinearProgressLine };
