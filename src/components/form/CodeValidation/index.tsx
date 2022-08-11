import { Fragment } from "react";
import { Box, FormControl, Typography, OutlinedInput } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import { yupResolver } from "@hookform/resolvers/yup";

import S from "./styles";
import { validationEmailCode } from "../../../utils/validators";
import { maskUniqueValueNumber } from "../../../utils/masks/oneNumber";
import { EnumButtonVariant } from "../../../assets/config/ButtonVariant";
import { ButtonCustom } from "../Button";

// VALORES DEFAUL PARA PASSAR NO REACT-HOOK-FORM
const defaultValues = {
  codeOne: "",
  codeTwo: "",
  codeTree: "",
  codeFour: "",
  codeFive: "",
};

// TIPAGEM PARA O FORM - REACT-HOOK-FORM
interface FormData {
  codeOne: string;
  codeTwo: string;
  codeTree: string;
  codeFour: string;
  codeFive: string;
}

type CodeValidationProps = {
  code: (code: string) => void;
  isLoading: boolean;
};

const CodeValidation = ({ code, isLoading }: CodeValidationProps) => {
  // FUNÇÃO CONTROLADORA DO REACT-HOOK-FORM
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationEmailCode),
  });

  // FUNÇÃO PARA PASSAR O CÓDIGO PARA A TELA VALIDATION-EMAIL
  const onSubmit = (data: FormData) => {
    const codeInformedFormated = `${data.codeOne}${data.codeTwo}${data.codeTree}${data.codeFour}${data.codeFive}`;
    code(codeInformedFormated);
  };

  return (
    <Fragment>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <S.BoxFormsValidations>
          <S.BoxSeparator>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name="codeOne"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OutlinedInput
                    value={value}
                    onChange={(e) =>
                      onChange(maskUniqueValueNumber(e.target.value))
                    }
                    error={Boolean(errors.codeOne)}
                    type="text"
                  />
                )}
              />
              {errors.codeOne && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.codeOne.message}
                </FormHelperText>
              )}
            </FormControl>
          </S.BoxSeparator>

          <S.BoxSeparator>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name="codeTwo"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OutlinedInput
                    value={value}
                    onChange={(e) =>
                      onChange(maskUniqueValueNumber(e.target.value))
                    }
                    error={Boolean(errors.codeTwo)}
                    type="text"
                  />
                )}
              />
              {errors.codeTwo && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.codeTwo.message}
                </FormHelperText>
              )}
            </FormControl>
          </S.BoxSeparator>

          <S.BoxSeparator>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name="codeTree"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OutlinedInput
                    value={value}
                    onChange={(e) =>
                      onChange(maskUniqueValueNumber(e.target.value))
                    }
                    error={Boolean(errors.codeTree)}
                    type="text"
                  />
                )}
              />
              {errors.codeTree && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.codeTree.message}
                </FormHelperText>
              )}
            </FormControl>
          </S.BoxSeparator>

          <S.BoxSeparator>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name="codeFour"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OutlinedInput
                    value={value}
                    onChange={(e) =>
                      onChange(maskUniqueValueNumber(e.target.value))
                    }
                    error={Boolean(errors.codeFour)}
                    type="text"
                  />
                )}
              />
              {errors.codeFour && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.codeFour.message}
                </FormHelperText>
              )}
            </FormControl>
          </S.BoxSeparator>

          <S.BoxSeparator>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name="codeFive"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <OutlinedInput
                    value={value}
                    onChange={(e) =>
                      onChange(maskUniqueValueNumber(e.target.value))
                    }
                    error={Boolean(errors.codeFive)}
                    type="text"
                  />
                )}
              />
              {errors.codeFive && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.codeFive.message}
                </FormHelperText>
              )}
            </FormControl>
          </S.BoxSeparator>
        </S.BoxFormsValidations>

        <ButtonCustom
          title="Validar e-mail"
          loading={isLoading}
          variant={EnumButtonVariant.FILLED_SECONDARY}
          type="submit"
        >
          Validar e-mail
        </ButtonCustom>

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

export { CodeValidation };
