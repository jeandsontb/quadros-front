export function maskName(value: string) {
  const textWithAccentAndNumbersRegex = /[^a-zA-Z\u00C0-\u00FF\s]*$/g

  return value?.replace(textWithAccentAndNumbersRegex, '').trim()
}
