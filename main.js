// ---------- Math: Max & Min ----------
const nums1 = [23, 122, 1, 23, 4, 56];

const highest = Math.max(...nums1);
const lowest = Math.min(...nums1);

console.log("Highest:", highest);
console.log("Lowest:", lowest);


// ---------- Array Sort ----------
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log("Sorted fruits:", fruits);


// ---------- slice() example ----------
const nums2 = [10, 20, 30, 40, 50];
const firstThree = nums2.slice(0, 3);
console.log("First three:", firstThree);


// ---------- splice() example ----------
const nums3 = [10, 20, 30, 40];
console.log("Before splice:", nums3);

// Remove 2nd element and add 25
nums3.splice(1, 1, 25);

console.log("After splice:", nums3);


// ---------- Object example (animal) ----------
let animal = {
  name: "Dog",
  type: "Mammal",
  sound: "Bark",
  makeSound() {
    console.log(this.sound);
  }
};

console.log("Animal name:", animal.name);
animal.makeSound();


// ---------- Object example (car) ----------
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  start() {
    console.log("Car started");
  }
};

console.log("Car brand:", car.brand);
car.start();


// ---------- Arrow function ----------
const multiplyThree = (a, b, c) => a * b * c;
console.log("Multiply:", multiplyThree(10, 2, 3));


// ---------- Normal function ----------
function divideTwo(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
}

console.log("Divide 10 / 2:", divideTwo(10, 2));
console.log("Divide 15 / 3:", divideTwo(15, 3));
console.log("Divide 10 / 0:", divideTwo(10, 0));
