import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CustomToast } from "../../components/CustomTostfy";
import { StepFour } from "../../components/form/register/StepFour";
import { StepOne } from "../../components/form/register/StepOne";
import { StepThree } from "../../components/form/register/StepThree";
import { StepTwo } from "../../components/form/register/StepTwo";
import { LayoutAccess } from "../../components/Layouts/LayoutAccess";
import { useCreateRegisterUser } from "../../hooks/useRegisterUser/useRegisterUsers";

import S from "../../styles/page/register";
import { ICreateUserDTO } from "../../types/register-and-auth-user";
import { removeMaskCpfOrCnpjOrPhone } from "../../utils/masks/cpf";
import MuiLink from "@mui/material/Link";

const Register = () => {
  const [stepForm, setStepForm] = useState<number>(1);
  const [objectStep, setObjectStep] = useState<ICreateUserDTO>(
    {} as ICreateUserDTO
  );
  const [sendForm, setSendForm] = useState(false);

  const { mutateAsync: createRegisterUser } = useCreateRegisterUser();
  const router = useRouter();

  useEffect(() => {
    setStepForm(1);
  }, []);

  const stepFormActive: any = {
    1: (
      <StepOne
        setStepForm={setStepForm}
        objectStep={objectStep}
        setObjectStep={setObjectStep}
      />
    ),
    2: (
      <StepTwo
        setStepForm={setStepForm}
        objectStep={objectStep}
        setObjectStep={setObjectStep}
      />
    ),
    3: (
      <StepThree
        setStepForm={setStepForm}
        objectStep={objectStep}
        setObjectStep={setObjectStep}
      />
    ),
    4: (
      <StepFour
        setStepForm={setStepForm}
        objectStep={objectStep}
        setObjectStep={setObjectStep}
        sendForm={setSendForm}
      />
    ),
  };

  const sendRegitsterCompleteUser = async () => {
    const payload: ICreateUserDTO = {
      ...objectStep,
      cpf: removeMaskCpfOrCnpjOrPhone(objectStep.cpf),
      cnpj: removeMaskCpfOrCnpjOrPhone(objectStep.cnpj),
      phone: removeMaskCpfOrCnpjOrPhone(objectStep.phone),
      login_notification: false,
      role: "studio",
    };

    const { response } = await createRegisterUser(payload);

    if (response?.data?.error) {
      toast(
        <CustomToast
          status="warn"
          title="Falha!"
          message={response.data.message}
        />
      );
      setSendForm(false);

      return;
    }

    toast(
      <CustomToast
        status="success"
        title="Parabéns!"
        message="Bem vindo a família Online Quadros"
      />
    );
    setSendForm(false);
    router.replace("/validation-email");
  };

  useEffect(() => {
    if (stepForm === 4 && sendForm === true) {
      sendRegitsterCompleteUser();
    }
  }, [stepForm, sendForm]);

  return (
    <LayoutAccess>
      <Head>
        <title>Cadastro | Online Quadros</title>

        <meta name="description" content="Online quadros" />
      </Head>
      <S.BoxWrapper>
        <Box sx={{ mb: 3, textAlign: "center" }}>
          <S.TypographyStyled variant="h5">
            Mais vendas com suas fotos 🚀
          </S.TypographyStyled>
          <S.TypographySubtitle variant="body2">
            Torne o gerenciamento do seu estúdio fácil e divertido!
          </S.TypographySubtitle>
        </Box>

        {/* FORMULÁRIOS DE REGISTRO */}
        {stepFormActive[stepForm]}

        <S.BoxRedirectPage>
          <Typography sx={{ mr: 2, color: "var(--gray-400)" }}>
            Já tem uma conta?
          </Typography>
          <Typography>
            <Link passHref href="/login">
              <Typography component={MuiLink} sx={{ color: "var(--main)" }}>
                Fazer login!
              </Typography>
            </Link>
          </Typography>
        </S.BoxRedirectPage>
      </S.BoxWrapper>
    </LayoutAccess>
  );
};

export default Register;
