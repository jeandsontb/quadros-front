import React, { ReactNode } from "react";
import S from "./styles";

interface ChildrenProps {
  children: ReactNode;
}

const LayoutAccess = ({ children }: ChildrenProps) => {
  const backgroundTemplate = "personal-icons/mask-auth-under.png";
  const imageComplementTemplate = "personal-icons/under.png";

  return (
    <S.Container>
      <S.Content>
        <S.BoxBackgroundImage>
          <S.BackgroundImage src={backgroundTemplate} alt="background imagem" />
          <S.ImageUnder src={imageComplementTemplate} alt="imagem under" />
        </S.BoxBackgroundImage>
      </S.Content>
      <S.BoxContentActions>{children}</S.BoxContentActions>
    </S.Container>
  );
};

export { LayoutAccess };
