// ********** Basic Console Logs **********
console.log("Hello, World!"); // Prints a string
console.log('A' - 1);         // Converts 'A' to its char code (65) and subtracts 1 => 64
console.log(2 + '2' + '2');   // Number 2 is converted to string and concatenated => '222'
console.log('Hello' + 'World' + 89); // Concatenates strings and number => 'HelloWorld89'
console.log('Hello' - 'World' + 89); // NaN + 89 => NaN (invalid arithmetic)
console.log('Hello' + 78);    // Concatenates string with number => 'Hello78'
console.log('78' - 90 + '2'); // 78 - 90 = -12, then concatenated with '2' => '-122'
console.log(2 - '2' + 90);    // 2-2 = 0, +90 => 90
console.log(89 - '90' / 2);   // 90/2 = 45, 89-45 = 44
console.log((true == false) > 2); // false > 2 => false

// ********** String Manipulation **********
let name = "Devank dalal";
console.log(name.slice(0, 5), "slice"); // Extracts first 5 characters => 'Devan'
console.log(name.length, "length");     // Length of string => 12
console.log(name.toUpperCase(), "Uppercase"); // Converts to uppercase
console.log(name.toLowerCase(), "LowerCase"); // Converts to lowercase
console.log(name.trim(), "name");       // Removes extra spaces (if any)

let str = "Hello";
let reversed = str.split("").reverse().join(""); // Reverses string
console.log(reversed);

// ********** Replace Function Examples **********
let text = "I love JavaScript";
let newText1 = text.replace("JavaScript", "Python"); // Replaces first occurrence
console.log(newText1); // I love Python

let text2 = "Banana, Banana, Banana";
let newText2 = text2.replace(/Banana/g, "Apple"); // Replaces all occurrences using regex
console.log(newText2); // Apple, Apple, Apple

// ********** Array Operations **********
const numbers1 = [23, 122, 1, 23, 4, 56];
const highest = Math.max(...numbers1);  // Maximum value => 122
const lowest = Math.min(...numbers1);   // Minimum value => 1
console.log("Highest:", highest);
console.log("Lowest:", lowest);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Sort alphabetically
console.log(fruits);

const numbers2 = [10, 20, 30, 40, 50];
const firstThree = numbers2.slice(0, 3); // Get first 3 elements
console.log(firstThree);

const numbers3 = [10, 20, 30, 40];
console.log("Before:", numbers3);
numbers3.splice(1, 1, 25); // Replace 2nd element (index 1) with 25
console.log("After:", numbers3);

// ********** Object Operations **********
let animal = {
  name: "Dog",
  type: "Mammal",
  sound: "Bark",
  makeSound: function () {
    console.log(this.sound); // Prints the animal sound
  }
};
console.log(animal.name);   // Dog
animal.makeSound();         // Bark

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  start: function () {
    console.log("Car started");
  }
};
console.log(car.brand);     // Toyota
car.start();                // Car started

// ********** Functions **********
const multiplyThree = (a, b, c) => a * b * c;
console.log(multiplyThree(10, 2, 3)); // 10*2*3 = 60

function divideTwo(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
}
console.log(divideTwo(10, 2)); // 5

