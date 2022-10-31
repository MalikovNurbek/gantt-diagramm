export const shortedText = (text: string, length: number = 13) => {
  if (text.length < length) return text
  let result = ''
  for (let i = 0; i <= length; i++) {
    result += text[i]
  }
  return result + '...'
}

export const getRandomId = () => {
  return Math.floor(Math.random() * (100001 - 9999) + 100001);
}