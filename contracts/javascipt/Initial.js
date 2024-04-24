// let value = 5;

// console.log("gobally scope", value);

//  value = 15;

// // let check = value * value;

// console.log("gobally scope ++++++", value);

// function checkout(){
//     //let check = value;
//     console.log("print this value local",value);
// }
//  value = 15;

// function checkout1(){
//     console.log("print in checkout1 local",value);
// }


// checkout();
// checkout1();


// let number = 50
// console.log(number) // 50

//  number = 100
// console.log(number) // 100







//Conditions( If and else, Nested If else)


// let x = 110;

// let y = 135;

// let z = 80;

// if(x > y && x > z){
//     console.log("x is greatest", x)
// }else if(y > x && y > z){
//     console.log("y is greatest", y)
// }else{
//     console.log("z is greates", z)
// }

// function calculation(a, b){
//     return "Heena";
// }

// for(let i = 0; i < 100; i++){
//     console.log(calculation(5 , 6));
    
// }
  

// var grade = 'C';
// switch (grade) {
//    case 'A': console.log("Good job<br />");
//    break;

//    case 'B': console.log("Pretty good<br />");
//    break;

//    case 'C': console.log("Passed<br />");
//    break;

//    case 'D': console.log("Not so good<br />");
//    break;

//    case 'F': document.write("Failed<br />");
//    break;

//    default:  document.write("Unknown grade<br />")
// }

// if(grade == 'A'){
//     console.log("Good job------<br />");
// }else if (grade == 'B'){
//     console.log("Pretty good+++++<br />");
// }else if (grade == 'C'){
//     console.log("Passed");
// }

// {
//     let a = 10;
//     console.log("Passed",a);
// }

// console.log("print this value",a);

// var count = 0;
// console.log("Starting Loop ");

// while (count < 10) {
//    console.log("Current Count : " ,count );
//    count++;
// }

// console.log("Loop stopped!");

// var count = 1;

// do {
//     count++;
//     console.log("print result", count);
// }while(count < 1);


// for(i = 1; i <= 5; i++){
//     let string = '';
//     //console.log("print", i);
//         for(j = 1; j<= i; j++){
            
//             //console.log("print j over here",j); 
//             string += j
//         }
//         console.log(string);

// }

// for(let i = 10; i >= 0 ; i--){
//     console.log("hey print my number",i);
// }

// let a = '1'
// let b = '1'
// console.log(a-b);


// function check(a,b){
//     let c = a+b;
//     return c

// }


// function returnValue(){
//     console.log("print my result",check(5,6))
// }

//console.log(check(6,6));


// function checkEverything(a,b){
//     if(a>b){
//         console.log("a is greater");
//         return a ;
//     }else{
//         console.log("b is greater")
//         return b;
//     }
//     // console.log("Hey checkout ")
// }

// console.log("write everything within this function ", checkEverything(6,5));


// function initial(a,b){
//     let c;
//     c = a+b;
// }

// let arr = ["let","char","string"]

// for(i = 0; i< arr.length; i++){
//     if(arr[i] == "char"){
//         console.log("heyyyy", i);
//     }
// }

// const radius = [1, 2, 3];
// // function to calculate area of the circle
// const calculateArea =  function (radius) {
//     const output = [];
//     for(let i = 0; i< radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// // function to calculate diameter of the circle
// const calculateDiameter =  function (radius) {
//     const output = [];
//     for(let i = 0; i< radius.length; i++){
//         output.push(2 * radius[i]);
//     }
//     return output;
// }

// const numbers = [1, 2, 3];
// numbers.forEach(num => console.log(num * 2)); // Output: 2, 4, 6

// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6]


// const numbers = [1, 2, 3];

// //Callback function
// const callback = (num) => {
//     //return num
//   console.log(num * 2);
// };

// // forEach takes the callback function and calls it for each element in the array
// let b = numbers.map(callback);


// const add = (a, b) => a + b;

// console.log(add(5,6))


// const numbers = [1, 2, 3];

