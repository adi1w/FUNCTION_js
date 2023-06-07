//A1//

const square = function (number) {
  return number * number;
};

console.log(square(4))


//A2//

function add() {
  var numOne, numTwo, sum;

  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne + numTwo;
  document.getElementById("answer").value = sum;
}

//A3//

let greet = () => console.log('Hello');
greet();

//A4//
var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();

//A5//

var x = 21;
girl();
console.log(x)
function girl() {
  console.log(x);
  var x = 20;
};


//A6//
var x = 21;
a();
b();

function a() {
  x = 20;
  console.log(x);
};
function b() {
  x = 40;
  console.log(x)
};


//A7//

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(4));


//A8//

function FindSum(a, b) {
  return a + b;
}
function DisplayData(data, batch) {
  console.log(`i am from ${data} and My batch is EA${batch}`)
}


//A9//
Abc();
const Abc = function () {
  let value = 20;
  console.log(value);
}

//A10.
var a = 10;
(function () {
  console.log(a);
  var a = 20;
})();

//A11//



