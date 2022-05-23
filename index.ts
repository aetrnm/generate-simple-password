const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '~`!@#$%^&*()_-+={[}]|:;"\'<,>.?/\\';

export default function generatePassword(
  length: number = 16,
  allowedChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  options: {
    addNumbers: boolean;
    addSpecialChars: boolean;
    customChars: string;
  },
) {
  let result = '';
  let characters = allowedChars;
  if (options && options.addNumbers) characters += numbers;
  if (options && options.addSpecialChars) characters += specialChars;
  if (options && options.customChars) characters += options.customChars;
  const charactersLength = allowedChars.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
