function nthPrime(n) {
  var P = 0;

  function isPrime(x) {
    var isPrime = true;

    for (var d = 2; d <= Math.sqrt(x); d++) {
      if ((x / d) % 1 == 0) {
        isPrime = false;
        break;
      }
    }

    return isPrime;
  }

  for (var i = 2; 0 < n; i++) {
    if (isPrime(i)) {
      P = i;
      n--;
    }

    // we can skip the even numbers
    if (3 <= i) {
      i++;
    }
  }

  return P;
}

console.log(nthPrime(5));
