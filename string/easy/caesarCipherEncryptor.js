function caesarCipherEncryptor(string, key) {
  // Write your code here.
  key = key % 26;
  let encryptedString = "";
  for (let i = 0; i < string.length; i++) {
    let uniCode = string.charCodeAt(i) + key;
    uniCode = uniCode > 122 ? uniCode - 26 : uniCode;
    encryptedString += String.fromCharCode(uniCode);
  }
  return encryptedString;
}

console.log(caesarCipherEncryptor("xyz", 2));

function caesarCipherEncryptor(string, key) {
  // Write your code here.
  return string
    .split("")
    .map((_, i) => {
      return String.fromCharCode(((string.charCodeAt(i) - 97 + key) % 26) + 97);
    })
    .join("");
}

console.log(caesarCipherEncryptor("xyz", 2));
