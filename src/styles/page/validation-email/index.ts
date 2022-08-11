import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import styled from "styled-components";
import MuiFormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";

export default {
  BoxWrapper: styled(Box)<BoxProps>`
    width: 100%;
  `,
  TypographyStyled: styled(Typography)<TypographyProps>`
    letter-spacing: 0.18px;
    margin-bottom: 0.2rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--gray-500);
  `,
  TypographySubtitle: styled(Typography)<TypographyProps>`
    font-size: 0.875;
    font-weight: 400;
    color: var(--gray-400);
  `,
  // FormControlLabel: styled(MuiFormControlLabel)<FormControlLabelProps>`
  //   font-size: 0.875rem;
  //   color: var(--gray-400);
  // `,
  // BoxRedirectPage: styled(Box)<BoxProps>`
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: center;
  //   align-items: center;
  //   margin-top: 1rem;
  // `,
};
