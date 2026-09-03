//---------------------------//
//Level 1
//---------------------------//

//Greeting function
function greet(name) {
    console.log(`Hello ${name}!`);
}
greet("Mahmod");

//Arrow addition
const add = (a, b) => a * b;
console.log(add(5,5));

//Square Function
function square(num) {
    return num ** 2;
}

//---------------------------//
//Level 2
//---------------------------//

//Temperature Converter
function celsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}
console.log(celsiusToFahrenheit(19));

//String Emptiness Check

//Without trim
const isEmpty = (str) => {
  let i = 0;
  while (i < str.length) {
    const conv = str.charCodeAt(i);
    if (conv === 32 || (conv >= 9 && conv <= 13)) {
      i++;
    }
    else {
      return false;
    }
  }
  return true;
}

//With trim
const isEmpty = (str) => {
  if (str.trim().length === 0) {
    return true;
  }
  else {
    return false;
  }
}

//Factorial Calculator
function factorial(n) {
  let i = 1;
  let r = 1;
  while (i <= n) {
    r *= i;
    i++;
  }
  return r;
}

//---------------------------//
//Level 3
//---------------------------//

//Math Callback
function calcualte(a, b, operation) {
  console.log(operation(a,b));
}

const addi = (x ,y) => {
  return (x + y);
}
const subt = (j ,y) => {
  return (j - y);
}
calcualte(5,10,subt);

//Closure intro
function createMultiplier(multiplier) {
 const mult = () => {return multiplier * multiplier}
 return mult();
}
console.log(createMultiplier(5));

//Custom Filter Outline
function filterOddNumbers(arr, callback) {
  console.log(callback(arr));
}
let checkodd = (arry) => {
  if(arry % 2 !== 0) {
    return true;
  }
  else {
    return false;
  }
}
//---------------------------//