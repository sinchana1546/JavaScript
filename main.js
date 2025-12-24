// ********** Basic Console Logs **********
console.log("Hello, World!"); 
console.log('A' - 1);         
console.log(2 + '2' + '2');   
console.log('Hello' + 'World' + 89); 
console.log('Hello' - 'World' + 89); 
console.log('Hello' + 78);    
console.log('78' - 90 + '2'); 
console.log(2 - '2' + 90);    
console.log(89 - '90' / 2);  
console.log((true == false) > 2); 

// ********** String Manipulation **********
let name = "Devank dalal";
console.log(name.slice(0, 5), "slice"); 
console.log(name.length, "length");     
console.log(name.toUpperCase(), "Uppercase"); 
console.log(name.toLowerCase(), "LowerCase"); 
console.log(name.trim(), "name");       

let str = "Hello";
let reversed = str.split("").reverse().join("");
console.log(reversed);

// ********** Replace Function Examples **********
let text = "I love JavaScript";
let newText1 = text.replace("JavaScript", "Python"); 
console.log(newText1); 

let text2 = "Banana, Banana, Banana";
let newText2 = text2.replace(/Banana/g, "Apple"); 
console.log(newText2); 

// ********** Array Operations **********
const numbers1 = [23, 122, 1, 23, 4, 56];
const highest = Math.max(...numbers1);  
const lowest = Math.min(...numbers1);  
console.log("Highest:", highest);
console.log("Lowest:", lowest);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); 
console.log(fruits);

const numbers2 = [10, 20, 30, 40, 50];
const firstThree = numbers2.slice(0, 3); 
console.log(firstThree);

const numbers3 = [10, 20, 30, 40];
console.log("Before:", numbers3);
numbers3.splice(1, 1, 25);
console.log("After:", numbers3);

// ********** Object Operations **********
let animal = {
  name: "Dog",
  type: "Mammal",
  sound: "Bark",
  makeSound: function () {
    console.log(this.sound); 
  }
};
console.log(animal.name);   
animal.makeSound();        

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  start: function () {
    console.log("Car started");
  }
};
console.log(car.brand);    
car.start();                

// ********** Functions **********
const multiplyThree = (a, b, c) => a * b * c;
console.log(multiplyThree(10, 2, 3)); 

function divideTwo(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
}
console.log(divideTwo(10, 2));

