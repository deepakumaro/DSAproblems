function generateDocument(characters, document) {
  // Write your code here.
  const charMap = {};
  for (let char of characters) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }
  for (let char of document) {
    if (!(char in charMap) || charMap[char] === 0) {
      return false;
    }
    charMap[char]--;
  }
  return true;
}

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);