// // Callback function
// const callback = (num) => {
//   return num * 2;
// };

// // map takes the callback function and applies it to each element in the array, creating a new array
// const doubled = numbers.map(callback);

// console.log(doubled);



// logic to clculate area
// const area = function(radius){
//     return Math.PI * radius * radius;
// }
// logic to calculate diameter
// const diameter = function(radius){
//     return 2 * radius;
// }


// // a reusable function to calculate area, diameter, etc
// const calculate = function(radius, logic){ 
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }
// console.log(calculate(radius, area));
// console.log(calculate(radius, diameter));



// console.log(calculateArea(radius));

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Successs"),3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 Successs"),1000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 Successs"),2000);
// })

// / Promise.race([p1, p2, p3])
//     .then((res) =>{
//         console.log(res);
//     }).catch((err) =>{
//         console.error(err);
//     })

// function number(){
//     var check = new Promise((resolve, reject) => {
//         setTimeout(() => console.log(resolve(3)),3000)
    
//     }).then((res) =>{
        
//         setTimeout(() => console.log(2),3000);
//         // console.log("check my response++++++", res);
//         // console.log("Step 2", res * 2) 
//     })
//     .then((res) => { 
//         console.log("check my response", res);
//         //console.log("Step 3",res + 2)
//     })
// }

// number()



