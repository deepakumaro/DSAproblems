// solution 1

// time and space complexity high
//checkin

function twoNumberSum(array, targetSum) {
  if (array.length <= 0) {
    return [];
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.legth; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];

  //testing
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
