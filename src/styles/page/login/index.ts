import { Typography, TypographyProps } from "@mui/material";
import MuiFormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import styled from "styled-components";

export default {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    max-width: 592px;
    height: auto;
  `,
  Content: styled.div`
    max-width: 592px;
  `,
  TypographyStyled: styled(Typography)<TypographyProps>`
    font-weight: 600;
    letter-spacing: 0.18px;
    font-size: 1.5rem;
    line-height: 35px;
    color: var(--gray-500);
  `,
  TextInfo: styled(Typography)<TypographyProps>`
    color: var(--gray-400);
  `,
  BoxRememberAndForgotPassword: styled.div`
    display: flex;
    margin-bottom: 4px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  `,
  FormControlLabel: styled(MuiFormControlLabel)<FormControlLabelProps>`
    font-size: 0.875rem;
  `,
  BoxRedirectRegister: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 28px 0;
    color: var(--gray-400);

    a {
      color: var(--main);

      :hover {
        text-decoration: underline;
      }
    }
  `,
};
