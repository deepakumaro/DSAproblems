// time O(w*h) || space (w*h)
// w ---> width
//h ---> height
function transposeMatrix(matrix) {
  let transposeMatix = [];
  for (let col = 0; col < matrix[0].length; col++) {
    let transposeMatixRow = [];
    for (let row = 0; row < matrix.length; row++) {
      transposeMatixRow.push(matrix[row][col]);
    }
    transposeMatix.push(transposeMatixRow);
  }

  return transposeMatix;
}

console.log(
  transposeMatrix([
    [-7, -7],
    [100, 12],
    [-33, 17],
  ])
);

// with one loop solution
function transposeMatrix(matrix) {
  let row = 0;
  let col = 0;
  let total = matrix.length * matrix[0].length;
  let count = 0;
  let transposeMatix = [];
  while (count < total) {
    if (!transposeMatix[col]) {
      transposeMatix[col] = [];
    }
    transposeMatix[col].push(matrix[row][col]);
    row++;
    if (matrix.length === row) {
      row = 0;
      col++;
    }
    count++;
  }
  return transposeMatix;
}

console.log(
  transposeMatrix([
    [-7, -7],
    [100, 12],
    [-33, 17],
  ])
);
