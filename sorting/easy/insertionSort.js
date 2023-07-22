function insertionSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      console.log(j);
      if (array[j - 1] > array[j]) {
        // swapping via array destructring
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
    }
  }
  return array;
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));
