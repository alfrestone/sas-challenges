//---------------------------//
//Level 1
//---------------------------//

//Array Basics
const array = ["Blue","Pink","Yellow"];
array.push("Red");
array.shift();
console.log(array);

//Array sum
const array = [2,5,7,11,13];
let i = 0;
let result = 0;
while (i < array.length) {
  result += array[i];
  i++;
}

//Element existence 
function include(array, element) {
  let i = 0;
  while (i < array.length) {
    if (array[i] !== element) {
      i++;
    }
    else {
      return true;
    }
  }
  return false;
}

//---------------------------//
//Level 2
//---------------------------//

//Maximum
function maxval(array) {
  let i = 0;
  let hold_val = array[i];
  while (i < array.length) {
     if (hold_val < array[i]) {
       hold_val = array[i];
      }
    i++;
  }
  return hold_val;
}
//Remove Duplicates
function rmdup(array) {
  let i = 0;
  let s_array = [];
  while (i < array.length) {
    if (!(s_array.includes(array[i]))) {
    s_array.push(array[i]);
    }
    i++;
  }
  return s_array;
}

//Custom Reverse
function c_reverse(array) {
  let i = array.length - 1;
  let r_array = [];
  while (i >= 0) {
    r_array.push(array[i])
    i--;
  }
  return r_array;
}
//---------------------------//
//Level 2
//---------------------------//

//Flatten 2D array
let result = [];
function flatten2D (array) {
  let i = 0;
  let result = [];
  while (i < array.length) {
    let j = 0;
    while (j < array[i].length) {
      result.push(array[i][j]);
      j++;
    }
    i++;
  }
  return result;
}

//Diagonal Sum
function Diagonal_Sum (array) {
  let i = 0;
  let result = 0;
  while (i < array.length) {
    result += array[i][i];
    i++;
  }
  return result;
}

//All element sum
function Diagonal_Sum (array) {
  let i = 0;
  let result = 0;
  while (i < array.length) {
    let j = 0;
    while (j < array[i].length) {
    result += array[i][j];
    j++;
    }
    i++;
  }
  return result;
}

//Matrix Transposition
function matrixtrans(array) {
  let i = 0;
  let rows = array.length;
  let columns = array[i].length;
  let result = [];
  while (i < rows) {
    let j = 0;
    while (j < columns) {
      if (result[j] === undefined) {
        result[j] = [];
      }
      result[j][i] = array[i][j];
      j++;
    }
    i++;
  }
  return result;
}
