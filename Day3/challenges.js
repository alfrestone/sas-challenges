//-----------------------------------//
//Level 1
//-----------------------------------//
//Length & Uppercase
let str = "Hello There";
console.log("length is " + str.length);
console.log(str.toUpperCase());

//First & Last Char
let str = "Hello World";
console.log(`First Char is ${str[0]},Last Char ${str[str.length - 1]}`);

//Word Replacer
let str = "I love apples";
str = str.replace("apples", "bananas");
console.log(str);

//-----------------------------------//
//Level 2
//-----------------------------------//

//Palindrome check

function plandromecheck(str) {
let i = 0;
let j = str.length - 1;
while (i < j) {
  if (str[i] === str [j] && i < str.length) {
  i++;
  j--;
  }
  else {
    return false;
  }
  return true;
}
}

//String Reversal
function stringrev(str) {
  str = str.trim();
  let i = str.length - 1;
  let str1 = [];
  while (i >= 0) {
    str1 += str[i];
    i--;
  }
  return str1;
}

//Charachter Counter
function countChar(str, char) {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    str = str.trim();
    if (str[i] === char) {
      count++;
      i++;
    }
    else {
      i++;
    }
  }
  return count;
}
//-----------------------------------//
//Level 3
//-----------------------------------//

//Capitalize Words

//Simple Version
function capit(str) {
  return str.capitalize();
}

//Complex Version
function capit(str) {
  let i = 0;
  let hold_var = [];
  let result = [];
  while (i < str.length) {
    if ((str.charCodeAt(i - 1) === 32 || i === 0) && str.charCodeAt(i) >= 97 && str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
    hold_var[i] = str.charCodeAt(i) - 32;
    i++;
    }
    else {
      hold_var[i] = str.charCodeAt(i);
      i++;
    }
  }
  result += String.fromCharCode(...hold_var);
  return result;
}

//String compressor
function strcompressor(str) {
  let i = 0;
  let str1 = [];
  let newstr = [];
  while (i < str.length) {
    let j = i;
    let count = 0;
    while (i < str.length && str[i] === str[j]) {
      count++;
      j++;
    }
    str1.push(str[i] + count);
    newstr = str1.join('');
    i = j;
  }
  
  return newstr;
}

//Anagram checker
function anacheck(str1, str2) {
  str1 = str1.replaceAll(' ', '').split('').sort();
  str2 = str2.replaceAll(' ', '').split('').sort();
  let i = 0;
  while (i < str1.length && i < str2.length) {
    if (str1[i] === str2[i]) {
      i++;
    }
    else {
      return false;
    }
  }
  return true;
}