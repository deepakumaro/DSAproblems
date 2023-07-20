// time O(n*m) || space o(n)

function commonCharacters(strings) {
  let charMap = {};
  let result = [];
  for (let i = 0; i < strings.length; i++) {
    let setForEeachString = new Set(strings[i].split(""));
    for (let char of setForEeachString) {
      charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] === strings.length) {
      result.push(char);
    }
  }
  return result;
}

console.log(commonCharacters(["abc", "bcd", "cbad"]));
