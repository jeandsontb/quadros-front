import { mask } from 'remask'

export function maskCepNumber(value: string) {
  if (!value) return
  let cepMask = ''

  cepMask = '99999-999'

  return mask(value, cepMask)
}
