export interface ICreateUserDTO {
  id: string;
  name: string;
  lastname: string;
  cpf: string;
  email: string;
  phone: string;
  sex: string;
  birthDate: string;
  cnpj: string;
  company_name: string;
  address: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  cep: string;
  complement: string;
  segment: string;
  password: string;
  login_notification: boolean;
  code_access: string;
  validate_access: boolean;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface IUserAuthDTO {
  id: string;
  name: string;
  lastname: string;
  cpf: string;
  email: string;
  phone: string;
  sex: string;
  birthDate: string;
  cnpj: string;
  company_name: string;
  complement: string;
  segment: string;
  login_notification: boolean;
  validate_access: boolean;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface IUserAuthenticInSystenDTO {
  email: string;
  password: string;
}