// setTimeout(function () {
//     console.log("timer");
// }, 5000)

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y() {
//     console.log("y");
// })


// const myFunction = () => {
//     let myValue = 2;
//     console.log(myValue);

//     const childFunction = () => {
//          console.log(myValue += 1);
//     }

//     childFunction();
// }

// myFunction();


// const myFunction = () => {
//     let myValue = 2;
//     console.log(myValue);

//     const childFunction = () => {
//          console.log(myValue += 1);
//     }

//     return childFunction;
// }

// const result = myFunction();
// console.log(result);
// result();
// result();
// result();

// let counter = 0;
// let arr = [3,4,6,7,11,13,15,14]
// for(let i=0;i<arr.length;i++){
//   let count = 0;
//   for(let j=1;j<= arr[i];j++){

//     if(arr[i] % j == 0){
//       count+=1
//     }
//   }
//   if(count==2){
//     console.log("prime num",arr[i])
//     counter += 1;
//   }else{
//     console.log("not prime",arr[i])
//   }
  
// } 
// console.log("Counter",counter);

// console.log("Hello world");

//let , var , const 

// let a = 5;
// let b = 2;
// let c = 6;

// if(a > b && a > c){
//     console.log("a is greater");
// }else if(b > a && a > c){
//     console.log("b is greater");
// }else if(c > b && b > a){
//     console.log("c is greater");
// }else{
//     console.log("all the given numbers are equal");
// }


// let a = 2;

// if(a % 3 == 0 && a % 5 == 0){
//     console.log("number is divisible by both 3 and 5",a);
// }else if (a % 3 == 0 || a % 5 == 0){
//     console.log("number is divisible by either 3 or 5",a);
// }else{
//     console.log("None");
// }
    




// async function simpleAsync() {

//     return "1"
//   }
  
//   console.log(simpleAsync())


//   async function simpleAsync() {
//     return "1"
//   }
  
//   simpleAsync().then((data) => {
//       console.log(data)
//   })


//   function returnPromises() {
//     var newPromise = new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Promise Executed...");
//         resolve("Sample Data");
//       }, 3000);
//     });
//     return newPromise;
//   }
  
//  async function ExecuteFunction() {
//     var newData = "Mayank";
//     var getPromise =  await returnPromises();
//     console.log(getPromise);
//     console.log(newData);
//   }
  
//   ExecuteFunction()



// function returnPromises() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Promise Executed...");
//         resolve("Sample Data");
//       }, 3000);
//     });
// }
  
// async function ExecuteFunction() {
//     var newData = "Mayank";
//     var getData = await returnPromises();
//     console.log(getData);
//     console.log(newData);
// }
  
//   ExecuteFunction()


// function student1() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Promise Executed...");
//         resolve("student1");
//       },3000);
//     });
// }

// function student2() {
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         console.log("Promise Executed...");
//         resolve("student2");
//       }, 1000);
//     });
// }

// function student3() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Promise Executed...");
//         resolve("student3");
//       });
//     });
// }

// console.log(student1());
// // student1().then((data) => {
// //           console.log(data)
// //       })
// student2().then((data) => {
//     console.log(data)
// });

// async function ExecuteFunction() {
//     // var newData = "Mayank";
//     var getData = await student1();
//     var getData1 = await student2();
//     console.log(getData);
//     console.log(getData1);
//     // console.log(newData);
// }
  
//   ExecuteFunction()

// let a = 10;
// let b = 5;

// a = 17;

// a+= b;
// console.log("print my number",a);
// let b = 5;

// if(a != b){
//     console.log("both are not equal")
// }else{
//     console.log("both the numbers are equal");
// }

// let a = 7
// if (a%2 == 0){
//     console.log("a is even")
// }
// console.log("a is not even")


// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Example usage:
// const yearToCheck = 2024;
// if (isLeapYear(yearToCheck)) {
//     console.log(yearToCheck + " is a leap year.");
// } else {
//     console.log(yearToCheck + " is not a leap year.");
// }


// While and do-while 
//The while loop is used when you want to continue iterating over a block of code as long as a certain condition is true.

// let i = 1;
// while(i <= 10) {
//     if(i % 2 == 0){
//         console.log(i); // Outputs numbers 0 through 4
//     }
//     i++;
// }

//Do...While Loop: The do...while loop is similar to the while loop, but it checks the condition after executing the block of code. This ensures that the block of code is executed at least once.
// let i = 2
// do {
//     // if(i == 2){
//     //  console.log(i/0);
//     // }
   
// } while(i > 2);

// let a = [-2,5,1]
// let result = 0;

// for(i = 0; i < a.length; i++ ){
//   if(a[i] > 0){
//     console.log("+ve number",a[i])
//   }else{
//     console.log("-ve number",a[i])
//   }
// }
// let i = 2

// switch (i) {
//   case 0: console.log("Print A");  
//   break;

//   case 1: console.log("Print B");
//   break;

//   case 2: console.log("Print C+++");
//   break;

//   case 2: console.log("Print D");
//   break;

//   case 'F': console.log("Print F");
//   break;

//   default:  console.log("whatever||||||||||||")
// }



// arr = ['A','B','C']
// console.log("check if anything exist", arr[0]);
// const prompt = require("prompt-sync")();
// let input = prompt("Enter a list of items separated by commas:");

// let num = new Array(input);

// num[0] = "A"
// num[1] = "B"
// num[2] = "C"

// console.log("check if anything exist", num.shift());
// // let array = input.split(",");

// console.log("print my number",num);

// console.log(array);



// for(i = 1; i <=4; i++){
//     let sum = "";
//     //console.log("print i ",i)
//     for(j = 1; j <= i ; j++){
//         //console.log("print j",j)
//         sum += j
//     }
//     console.log(sum )
// }

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i===0 ||i === 2 || i===n-1) {
//       string += "*";
//     }
//     else {
//         //console.log("Print n",n)
//       if(j === 0 ) {
//         string += "*";
//       }
//       else {
//         //console.log("print j",j)
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);




// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


// In JavaScript, map, forEach, filter, and reduce are higher-order functions that operate on arrays. Each of these functions serves a different purpose and is used in different scenarios. Here's an overview along with examples:

// map()
// Definition: map() creates a new array by transforming every element in an array, individually.

// Use Case: Use it when you want to transform elements in an array.

// // Example:
// const numbers = [1, 2, 3, 4];
// const squares = numbers.map(num => num * num); // [1, 4, 9, 16]

// forEach()
// Definition: forEach() executes a provided function once for each array element.

// Use Case: Use it when you want to execute the same code on every element in an array but don’t need to create a new array.


