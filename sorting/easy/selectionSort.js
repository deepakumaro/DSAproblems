function selectionSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length - 1; i++) {
    let minNumIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[minNumIndex] > array[j]) minNumIndex = j;
    }

    if (minNumIndex > i)
      [array[i], array[minNumIndex]] = [array[minNumIndex], array[i]];
  }
  return array;
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));
