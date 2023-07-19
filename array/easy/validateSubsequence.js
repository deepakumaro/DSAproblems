// O(n) time || 0(1) space
function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx += 1;
    }
    arrIdx += 1;
  }
  return seqIdx === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 122, 10]));

// using for loop

function isValidSubsequenceWithForLoop(array, sequence) {
  let seqIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (seqIdx === sequence.length) {
      return true;
    }
    if (array[i] === sequence[seqIdx]) {
      seqIdx += 1;
    }
  }
  return seqIdx === sequence.length;
}

console.log(
  isValidSubsequenceWithForLoop([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
);

// using forEach loop

function isValidSubsequenceWithForEachLoop(array, sequence) {
  let idx = 0;
  array.forEach((n) => n === sequence[idx] && idx++);
  return idx === sequence.length;
}

console.log(
  isValidSubsequenceWithForEachLoop(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [1, 6, -1, 123]
  )
);
