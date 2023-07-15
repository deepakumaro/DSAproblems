/* staring anagram
if both string are not equal lenght return false;

map it out in an object like { h: 1, e: 1, l: 2, o: 1 }

then on second loop itetrate through secong string and everytime you fing a char decrease the value of the key by one
 
*/
function isAnagram(str1, st2) {
  // if string are not equal
  if (str1.lenght !== st2.lenght) {
    return false;
  }

  let counter = {};

  // mapping str1 into object
  for (let char of str1) {
    // console.log(char);
    counter[char] = (counter[char] || 0) + 1;
  }

  // looping on str1
  for (let char of st2) {
    // if the char in not in counter retruning
    if (!counter[char]) {
      return false;
    }

    // decresing the value by one od counter
    counter[char] = -1;
  }
  return true;
}

console.log(isAnagram("hello", "eollh"));
