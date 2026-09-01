//Level 1
//------------------------//
//Age Logger
let age = 27;
console.log("You are " + age + "years old");
//Temperature Check
let temperature = 29;
if (temperature > 30) {
    console.log("It's hot outside!");
}
else {
    console.log("The weather is nice");
}
//Even or Odd
let number = 5;
if (number % 2 == 0) {
    console.log("The number is even");
}
else {
    console.log("The number is odd");
}
//------------------------//

//Level 2
//------------------------//
//Grading System
let score = 65;
if (score >= 90 && score <= 100) {
    console.log("A");
}
else if (score >= 80 && score < 90) {
    console.log("B");
}
else if (score >= 79 && score < 80) {
    console.log("C");
}
else {
    console.log("F");
}
//Max of Three
let num1 = 5;
let num2 = 4;
let num3 = 9;
if (num1 > num2 && num1 > num3) {
    console.log("First Number is greater than the others");
}
else if (num2 > num1 && num2 > num3) {
    console.log("Second Number is greater than the others");
}
else if (num3 > num1 && num3 > num1) {
    console.log("Third Number is greater than the others");
}
else {
    console.log("Two or more numbers are equal");
}
//leap Year Checker
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("true");
}
else {
    console.log("false");
}
//------------------------//

//level 3
//------------------------//
//Basic Calculator
let number1 = 14;
let number2 = 9;
let operat = "+";
switch (operat) {
  case "+":
    console.log(number1 + number2);
    break;
  case "-":
    console.log(number1 - number2);
    break;
  case "*":
    console.log(number1 * number2);
    break;
  case "/":
    if (number2 == 0) {
      console.log("You cannot divide by zero");
      break;
    }
    console.log(number1 / number2);
    break;
  default:
    console.log("Wrong Operator");
}
//Valid Triangle
let FirstAngle = 41;
let SecondAngle = 104;
let ThirdAngle = 35;
if (FirstAngle > 0 && SecondAngle > 0 && ThirdAngle > 0) {
    if (FirstAngle + SecondAngle + ThirdAngle == 180) {
        console.log("All Angles are 180 degree in total then it's a Valid Triangle");
    }
    else {
        console.log("It's not a Valid Triangle");
    }
}
else {
    console.log("One of the angles is equal to zero!");
}
//BMI Calculator
let weight = 75;
let height = 1.80;
if(weight / (height * height) <= 18.5) {
    console.log(Math.round(weight / (height * height)) + " " + "Underweight");
}
else if(weight / (height * height) >= 18.5 && weight / (height * height) <= 24.9) {
    console.log(Math.round(weight / (height * height)) + " " + "Normal");
}
else if(weight / (height * height) >= 25) {
    console.log(Math.round(weight / (height * height)) + " " + "Overweight");
}
else if(weight / (height * height) >= 25) {
    console.log("Overweight");
}
//------------------------//
