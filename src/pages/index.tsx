import { NextPage } from "next";
import Head from "next/head";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";

import S from "../styles/page/login";
import { Button, FormControl, FormHelperText, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { CustomToast } from "../components/CustomTostfy";
import { ButtonCustom } from "../components/form/Button";
import { EnumButtonVariant } from "../assets/config/ButtonVariant";
import { LayoutAccess } from "../components/Layouts/LayoutAccess";

const defaultValues = {
  email: "",
  // password: "",
};
interface FormData {
  email: string;
  // password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail não é válido")
    .required("Campo e-mail obrigatório"),
  // password: yup.string().min(5).required('Campo senha obrigatório')
});

const LoginPage: NextPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSignIn = async (data: FormData) => {
    console.log(data);
    toast(<CustomToast status="warn" title="top" message="muito top" />);
  };

  return (
    <LayoutAccess>
      {/* <S.Container>
        <Head>
          <title>Online Quadros</title>

          <meta name="description" content="Online quadros" />
        </Head>

        <S.Content>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    label="Email"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.email)}
                  />
                )}
              />
              {errors.email && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.email.message}
                </FormHelperText>
              )}
            </FormControl>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{ mb: 7, background: "#26C6F9" }}
            >
              Entrar
            </Button>

            <ButtonCustom
              title="Crie uma conta"
              variant={EnumButtonVariant.FILLED_SECONDARY}
              height="3.438rem"
              type="submit"
            >
              Crie uma conta
            </ButtonCustom>
          </form>
        </S.Content>
      </S.Container> */}
    </LayoutAccess>
  );
};

export default LoginPage;
