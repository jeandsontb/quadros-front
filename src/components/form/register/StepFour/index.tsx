import { useState, Fragment } from "react";
import {
  Box,
  Button,
  FormControl,
  Typography,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import { yupResolver } from "@hookform/resolvers/yup";
import { EyeOffOutline, EyeOutline } from "mdi-material-ui";
import { registerStepFour } from "../../../../utils/validators";
import { ButtonCustom } from "../../Button";
import { EnumButtonVariant } from "../../../../assets/config/ButtonVariant";

const defaultValues = {
  password: "",
  confirmPassword: "",
};
interface FormData {
  password: string;
}

type PropsForm = {
  setStepForm: React.Dispatch<React.SetStateAction<number>>;
  objectStep: any;
  setObjectStep: React.Dispatch<React.SetStateAction<any>>;
  sendForm: (statusForm: boolean) => void;
};

const StepFour = ({
  setStepForm,
  setObjectStep,
  objectStep,
  sendForm,
}: PropsForm) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] =
    useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(registerStepFour),
  });

  const onSubmit = (data: FormData) => {
    if (data.password.length > 0) {
      const objectForm = {
        ...objectStep,
        password: data.password,
      };

      setObjectStep({ ...objectForm });
      setStepForm(4);
      sendForm(true);
    }
  };

  return (
    <Fragment>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel
            htmlFor="auth-register-v2-password"
            error={Boolean(errors.password)}
          >
            Senha
          </InputLabel>
          <Controller
            name="password"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <OutlinedInput
                value={value}
                label="Senha"
                onBlur={onBlur}
                onChange={onChange}
                id="auth-register-v2-password"
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
            <FormHelperText sx={{ color: "var(--red-500)" }}>
              {errors.password.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }}>
          <InputLabel
            htmlFor="auth-confirm-v2-password"
            error={Boolean(errors.confirmPassword)}
          >
            Confirmar senha
          </InputLabel>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <OutlinedInput
                value={value}
                label="Confirmar senha"
                onBlur={onBlur}
                onChange={onChange}
                id="auth-confirm-v2-password"
                error={Boolean(errors.confirmPassword)}
                type={showPasswordConfirm ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() =>
                        setShowPasswordConfirm(!showPasswordConfirm)
                      }
                    >
                      {showPasswordConfirm ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            )}
          />
          {errors.confirmPassword && (
            <FormHelperText sx={{ color: "var(--red-500)" }}>
              {errors.confirmPassword.message}
            </FormHelperText>
          )}
        </FormControl>

        <ButtonCustom
          title="Concluir cadastro"
          variant={EnumButtonVariant.FILLED_SECONDARY}
          type="submit"
        >
          Concluir cadastro
        </ButtonCustom>
      </form>
    </Fragment>
  );
};

export { StepFour };
