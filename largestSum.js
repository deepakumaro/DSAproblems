/* 


array = [1,2,3,4,5,6,7,8,9,10];

sumIndex =4;

1sloop 
i=0;i<arrayLength-num+1;

2nd loop
j=0;j<n

sum = array[i+j]

*/

function largestSum(arr, n) {
  let max = 0;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

const result = largestSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

console.log(result);
