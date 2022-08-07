let first = 5;
let second = 7;
console.log(first, second);
const temp = first;
first = second;
second = temp;

// approach: 2---->
// [first, second] = [second, first];

// approach: 3----->
// first = first + second;
// second = first - second;
// first = first - second;

console.log(first, second);