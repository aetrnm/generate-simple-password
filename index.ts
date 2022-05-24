import DEFAULTS from "./defaults";

interface PasswordOptions {
  length: number;
  addUppercase: boolean;
  addLowercase: boolean;
  addNumbers: boolean;
  addSpecialChars: boolean;
  customChars: string;
}

export default function generatePassword(options: PasswordOptions) {
  let characters = "";
  const passwordLength = options.length
    ? options.length
    : DEFAULTS.defaultLength;

  if (options && options.addUppercase) characters += DEFAULTS.uppercase;
  if (options && options.addLowercase) characters += DEFAULTS.lowercase;
  if (options && options.addNumbers) characters += DEFAULTS.numbers;
  if (options && options.addSpecialChars) characters += DEFAULTS.specialChars;
  if (options && options.customChars) characters += options.customChars;

  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < passwordLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
