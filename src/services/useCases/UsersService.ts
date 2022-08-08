import { AxiosError } from "axios";
import {
  ICreateUserDTO,
  IUserAuthenticInSystenDTO,
} from "../../types/register-and-auth-user";
import { api } from "../client";

class UsersService {
  // SERVIÇO PARA BUSCAR TODOS OS USUÁRIOS
  async getAllUsers() {
    try {
      const { data } = await api.get<ICreateUserDTO[]>("/users");

      return data;
    } catch (err) {
      const error = err as AxiosError;
      throw new Error(error?.message || "Erro ao buscar usuários");
    }
  }

  // SERVIÇO PARA BUSCAR UM USUÁRIO POR ID
  async getUserById(id: string) {
    try {
      const { data } = await api.get<ICreateUserDTO>(`/users/${id}`);

      return data;
    } catch (err) {
      const error = err as AxiosError;
      throw new Error(error?.message || "Erro ao buscar usuários");
    }
  }

  // SERVIÇO PARA CRIAR UM USUÁRIO
  async createUser(payload: ICreateUserDTO) {
    try {
      const { data } = await api.post("/users", payload);

      return data;
    } catch (err) {
      const error = err as AxiosError;

      return error;
    }
  }

  // SERVIÇO PARA VERIFICAR SE EXISTE UM CÓDIGO DE VERIFICAÇÃO DO E-MAIL
  async getEmailCodeValidation(code: string) {
    try {
      const { data } = await api.get<{ code: string }>(
        `/users/validation-email-code/${code}`
      );

      return data;
    } catch (err) {
      const error = err as AxiosError;
      throw new Error(
        error?.message || "Erro ao buscar código de validação do e-mail."
      );
    }
  }

  // SERVIÇO PARA ATUALIZAR O ACESSO E PERMITIR O ACESSO NO SISTEMA
  async updateAccountAccessCodeRegister(code: string) {
    try {
      await api.patch<{ accessAuthorized: boolean }>(
        `/users/access-validation/${code}`
      );
    } catch (err) {
      const error = err as AxiosError;
      throw new Error(
        error?.message || "Falha ao atualizar o acesso a plataforma."
      );
    }
  }

  // SERVIÇO PARA AUTENTICAR UM USUÁRIO
  async loginUser(payload: IUserAuthenticInSystenDTO) {
    try {
      const { data } = await api.post("/auth/login", payload);

      return data;
    } catch (err) {
      const error = err as AxiosError;

      return error;
    }
  }
}

const usersService = new UsersService();

export { usersService };
