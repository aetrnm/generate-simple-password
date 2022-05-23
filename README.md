# Generate simple passwords with 1 function

## Example Usage:

```js
import generatePassword from 'generate-simple-password';

const password = generatePassword({
  addUppercase: true,
  addLowercase: true,
  addSpecialChars: true,
});

console.log(password); // ^fBN{y{&'poi;xfM
```

---

## Parameters:

`options` - `Object`:

- `length` - length of the password. Default is set to `16`

- `addUppercase` - set `true` if you want password to contain uppercase letters.
  Default is `false`

- `addLowercase` - set `true` if you want password to contain lowercase letters.
  Default is `false`

- `addNumbers` - set `true` if you want password to contain numbers. Default is
  `false`

- `addSpecialChars` - set `true` if you want password to contain special
  characters. Default is `false`

- `customChars` - provide a string if you want to create password out of your
  own set of characters

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

---

## License

[MIT](https://choosealicense.com/licenses/mit/)
