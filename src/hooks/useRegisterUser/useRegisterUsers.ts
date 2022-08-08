import { QueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../../services/queryClient";
import { usersService } from "../../services/useCases/UsersService";
import { IOptionDTO } from "../../types/react-query";
import { ICreateUserDTO } from "../../types/register-and-auth-user";

// INTERFACE PARA O OPTIONS
interface IShowRegisterCodeValidation {
  codeInformed: string;
  options?: IOptionDTO;
}

// HOOK PARA CONSULTAR TODOS OS REGISTROS DE USUÁRIOS - REACT-QUERY
export const useGetRegisterUsers = (options: QueryOptions) => {
  const { data: items, ...rest } = useQuery(
    ["UserRegister"],
    usersService.getAllUsers,
    {
      staleTime: 1000 * 60 * 5,
      ...options,
    }
  );

  const data = items as ICreateUserDTO;

  return { data, ...rest };
};

// HOOK PARA CONSULTAR O CÓDIGO DE VALIDAÇÃO PASSADO PELO SISTEMA - REACT-QUERY
export const useGetCodeValidationEmail = ({
  codeInformed,
  options,
}: IShowRegisterCodeValidation) => {
  const { data: items, ...rest } = useQuery(
    ["UserValidationEmail", codeInformed],
    () => usersService.getEmailCodeValidation(codeInformed),
    {
      staleTime: 1000 * 60 * 5,
      ...options,
    }
  );

  const data = items as string;

  return { data, ...rest };
};

// HOOK PARA CRIAR UM USUÁRIO NO SISTEMA - REACT-QUERY
export const useCreateRegisterUser = () => {
  return useMutation(usersService.createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["UserRegister"]);
    },
  });
};

// HOOK PARA ATUALIZAR O CADASTRO E VALIDAR O CÓDIGO DO USUÁRIO NO SISTEMA - REACT-QUERY
export const useUpdateAccessCodeRegisterUser = () => {
  return useMutation(usersService.updateAccountAccessCodeRegister, {
    onSuccess: () => {
      queryClient.invalidateQueries(["UserRegister"]),
        queryClient.invalidateQueries(["UserValidationEmail"]);
    },
  });
};
