import { Box } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CustomToast } from "../../components/CustomTostfy";
import { CodeValidation } from "../../components/form/CodeValidation";
import { LayoutAccess } from "../../components/Layouts/LayoutAccess";
import {
  useGetCodeValidationEmail,
  useUpdateAccessCodeRegisterUser,
} from "../../hooks/useRegisterUser/useRegisterUsers";
import S from "../../styles/page/validation-email";

const ValidationEmail = () => {
  const [stepForm, setStepForm] = useState<number>(1);
  const [codeConfirmation, setCodeConfirmation] = useState("");

  const router = useRouter();

  // FUNÇÃO DO REACT-QUERY PARA BUSCAR E VERIFICAR SE EXISTE UM CÓDIGO VÁLIDO
  const {
    data: codeExistsConfirm,
    isLoading,
    isError,
  } = useGetCodeValidationEmail({
    codeInformed: codeConfirmation,
    options: {
      retry: false,
    },
  });

  // FUNÇÃO DO REACT-QUERY PARA ATUALIZAR E AUTORIZAR O ACESSO DO USUÁRIO NO SISTEMA
  const { mutateAsync: updatedAccountAndAuthorizedUser } =
    useUpdateAccessCodeRegisterUser();

  // FUNÇÃO RECEBE O CÓDIGO E PASSA PARA O STATE ONDE RENDERIZA A PÁGINA E ACIONA O HOOK
  const HandleValidadeCode = (code: string) => {
    setCodeConfirmation(code);
  };

  // FUNÇÃO PARA VERIFICAR SE O CÓDIGO É VÁLIDO E RETORNAR A MENSAGEM E DIRECIONAMENTO
  const showInformationValidationCodeEmail = () => {
    if (codeExistsConfirm === undefined && isError) {
      toast(
        <CustomToast
          status="error"
          title="Erro!"
          message="Código informado não é válido."
        />
      );

      return;
    }

    if (codeExistsConfirm) {
      toast(
        <CustomToast
          status="success"
          title="Sucesso!"
          message="E-mail validado com sucesso.."
        />
      );
      router.replace("/login");

      // CHAMADA DA MUTATION DO REACT-QUERY PASSANDO O CÓDIGO
      updatedAccountAndAuthorizedUser(codeConfirmation);

      return;
    }
  };

  // VERIFICADOR DE ESTADO DO HOOK PARA CHAMAR A FUNÇÃO
  useEffect(() => {
    showInformationValidationCodeEmail();
  }, [codeExistsConfirm, isError]);

  // OBJETO ONDE FILTRA OS COMPONENTES A SER RENDERIZADOS NA TELA
  const stepFormActive: any = {
    1: (
      <CodeValidation
        code={(code) => HandleValidadeCode(code)}
        isLoading={isLoading}
      />
    ),
  };

  // CHAMA O STEP DO FORMULÁRIO
  useEffect(() => {
    setStepForm(1);
  }, []);

  return (
    <LayoutAccess>
      <Head>
        <title>Cadastro | Online Quadros</title>

        <meta name="description" content="Online quadros" />
      </Head>
      <S.BoxWrapper>
        <Box sx={{ mb: 3, textAlign: "center" }}>
          <S.TypographyStyled variant="h5">
            Confirme seu e-mail 🚀
          </S.TypographyStyled>
          <S.TypographySubtitle variant="body2">
            Verifique seu e-mail e informe o código solicitado!
          </S.TypographySubtitle>
        </Box>

        {/* FORMULÁRIO PARA OS INPUTS  */}
        {stepFormActive[stepForm]}
      </S.BoxWrapper>
    </LayoutAccess>
  );
};

export default ValidationEmail;
