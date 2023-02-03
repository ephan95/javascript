// 1

// TODO: Implement the oddNumbers function

function oddNumbers(a, b) {
  let oddString = " ";

  for (let i = a; i < b; i++) {
    if (i % 2 !== 0) {
      oddString += i + ",";
    }
  }
  return oddString.slice(0, -1);
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11
