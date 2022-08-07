import Link from "next/link";
import { NextPage } from "next";
import Head from "next/head";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";

import S from "../styles/page/login";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import {
  EyeOutline,
  EyeOffOutline,

  // Google,
  // Github,
  // Twitter,
  // Facebook
} from "mdi-material-ui";
import MuiLink from "@mui/material/Link";
import { toast } from "react-toastify";
import { CustomToast } from "../components/CustomTostfy";
import { ButtonCustom } from "../components/form/Button";
import { EnumButtonVariant } from "../assets/config/ButtonVariant";
import { LayoutAccess } from "../components/Layouts/LayoutAccess";
import { useState } from "react";

const defaultValues = {
  email: "",
  password: "",
};
interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail não é válido")
    .required("Campo e-mail obrigatório"),
  password: yup
    .string()
    .min(5, "Mínimo 8 caracteres")
    .required("Campo senha obrigatório"),
});

const LoginPage: NextPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
      <S.Container>
        <Head>
          <title>Online Quadros</title>

          <meta name="description" content="Online quadros" />
        </Head>

        <S.Content>
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <S.TypographyStyled variant="h5">
              Bem-vindo ao Online Quadros! 📸
            </S.TypographyStyled>
            <S.TextInfo variant="body2">
              Faça login na sua conta e comece a aventura
            </S.TextInfo>
          </Box>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <FormControl fullWidth sx={{ mb: 2 }}>
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

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel
                htmlFor="auth-login-v2-password"
                error={Boolean(errors.password)}
              >
                Password
              </InputLabel>
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <OutlinedInput
                    value={value}
                    onBlur={onBlur}
                    label="Password"
                    onChange={onChange}
                    id="auth-login-v2-password"
                    error={Boolean(errors.password)}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                )}
              />
              {errors.password && (
                <FormHelperText sx={{ color: "error.main" }} id="">
                  {errors.password.message}
                </FormHelperText>
              )}
            </FormControl>

            <S.BoxRememberAndForgotPassword>
              <S.FormControlLabel
                label="Lembrar-me"
                control={<Checkbox />}
                sx={{ color: "var(--gray-400)" }}
              />
              <Link passHref href="/forgot-password">
                <Typography
                  component={MuiLink}
                  variant="body2"
                  sx={{ color: "var(--main)" }}
                >
                  Esqueci minha senha?
                </Typography>
              </Link>
            </S.BoxRememberAndForgotPassword>

            <ButtonCustom
              title="Entrar"
              variant={EnumButtonVariant.FILLED_SECONDARY}
              type="submit"
            >
              ENTRAR
            </ButtonCustom>
          </form>
          <S.BoxRedirectRegister>
            <Typography sx={{ mr: 2, color: "var(--gray-400)" }}>
              Ainda não tem conta?
            </Typography>
            <Typography>
              <Link passHref href="/register">
                <a>Criar uma conta grátis</a>
              </Link>
            </Typography>
          </S.BoxRedirectRegister>
        </S.Content>
      </S.Container>
    </LayoutAccess>
  );
};

export default LoginPage;
