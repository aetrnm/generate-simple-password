const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '~`!@#$%^&*()_-+={[}]|:;"\'<,>.?/\\';

export default function generatePassword(
  length: number,
  allowedChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  options: { addNumbers: boolean; addSpecialChars: boolean },
) {
  let result = '';
  let characters = allowedChars;
  if (options && options.addNumbers) characters += numbers;
  if (options && options.addSpecialChars) characters += specialChars;
  const charactersLength = allowedChars.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
