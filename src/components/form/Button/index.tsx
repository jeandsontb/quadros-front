import { CircularProgress } from "@mui/material";
import {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
} from "react";
import { EnumButtonVariant } from "../../../assets/config/ButtonVariant";
import S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children: ReactNode;
  containerClass?: string;
  variant?: any;
  fontSize?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  padding?: string;
  loading?: boolean;
  loadingSize?: number;
  mb?: string;
  disabled?: boolean;
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    children,
    containerClass,
    variant = EnumButtonVariant.FILLED_DEFAULT,
    fontSize,
    borderRadius,
    width,
    height,
    padding,
    loading,
    loadingSize,
    mb,
    disabled,
    ...rest
  }: ButtonProps,
  ref
) => {
  return (
    <S.Container disabled={disabled} mb={mb} width={width} height={height}>
      <S.ButtonComponent
        {...rest}
        fontSize={fontSize}
        borderRadius={borderRadius}
        padding={padding}
        variant={variant}
        ref={ref}
        disabled={loading || disabled}
        isLoading={loading}
      >
        <S.LoadingComponent
          className="circularProgress"
          show={loading}
          btnVariant={variant}
        >
          <CircularProgress color="inherit" size={loadingSize || 16} />
        </S.LoadingComponent>
        <div>{children}</div>
      </S.ButtonComponent>
    </S.Container>
  );
};

export const ButtonCustom = forwardRef(ButtonBase);
