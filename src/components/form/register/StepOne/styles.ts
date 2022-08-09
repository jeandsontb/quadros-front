import { Box } from "@mui/material";
import styled from "styled-components";

type ComponentProps = {
  effect: string;
};

export default {
  StepAnimation: styled(Box)<ComponentProps>`
    min-height: ${({ effect }) => (effect === "cpf" ? "400px" : "500px")};
    max-height: ${({ effect }) => (effect === "cpf" ? "520px" : "700px")};
    transition: all ease 0.5s;
  `,
  FormCnpj: styled(Box)<ComponentProps>`
    visibility: ${({ effect }) => (effect === "cpf" ? "hidden" : "visible")};
    height: ${({ effect }) => (effect === "cpf" ? "0" : "auto")};
    opacity: ${({ effect }) => (effect === "cpf" ? "0" : "1")};
    transition: all ease 0.3s;
  `,
};
