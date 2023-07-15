function isPalindrom(str) {
  let start = 0;
  let end = str.length - 1;
  let string = str.split("");
  while (start < end) {
    if (string[start] === string[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

const result = isPalindrom("racecar");

console.log(result);
