// time O(n) || space O(1)

function firstNonRepeatingCharacter(string) {
  // Write your code here.
  let hashMap = {};
  for (char of string) {
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
  }
  console.log(hashMap);
  for (let i = 0; i < string.length; i++) {
    if (hashMap[string[i]] == 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstNonRepeatingCharacter("faadabcbbebdf"));
