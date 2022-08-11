import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export default {
  BoxFormsValidations: styled(Box)`
    display: flex;
  `,
  BoxSeparator: styled("div")`
    margin-right: 15px;

    :last-child {
      margin-right: 0;
    }
  `,
};
