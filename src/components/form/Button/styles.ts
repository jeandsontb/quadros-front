import { ButtonBase } from "@mui/material";
import styled, { css } from "styled-components";
import { buttonVariant } from "../../../assets/config/ButtonVariant";

type ContainerProps = {
  mb?: string;
  disabled?: boolean;
  width?: string;
  height?: string;
};

type ButtonComponentProps = {
  variant?: any;
  fontSize?: string;
  borderRadius?: string;
  padding?: string;
  isLoading?: boolean;
};

type LoadingComponentProps = {
  show?: boolean;
  btnVariant: any;
};

export default {
  Container: styled.div<ContainerProps>`
    cursor: ${(props) => props.disabled && "not-allowed !important"};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: ${(props) => (props.height ? props.height : "2.625rem")};
    width: ${(props) => (props.width ? props.width : "100%")};
    text-decoration: none;
    margin-bottom: ${(props) => props.mb};
    flex-shrink: 0;
  `,
  ButtonComponent: styled(ButtonBase)<ButtonComponentProps>`
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-weight: 500 !important;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "0.938rem")};
    line-height: 1.375rem !important;
    padding: ${(props) =>
      props.padding ? `${props.padding} !important` : "0 0.813rem !important"};
    background: ${(props) =>
      buttonVariant[props.variant].backgroundColor} !important;
    color: ${(props) => buttonVariant[props.variant].color} !important;
    min-width: max-content;
    width: 100% !important;
    height: 100% !important;
    border: 2px solid ${(props) => buttonVariant[props.variant].borderColor} !important;
    border-radius: ${(props) =>
      props.borderRadius ? props.borderRadius : "5px"} !important;
    text-decoration: none !important;
    transition: all 0.3s !important;
    gap: 0.313rem !important;

    > div {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 0.313rem !important;

      > svg {
        color: ${(props) =>
          props.isLoading
            ? "transparent"
            : buttonVariant[props.variant].color} !important;
      }
    }

    svg {
      transition: all 0.3s !important;
      color: ${(props) => buttonVariant[props.variant].color} !important;
    }

    ${({ isLoading }) =>
      isLoading &&
      css`
        color: transparent !important;
      `}

    &:not(:disabled):hover {
      background: ${(props) =>
        buttonVariant[props.variant].hover.backgroundColor} !important;
      border-color: ${(props) =>
        buttonVariant[props.variant].hover.borderColor} !important;
      color: ${(props) => buttonVariant[props.variant].hover.color} !important;

      svg {
        color: ${(props) =>
          buttonVariant[props.variant].hover.color} !important;
      }
    }

    &:disabled {
      opacity: 0.5 !important;
    }
  `,
  LoadingComponent: styled.div<LoadingComponentProps>`
    ${({ show, btnVariant }) =>
      css`
        color: ${buttonVariant[btnVariant].color} !important;
        position: absolute;
        inset: 0;
        visibility: ${show ? "visible" : "hidden"};
        display: flex;
        align-items: center;
        justify-content: center;
      `}
  `,
};
