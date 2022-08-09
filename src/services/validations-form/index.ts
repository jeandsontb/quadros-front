import { api } from "../client";

export const validateCPF = async (cpf: string) => {
  try {
    await api.get(`/users/validation-cpf/${cpf}`);
    return true;
  } catch (err) {
    return false;
  }
};

export const validateCNPJ = async (cnpj: string) => {
  try {
    await api.get(`/users/validation-cnpj/${cnpj}`);
    return true;
  } catch (err) {
    return false;
  }
};

export const validateEmail = async (email: string) => {
  try {
    await api.get(`/users/validation-email/${email}`);
    return true;
  } catch (err) {
    return false;
  }
};
