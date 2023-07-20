function runLengthEncoding(string) {
  // Write your code here.
  let count = 1;
  let enocodeArray = [];
  for (let i = 1; i < string.length; i++) {
    if (string[i] !== string[i - 1] || count == 9) {
      enocodeArray.push(count);
      enocodeArray.push(string[i - 1]);
      count = 0;
    }
    count++;
  }
  enocodeArray.push(count);
  enocodeArray.push(string[string.length - 1]);
  return enocodeArray.join("");
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
