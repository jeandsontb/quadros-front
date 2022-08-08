import { Fragment } from "react";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerStepTwo } from "../../../../utils/validators";
import { maskPhoneNumber } from "../../../../utils/masks/phone";

const defaultValues = {
  birthDate: "",
  phone: "",
  sex: "",
  segment: "",
};
interface FormData {
  birthDate: string;
  phone: string;
  sex: string;
  segment: string;
}

type PropsForm = {
  setStepForm: React.Dispatch<React.SetStateAction<number>>;
  objectStep: any;
  setObjectStep: React.Dispatch<React.SetStateAction<any>>;
};

const StepTwo = ({ setStepForm, setObjectStep, objectStep }: PropsForm) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(registerStepTwo),
  });

  const onSubmit = (data: FormData) => {
    const objectForm = {
      ...objectStep,
      birthDate: data.birthDate.trim(),
      phone: data.phone,
      sex: data.sex,
      segment: data.segment,
    };

    setObjectStep({ ...objectForm });
    setStepForm(3);
  };

  return (
    <Fragment>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ mb: 4 }}>
          <Controller
            name="birthDate"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                value={value}
                type="date"
                onBlur={onBlur}
                label="Data de Nascimento"
                InputLabelProps={{ shrink: true }}
                onChange={onChange}
                error={Boolean(errors.birthDate)}
              />
            )}
          />
          {errors.birthDate && (
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.birthDate.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 4 }}>
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                value={value}
                onBlur={onBlur}
                label="Telefone"
                onChange={(e) => onChange(maskPhoneNumber(e.target.value))}
                error={Boolean(errors.phone)}
              />
            )}
          />
          {errors.phone && (
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.phone.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 4 }}>
          <InputLabel
            htmlFor="auth-register-v2-sex"
            error={Boolean(errors.sex)}
          >
            Sexo
          </InputLabel>
          <Controller
            name="sex"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <Select
                value={value}
                label="Sexo"
                onBlur={onBlur}
                onChange={onChange}
                id="auth-register-v2-sex"
                error={Boolean(errors.sex)}
              >
                <MenuItem value={"masculino"}>Masculino</MenuItem>
                <MenuItem value={"feminino"}>Feminino</MenuItem>
              </Select>
            )}
          />
          {errors.sex && (
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.sex.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }}>
          <InputLabel
            htmlFor="auth-register-v2-segment"
            error={Boolean(errors.sex)}
          >
            Seguimento
          </InputLabel>
          <Controller
            name="segment"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <Select
                value={value}
                label="Seguimento"
                onBlur={onBlur}
                onChange={onChange}
                id="auth-register-v2-segment"
                error={Boolean(errors.segment)}
              >
                <MenuItem value={"fotos"}>Fotos</MenuItem>
                <MenuItem value={"quadros"}>Quadros</MenuItem>
              </Select>
            )}
          />
          {errors.segment && (
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.segment.message}
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
          Continuar
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ mr: 2, color: "text.secondary" }}>
            Já tem uma conta?
          </Typography>
          <Typography>
            <Link passHref href="/login">
              <Typography component={MuiLink} sx={{ color: "primary.main" }}>
                Fazer login!
              </Typography>
            </Link>
          </Typography>
        </Box>
      </form>
    </Fragment>
  );
};

export { StepTwo };
