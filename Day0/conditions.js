//Regular code testing
//----------------------------//
//If else conditions
let battper = 67;
if (battper == 100){
  console.log("Fully Charged");
}
else if (battper >= 80) {
  console.log("Optimal High");
}
else if (battper >= 50) {
  console.log("Mid Charge");
}
else if (battper >= 20) {
  console.log("Low Power");
}
else if (battper >= 5) {
  console.log("Critical low");
}
else {
  console.log("Shutdown Imminent");
}
//----------------------------//
//If else conditions
let numb1 = 10;
let numb2 = 5;
if (numb1 < 10 && numb2 < 10) {
  console.log("Both are smaller than 10!");
}
else if (numb1 < 10 || numb2 < 10) {
  if (numb1 < 10) {
    console.log("Numb1 is smaller than 10");
  }
  else if (numb2 < 10) {
    console.log("Numb2 is smaller than 10");
  }
}
else {
  console.log("Both are bigger than 10");
}
//----------------------------//
//Switch cases
let x = 14;
let y = 9;
let operat = "+";
switch (operat) {
  case "+":
    console.log(x + y);
    break;
  case "-":
    console.log(x - y);
    break;
  case "*":
    console.log(x * y);
    break;
  case "/":
    console.log(x / y);
    break;
  default:
    console.log("Wrong Operator");
}
//----------------------------//