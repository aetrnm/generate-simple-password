const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '~`!@#$%^&*()_-+={[}]|:;"\'<,>.?/\\';
const defaultLength = 16;

export default function generatePassword(options: {
  length: number;
  addUppercase: boolean;
  addLowercase: boolean;
  addNumbers: boolean;
  addSpecialChars: boolean;
  customChars: string;
}) {
  let characters = '';
  const passwordLength = options.length ? options.length : defaultLength;

  if (options && options.customChars) characters += options.customChars;
  if (options && options.addUppercase) characters += uppercase;
  if (options && options.addLowercase) characters += lowercase;
  if (options && options.addNumbers) characters += numbers;
  if (options && options.addSpecialChars) characters += specialChars;

  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < passwordLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