// const numbers = [1, 2, 3, 4];
// numbers.forEach(num => console.log(num)); // logs 1, 2, 3, 4

// filter()
// Definition: filter() creates a new array with all elements that pass the test implemented by the provided function.

// Use Case: Use it when you want to select a subset of multiple elements from an array.

// Example:

// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// reduce()
// Definition: reduce() executes a reducer function on each element of the array, resulting in a single output value.

// Use Case: Use it when you want to derive a single value from multiple elements in an array.

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 10

// In the reduce() example, 0 is the initial value. The accumulator is the accumulated value returned after each iteration, and currentValue is the current array element.

// Each of these functions is a powerful tool in JavaScript for array manipulation and functional programming. They allow you to write concise and readable code, especially when dealing with lists of data.




// A higher-order function is a function that either takes one or more functions as arguments 
//(i.e., procedural parameters), returns a function as its result, or both. 
//This concept is a central part of functional programming in languages like JavaScript.

// Higher-order functions allow for more abstract ways of thinking about your code, enabling you to write more concise,
// readable, and maintainable code. They are particularly useful in scenarios involving lists, asynchronous operations, 
//and event handling.

// Definition
// Takes Function as Argument: A higher-order function can take one or more functions as arguments.
// Returns a Function: A higher-order function can return a function.
// Example
// Consider this simple example in JavaScript:

// Function as Argument:

// javascript
// Copy code
// function greet(name) {
//   return "Hello " + name;
// }

// function farewell(name) {
//   return "Goodbye " + name;
// }

// function createMessage(name, func) {
//   console.log(func(name));
// }

// createMessage("Alice", greet); // Output: Hello Alice
// createMessage("Bob", farewell); // Output: Goodbye Bob
// Here, createMessage is a higher-order function because it takes a function (greet or farewell) as an argument.

// Returning a Function:

// javascript
// Copy code
// function multiplier(factor) {
//   return function(number) {
//     return number * factor;
//   };
// }

// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(5)); // Output: 10
// console.log(triple(5)); // Output: 15
// In this example, multiplier is a higher-order function because it returns another function.

// Practical Use Cases
// Array Methods: Functions like map, filter, reduce in JavaScript are higher-order functions because 
//they take a function as an argument.
// Callbacks: In asynchronous programming, callbacks (functions passed to other functions to be executed later) 
//are a common use of higher-order functions.
// Function Composition: Creating new functions by combining existing functions.
// Higher-order functions are a powerful concept that enables functional programming techniques in JavaScript, 
//helping you to write more expressive and concise code.


// Filter:
// filter creates a new array with all elements that pass the test implemented by the provided 

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(function(num) {
//   return num % 2 === 0;
// });

// console.log(evenNumbers); // Output: [2, 4]

// ForEach:
// forEach executes a provided function once for each array element.

// const colors = ['red', 'green', 'blue'];

// colors.forEach(function(color) {
//   console.log(color);
// });

// Output:
// red
// green
// blue

// Map:
// map creates a new array populated with the results of calling a provided 
// function on every element in the calling array.

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function(num) {
//   return num * 2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// Reduce:
// reduce executes a reducer function (that you provide) 
// on each element of the array, resulting in a single output value.
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)



// // Separate function to check if a number is even
// function isEven(num) {
//     return num % 2 === 0;
//   }
  
//   // Using the separate function with filter
//   const numbers = [1, 2, 3, 4, 5];
  
//   const evenNumbers = numbers.filter(isEven);
  
//   console.log(evenNumbers); // Output: [2, 4]

// const myPromise = new Promise((resolve, reject) => {  
//   let condition = 2;  
  
//   if(condition == 3) {    
//       resolve('Promise is resolved successfully.');  
//   } else {    
//       reject('Promise is rejected');  
//   }
// });

// myPromise.then((message) => { 
//   console.log(message);
// }).catch((message) => { 
//   console.log(message);
// });

let a = 10;

function addNumber(b, d){
  //let b = 10;
  a = b + d;
 return a
}

console.log("Check",addNumber(15,15));