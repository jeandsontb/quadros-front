import { mask } from 'remask'

export function maskPhoneNumber(value: string) {
  if (!value) return
  let phoneMask = ''

  phoneMask = '(99) 9 9999-9999'

  return mask(value, phoneMask)
}
