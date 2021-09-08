// https://javascript.plainenglish.io/some-javascript-interview-questions-asked-in-interviews-of-product-companies-ec5fbca3aa5d

// Product-Oriented JavaScript Interview Questions
// By Kunal Tandon, Aut4, 2019
// ***********************************
// Q1. Output of the following code.

var values = [];

for (var i = 0; i < 10; i++) {
  values.push(() => {
    console.log(i);
  });
}

for (var index = 0; index < 10; index++) {
  values[index]();
}

// Output
// prints 10 ten times.
// variable i gets hoisted to the top of the code and final value of i is 10 after the code gets executed.
// replace var bu let to get desired output.
// Using IIFE also we can get desired output.
var values = [];

for (var i = 0; i < 10; i++) {
  (function(val) {
    values.push(() => {
      console.log(val);
    });
  })(i);
}

for (var index = 0; index < 10; index++) {
  values[index]();
}

// ***********************************
// Q2. What's wrong?

var arr = [];
var myData = {};

// for(let i=0; i<5; i++){
//   const data = myData;
//   data.message = `message_${i}`;
//   data.code = i;
//   arr.push(data);
// }

// Each element in arr will be 
// {code: 4, message: "message_4"}

// The solution
// In the code above, each element is referencing the same object. 
for (let i = 0; i < 5; i++) {
  const data = {};
  data.message = `message_${i}`;
  data.code = i;
  arr.push(data);
}

console.log(arr);
