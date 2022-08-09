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
import axios from "axios";
import { toast } from "react-toastify";
import { CustomToast } from "../../../../components/CustomTostfy";
import { registerStepTree } from "../../../../utils/validators";
import { maskCepNumber } from "../../../../utils/masks/cep";
import { ButtonCustom } from "../../Button";
import { EnumButtonVariant } from "../../../../assets/config/ButtonVariant";

interface FormData {
  cep: string;
  address: string;
  number: string;
  district: string;
  complement: string;
  uf: string;
  city: string;
}

type PropsForm = {
  setStepForm: React.Dispatch<React.SetStateAction<number>>;
  objectStep: any;
  setObjectStep: React.Dispatch<React.SetStateAction<any>>;
};

const defaultValues = {
  cep: "",
  address: "",
  number: "",
  district: "",
  complement: "",
  uf: "",
  city: "",
};

const StepThree = ({ setStepForm, setObjectStep, objectStep }: PropsForm) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(registerStepTree),
  });

  const onSubmit = (data: FormData) => {
    const objectForm = {
      ...objectStep,
      cep: data.cep,
      address: data.address,
      number: data.number,
      district: data.district,
      complement: data.complement,
      uf: data.uf,
      city: data.city,
    };

    setObjectStep({ ...objectForm });
    setStepForm(4);
  };

  const verifyAddressInCep = async () => {
    const { cep: cepInformed } = getValues();
    const cepFormated = cepInformed?.replace("-", "").trim();
    if (cepInformed) {
      try {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${cepFormated}/json/`
        );
        if (data.erro === "true") {
          toast(
            <CustomToast
              status="warn"
              title="Busca do cep!"
              message="Cep informado não encontrado."
            />
          );
          reset(defaultValues);
          return;
        }
        const getAddressUser = {
          cep: data.cep,
          address: data.logradouro,
          number: "",
          district: data.bairro,
          complement: "",
          uf: data.uf,
          city: data.localidade,
        };
        reset(getAddressUser);
      } catch (err) {
        toast(
          <CustomToast
            status="error"
            title="Opss!"
            message="Falha ao buscar cep"
          />
        );
      }
    }
  };

  return (
    <Fragment>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Controller
            name="cep"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TextField
                value={value}
                onBlur={verifyAddressInCep}
                label="CEP"
                onChange={(e) => onChange(maskCepNumber(e.target.value))}
                error={Boolean(errors.cep)}
              />
            )}
          />
          {errors.cep && (
            <FormHelperText sx={{ color: "var(--red-500)" }}>
              {errors.cep.message}
            </FormHelperText>
          )}
        </FormControl>

        <Box sx={{ mb: 2, display: "flex", width: "100%" }}>
          <FormControl sx={{ display: "flex", flex: 3, marginRight: "1rem" }}>
            <Controller
              name="address"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  value={value}
                  onBlur={onBlur}
                  label="Endereço"
                  onChange={onChange}
                  error={Boolean(errors.address)}
                />
              )}
            />
            {errors.address && (
              <FormHelperText sx={{ color: "var(--red-500)" }}>
                {errors.address.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl sx={{ display: "flex", flex: 1 }}>
            <Controller
              name="number"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  value={value}
                  onBlur={onBlur}
                  label="N°"
                  onChange={onChange}
                  error={Boolean(errors.number)}
                />
              )}
            />
            {errors.number && (
              <FormHelperText sx={{ color: "var(--red-500)" }}>
                {errors.number.message}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Controller
            name="district"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                value={value}
                onBlur={onBlur}
                label="Bairro"
                onChange={onChange}
                error={Boolean(errors.district)}
              />
            )}
          />
          {errors.district && (
            <FormHelperText sx={{ color: "var(--red-500)" }}>
              {errors.district.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Controller
            name="complement"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                value={value}
                onBlur={onBlur}
                label="Complemento"
                onChange={onChange}
                error={Boolean(errors.district)}
              />
            )}
          />
          {errors.complement && (
            <FormHelperText sx={{ color: "var(--red-500)" }}>
              {errors.complement.message}
            </FormHelperText>
          )}
        </FormControl>

        <Box sx={{ mb: 2, display: "flex", width: "100%" }}>
          <FormControl sx={{ marginRight: "1rem", display: "flex", flex: 1 }}>
            <InputLabel
              htmlFor="auth-register-v2-uf"
              error={Boolean(errors.uf)}
            >
              Estado
            </InputLabel>
            <Controller
              name="uf"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <Select
                  value={value}
                  label="Estado"
                  onBlur={onBlur}
                  onChange={onChange}
                  id="auth-register-v2-uf"
                  error={Boolean(errors.uf)}
                >
                  <MenuItem value={value ? value : ""}>{value}</MenuItem>
                  <MenuItem value={1}>SP</MenuItem>
                  <MenuItem value={2}>FO</MenuItem>
                </Select>
              )}
            />
            {errors.uf && (
              <FormHelperText sx={{ color: "var(--red-500)" }}>
                {errors.uf.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl sx={{ display: "flex", flex: 1 }}>
            <InputLabel
              htmlFor="auth-register-v2-city"
              error={Boolean(errors.city)}
            >
              Cidade
            </InputLabel>
            <Controller
              name="city"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <Select
                  value={value}
                  label="cidade"
                  onBlur={onBlur}
                  onChange={onChange}
                  id="auth-register-v2-city"
                  error={Boolean(errors.city)}
                >
                  <MenuItem value={value ? value : ""}>{value}</MenuItem>
                  <MenuItem value={1}>São Paulo</MenuItem>
                  <MenuItem value={2}>Fortaleza</MenuItem>
                </Select>
              )}
            />
            {errors.city && (
              <FormHelperText sx={{ color: "var(--red-500)" }}>
                {errors.city.message}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

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

export { StepThree };
