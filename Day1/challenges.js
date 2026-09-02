//-----------------------//
//Level 1
//-----------------------//

//While loop counting
let i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}

//Sum of First 100 Numbers
let total = 0;
for(let i = 0; i <= 100; i ++) {
    total += i;
}
console.log(total);

//Multiplication Table
let num = 5;
for(let i = 1; i <= 10; i++) {
    console.log(num + " * " + i + " = " + num * i);
}
//-----------------------//
//Level 2
//-----------------------//

//FizzBuzz
let i = 1;
while (i <= 50) {

    if(i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0) {
        console.log("Buzz");
    }
    else if(i % 5 === 0) {
        console.log("Fizz");
    }
    else {
        console.log(i);
    }
    i++;
}

//Count Vowels
//For loop
let str = "Hello World";
let count = 0;
for (let i = 0; i <= str.length; i++) {
  if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
    count++;
  }
  else if (str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
    count++;
  }
}

console.log("The count is " + count);

//While loop
let str = "Hello World";
let count = 0;
let i = 0;
while (i <= str.length) {
  if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
    count++;
  }
  else if (str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
    count++;
  }
  i++;
}

console.log("The count is " + count);

//Square of Stars
let str = '*'
let i = 0;
let str2 = ""
while (i < 5) {
  let j = 0;
  while (j < 5) {
    str2 += str;
    j++;
  }
  console.log(str2)
  str = ""
  i++;
}

//-----------------------//
//Level 3
//-----------------------//
//Prime numbers
let i = 1;
while (i <= 50) {
  if (i === 1) {
    i++;
    continue;
  }
  if (i === 2) {
    console.log(i);
    i++;
    continue;
  }
  if (i % 2 == 0 || i % 3 == 0 || (i % 3 == 0 && i % 5 == 0)) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

//Right-angled triangle
// V1
let str = '*';
let str2 = '*';
for(let i = 0; i <= 5; i++) {
  for(let j = 0; j <= 5; j++) {
    console.log(str2);
    str2 += str;
    if(str2.length === 5) {
      break;
    }
  }
  if(str2.length === 5) {
      break;
    }
}
console.log(str2);

//V2
let str = '*';
let str2 = '*';
for(let i = 0; i < 5; i++) {
  for(let j = 0; j < 5; j++) {
    console.log(str2);
    str2 += str;
  }
  str2 = '*';
  break;
}
//V3
let str = '*';
let str2 = '*';
for(let i = 0; i < 5; i++) {
  str2 = '*'
  for(let j = 0; j < i; j++) {
    str2 += str;
  }
  console.log(str2);
}

//Fibonacci Sequence
let result = 0 , i = 1, min1 = 0, min2 = 1;
while (i <= 5) {
  if (i === 0) {
    break;
  }
  else if (i === 1) {
    i++;
    continue;
  }
  else {
  result = min1 + min2;
  min1 = min2;
  min2 = result;
  }
  i++;
}
console.log(result);
//-----------------------//