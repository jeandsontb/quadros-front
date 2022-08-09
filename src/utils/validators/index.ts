import { isCEP } from "brazilian-values";
import * as yup from "yup";
import {
  validateCNPJ,
  validateCPF,
  validateEmail,
} from "../../services/validations-form";
import { removeMaskCpfOrCnpjOrPhone } from "../masks/cpf";

export const loginUserValidade = yup.object().shape({
  email: yup
    .string()
    .email("E-mail não é válido")
    .required("Campo e-mail obrigatório"),
  password: yup.string().min(5).required("Campo senha obrigatório"),
});

export const forgotPasswordValidade = yup.object().shape({
  email: yup
    .string()
    .email("E-mail não é válido")
    .required("Campo e-mail obrigatório"),
});

export const registerStepOneCpf = yup.object().shape({
  username: yup
    .string()
    .min(3, "Mínimo três caracteres")
    .required("Campo nome é obrigatório"),
  lastname: yup
    .string()
    .min(3, "Mínimo três caracteres")
    .required("Campo sobrenome é obrigatório"),
  email: yup
    .string()
    .email("E-mail não é válido")
    .required("Campo e-mail é obrigatório")
    .test("email Test", "E-mail já em uso.", (value) =>
      validateEmail(value ? value : "")
    ),
  cpf: yup
    .string()
    .required("CPF obrigatório")
    .test("cpf Test", "CPF inválido ou já em uso.", (value) =>
      validateCPF(value ? removeMaskCpfOrCnpjOrPhone(value) : "00000000000")
    ),
});

export const registerStepOneCpfAndCnpj = yup.object().shape({
  username: yup
    .string()
    .min(3, "Mínimo três caracteres")
    .required("Campo nome é obrigatório"),
  lastname: yup
    .string()
    .min(3, "Mínimo três caracteres")
    .required("Campo sobrenome é obrigatório"),
  email: yup
    .string()
    .email("E-mail não é válido")
    .required("Campo e-mail é obrigatório")
    .test("email Test", "E-mail já em uso.", (value) =>
      validateEmail(value ? value : "")
    ),
  cpf: yup
    .string()
    .required("CPF obrigatório")
    .test("cpf Test", "CPF inválido e ou já em uso.", (value) =>
      validateCPF(value ? removeMaskCpfOrCnpjOrPhone(value) : "00000000000")
    ),
  cnpj: yup
    .string()
    .required("CNPJ obrigatório")
    .test("cnpj Test", "CNPJ inválido e ou já em uso.", (value) =>
      validateCNPJ(value ? removeMaskCpfOrCnpjOrPhone(value) : "00000000000000")
    ),
  company_name: yup
    .string()
    .min(3, "Mínimo três caracteres")
    .required("Campo nome é obrigatório"),
});

export const registerStepTwo = yup.object().shape({
  birthDate: yup.string().required("Campo data é obrigatório"),
  phone: yup
    .string()
    .length(16, "Mínimo onze números")
    .required("Campo telefone é obrigatório"),
  sex: yup.string().required("Campo sexo é obrigatório"),
  segment: yup.string().required("Campo segmemto é obrigatório"),
});

export const registerStepTree = yup.object().shape({
  cep: yup
    .string()
    .required("Campo cep é obrigatório")
    .test("cep Test", "CEP inválido", (value) => isCEP(value ? value : "")),
  address: yup
    .string()
    .min(3, "Mínimo três caracteres")
    .required("Campo endereço é obrigatório"),
  number: yup.string().required("Obrigatório"),
  district: yup
    .string()
    .min(5, "Mínimo cinco caracteres")
    .required("Campo bairro é obrigatório"),
  complement: yup
    .string()
    .min(3, "Mínimo três caracteres")
    .required("Campo complemento é obrigatório"),
  uf: yup.string().required("Campo estado é obrigatório"),
  city: yup.string().required("Campo cidade é obrigatório"),
});

export const registerStepFour = yup.object().shape({
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Mínimo 8 dígitos")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*!@#$%"&()_=+-])(?:([0-9a-zA-Z$*!@#$%"&()_=+-])(?!\1)){8,}$/,
      "Deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
    ),
  confirmPassword: yup
    .string()
    .required("Obrigatório confirmar senha")
    .oneOf([yup.ref("password"), null], "Senhas não coincidem"),
});

export const resetPasswordValidation = yup.object().shape({
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Mínimo 8 dígitos")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*!@#$%"&()_=+-])(?:([0-9a-zA-Z$*!@#$%"&()_=+-])(?!\1)){8,}$/,
      "Deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
    ),
  confirmPassword: yup
    .string()
    .required("Obrigatório confirmar senha")
    .oneOf([yup.ref("password"), null], "Senhas não coincidem"),
});

export const validationEmailCode = yup.object().shape({
  codeOne: yup
    .string()
    .required("Dígito obrigatório")
    .min(1, "mínimo um dígito")
    .max(1, "máximo um dígito"),
  codeTwo: yup
    .string()
    .required("Dígito obrigatório")
    .min(1, "mínimo um dígito")
    .max(1, "máximo um dígito"),
  codeTree: yup
    .string()
    .required("Dígito obrigatório")
    .min(1, "mínimo um dígito")
    .max(1, "máximo um dígito"),
  codeFour: yup
    .string()
    .required("Dígito obrigatório")
    .min(1, "mínimo um dígito")
    .max(1, "máximo um dígito"),
  codeFive: yup
    .string()
    .required("Dígito obrigatório")
    .min(1, "mínimo um dígito")
    .max(1, "máximo um dígito"),
});
