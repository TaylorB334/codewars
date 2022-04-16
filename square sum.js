function squareSum(numbers){
    let mapped = numbers.map(x => Math.pow(x, 2));
    let added = mapped.reduce((a, b) => a + b, 0);
    return added; 
    }