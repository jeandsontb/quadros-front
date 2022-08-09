import { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormHelperText from "@mui/material/FormHelperText";

import S from "./styles";
import {
  registerStepOneCpf,
  registerStepOneCpfAndCnpj,
} from "../../../../utils/validators";
import { maskCpf } from "../../../../utils/masks/cpf";
import { maskCnpj } from "../../../../utils/masks/cnpj";
import { ButtonCustom } from "../../Button";
import { EnumButtonVariant } from "../../../../assets/config/ButtonVariant";

const defaultValues = {
  username: "",
  lastname: "",
  email: "",
  cpf: "",
  cnpj: "",
  company_name: "",
};
interface FormData {
  username: string;
  lastname: string;
  email: string;
  cpf: string;
  cnpj: string;
  company_name: string;
}

interface PropsForm {
  setStepForm: React.Dispatch<React.SetStateAction<number>>;
  objectStep: any;
  setObjectStep: React.Dispatch<React.SetStateAction<any>>;
}

const StepOne = ({ setStepForm, setObjectStep, objectStep }: PropsForm) => {
  const [valueCpfOrCnpj, setValueCpfOrCnpj] = useState("cpf");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(
      valueCpfOrCnpj === "cpf" ? registerStepOneCpf : registerStepOneCpfAndCnpj
    ),
  });

  const onSubmit = (data: FormData) => {
    const objectForm = {
      ...objectStep,
      name: data.username.trim(),
      lastname: data.lastname,
      email: data.email,
      cpf: data.cpf,
      cnpj: data.cnpj.length > 0 ? data.cnpj : null,
      company_name: data.company_name.length > 0 ? data.company_name : null,
    };

    setObjectStep({ ...objectForm });
    setStepForm(2);
  };

  const handleChangeCpfOrCnpj = (
    event: ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setValueCpfOrCnpj(value);
  };

  return (
    <S.StepAnimation effect={valueCpfOrCnpj}>
      <Box sx={{ mb: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Tipo de conta
        </FormLabel>
        <RadioGroup row value={valueCpfOrCnpj} onChange={handleChangeCpfOrCnpj}>
          <FormControlLabel
            value="cpf"
            control={<Radio />}
            label="Pessoa física"
            sx={{ color: "var(--gray-400)" }}
          />
          <FormControlLabel
            value="cnpj"
            control={<Radio />}
            label="Pessoa jurídica"
            sx={{ color: "var(--gray-400)" }}
          />
        </RadioGroup>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                label="Nome"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                error={Boolean(errors.username)}
              />
            )}
          />
          {errors.username && (
            <FormHelperText sx={{ color: "var(--red-500)" }}>
              {errors.username.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Controller
            name="lastname"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                value={value}
                onBlur={onBlur}
                label="Sobrenome"
                onChange={onChange}
                error={Boolean(errors.lastname)}
              />
            )}
          />
          {errors.lastname && (
            <FormHelperText sx={{ color: "var(--red-500)" }}>
              {errors.lastname.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                value={value}
                label="Email"
                onBlur={onBlur}
                onChange={onChange}
                error={Boolean(errors.email)}
              />
            )}
          />
          {errors.email && (
            <FormHelperText sx={{ color: "var(--red-500)" }}>
              {errors.email.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Controller
            name="cpf"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                value={value}
                label="CPF"
                onBlur={onBlur}
                onChange={(e) => onChange(maskCpf(e.target.value))}
                error={Boolean(errors.cpf)}
              />
            )}
          />
          {errors.cpf && (
            <FormHelperText sx={{ color: "var(--red-500)" }}>
              {errors.cpf.message}
            </FormHelperText>
          )}
        </FormControl>

        {valueCpfOrCnpj === "cnpj" && (
          <S.FormCnpj effect={valueCpfOrCnpj}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Controller
                name="cnpj"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    value={value}
                    label="CNPJ"
                    onBlur={onBlur}
                    onChange={(e) => onChange(maskCnpj(e.target.value))}
                    error={Boolean(errors.cnpj)}
                  />
                )}
              />
              {errors.cnpj && (
                <FormHelperText sx={{ color: "var(--red-500)" }}>
                  {errors.cnpj.message}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <Controller
                name="company_name"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    value={value}
                    label="Razão social"
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.company_name)}
                  />
                )}
              />
              {errors.company_name && (
                <FormHelperText sx={{ color: "var(--red-500)" }}>
                  {errors.company_name.message}
                </FormHelperText>
              )}
            </FormControl>
          </S.FormCnpj>
        )}

        <ButtonCustom
          title="Continuar"
          variant={EnumButtonVariant.FILLED_SECONDARY}
          type="submit"
        >
          Continuar
        </ButtonCustom>
      </form>
    </S.StepAnimation>
  );
};

export { StepOne };
