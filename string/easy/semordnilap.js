// word in words should have a pair in the array. you can not just reverse the word and check in the same array
/* 
check this with this output 
{
  "words": ["aaa", "bbbb"]
}
output - [];
 */

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

// sol 2
function semordnilap(words) {
  // Write your code here.
  const hashMap = new Set(words);
  const semordnilapArray = [];
  for (let word of words) {
    let reversed = word.split("").reverse().join("");
    if (hashMap.has(reversed) && reversed !== word) {
      semordnilapArray.push([word, reversed]);
      hashMap.delete(word);
      hashMap.delete(reversed);
    }
  }

  return semordnilapArray;
}

console.log(semordnilap(["dog", "desserts", "god", "stressed"]));
