export const randomNumber = (digits = 10) => {
  return parseInt(String(Math.random() * Math.pow(10, digits)));
}

export const getArrayOfLength = (length: number): any[] => {
  return Array(length).fill(null);
}
