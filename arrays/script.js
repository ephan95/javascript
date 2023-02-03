// 1

function removeItem(array, remove = 0) {
  let arr = [...array];
  let removed = arr.splice(remove - 1, 1);

  if (remove > 0) {
    return arr;
  } else {
    return arr.concat(removed);
  }
}

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

// 2

function sumOfCharacters(array) {
  let count = 0;
  let characters = array.filter((item) => typeof item === "string").join("");

  for (let i = 0; i < characters.length; i++) {
    count++;
  }
  return count;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
