import { Fragment } from "react";
import {
  Button,
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerStepTwo } from "../../../../utils/validators";
import { maskPhoneNumber } from "../../../../utils/masks/phone";
import { ButtonCustom } from "../../Button";
import { EnumButtonVariant } from "../../../../assets/config/ButtonVariant";

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
        <FormControl fullWidth sx={{ mb: 2 }}>
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
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          {errors.birthDate && (
            <FormHelperText sx={{ color: "var(--red-500)" }}>
              {errors.birthDate.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
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
            <FormHelperText sx={{ color: "var(--red-500)" }}>
              {errors.phone.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
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
            <FormHelperText sx={{ color: "var(--red-500)" }}>
              {errors.sex.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
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
            <FormHelperText sx={{ color: "var(--red-500)" }}>
              {errors.segment.message}
            </FormHelperText>
          )}
        </FormControl>

        <ButtonCustom
          title="Continuar"
          variant={EnumButtonVariant.FILLED_SECONDARY}
          type="submit"
        >
          Continuar
        </ButtonCustom>
      </form>
    </Fragment>
  );
};

export { StepTwo };
