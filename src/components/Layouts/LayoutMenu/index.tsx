import { ReactNode } from "react";
import S from "./styles";

interface ILayoutProps {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
    | ReactNode
    | ReactNode[];
}

const LayoutMenu = ({ children }: ILayoutProps) => {
  return (
    <S.Container>
      <p>sdls</p>

      {children}
    </S.Container>
  );
};

export { LayoutMenu };
