import { mask } from 'remask'

export function maskUniqueValueNumber(value: string) {
  if (!value) return
  const uniqueValueNumber = ['9']

  return mask(value, uniqueValueNumber)
}
