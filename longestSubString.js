function longestSubString(str) {
  let start = 0;
  let end = 0;
  let max = 0;
  let uniqeStr = new Set();
  while (end < str.length) {
    if (!uniqeStr.has(str[end])) {
      uniqeStr.add(str[end]);
      max = Math.max(max, uniqeStr.size);
      end++;
    } else {
      uniqeStr.delete(str[start]);
      start++;
    }
  }
  return max;
}

const result = longestSubString("aabbcbhjksieaaa");
console.log(result);
