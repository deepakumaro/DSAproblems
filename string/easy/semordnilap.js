function semordnilap(words) {
  // Write your code here.
  const hashMap = new Set();
  const semordnilapArray = [];
  for (let word of words) {
    let reversed = word.split("").reverse().join("");
    if (hashMap.has(reversed)) {
      semordnilapArray.push([word, reversed]);
    } else {
      hashMap.add(word);
    }
  }

  return semordnilapArray;
}

console.log(semordnilap(["dog", "desserts", "god", "stressed"]));
