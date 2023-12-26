function sumArray(arr) {
   console.log('Start of sumArray function');
   let result = arr.reduce((a, b) => {
       console.log(`a: ${a}, b: ${b}, a + b: ${a + b}`);
       return a + b;
   }, 0);
   console.log('End of sumArray function');
   return result;
}

console.log(sumArray([1, 2, 3, 4, 5]));  // Outputs: 15
