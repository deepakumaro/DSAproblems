/*
NOTE -  input array will always be sorted but can have negative integers 
that's why you can just squre the input array
*/

// time Ologn || space O(n)

function sortedSquaredArray(array) {
  // Write your code here.
  if (array.length <= 0) {
    return array;
  }
  let squareArray = array.map((n) => n * n);
  squareArray.sort((a, b) => a - b);
  return squareArray;
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));

// Best solution

function sortedSquaredArrayBestSol(array) {
  // Write your code here.
  if (array.length <= 0) {
    return array;
  }

  // init a empty array
  let sortedArray = [];

  let startIdx = 0;
  let endIdx = array.length - 1;
  while (startIdx <= endIdx) {
    if (Math.abs(array[startIdx]) < Math.abs(array[endIdx])) {
      sortedArray.unshift(array[endIdx] * array[endIdx]);
      endIdx--;
    } else if (Math.abs(array[startIdx]) > Math.abs(array[endIdx])) {
      sortedArray.unshift(array[startIdx] * array[startIdx]);
      startIdx++;
    } else {
      sortedArray.unshift(array[startIdx] * array[startIdx]);
      startIdx++;
    }
  }
  return sortedArray;
}

console.log(sortedSquaredArrayBestSol([1, 2, 3, 5, 6, 8, 9]));
