function positiveSum(arr) {
    let newArray = arr.filter(number => number > 0)
    let sum = newArray.reduce((a, b) => a + b, 0);
    return sum;
  }