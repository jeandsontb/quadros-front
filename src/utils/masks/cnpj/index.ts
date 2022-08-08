import { mask } from 'remask'

export function maskCnpj(value: string) {
  if (!value) return
  const cnpj = ['99.999.999/9999-99']

  return mask(value, cnpj)
}
