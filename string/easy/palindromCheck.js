//time O(n) | space O(1)

function isPalindrome(string) {
  // Write your code here.
  let startIndex = 0;
  let endIndex = string.length - 1;
  while (startIndex < endIndex) {
    if (string[startIndex] !== string[endIndex]) {
      return false;
    }
    startIndex++;
    endIndex--;
  }
  return true;
}

console.log(isPalindrome("abcdcba"));
