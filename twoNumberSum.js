// solution 1

// time and space complexity high

function twoNumberSum(array, targetSum) {
  if (array.length <= 0) {
    return [];
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// solution 2
// time and space complexcity O(N)

function twoNumberSumWithHashMap(array, targetSum) {
  if (array.length <= 0) {
    return [];
  }
  let uniqueNumberSet = new Set();
  let = i = 0;
  while (i < array.length) {
    let numberToCompare = targetSum - array[i];
    if (uniqueNumberSet.has(numberToCompare)) {
      return [numberToCompare, array[i]];
    } else {
      uniqueNumberSet.add(array[i]);
      i++;
    }
  }
  return [];
}
console.log(twoNumberSumWithHashMap([3, 5, -4, 8, 11, 1, -1, 6], 10));
