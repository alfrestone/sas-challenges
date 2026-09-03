//Challenge 1 — Show Even Numbers
//------------------------------------//
function afficherPairs(n) {
  let i = 1;
  while (i <= n) {
    if(i % 2 === 0) {
    console.log(i);
    i++;
    }
    i++;
  }
}
afficherPairs(10);

//Challenge 2 — Counting even results
//------------------------------------//
function compterPairs(nbr1, nbr2) {
  let i = 0;
  while (i <= nbr2 && nbr1 <= nbr2) {
    let result = nbr1 + nbr2 + i;
    if (result % 2 === 0) {
      console.log(result);
    }
    result = 0;
    nbr1++;
    i++;
  }
}
compterPairs(10,20);

//Challenge 3 — Building a triangle
//------------------------------------//
function construireTriangle(taille) {
  let i = 0;
  while (i < taille) {
    let j = 0;
    let str = ""
    while (j <= i) {
      str = str + j;
      j++;
    }
    console.log(str);
     i++;
    }
}
construireTriangle(5);

//Challenge 4 — Callback Calculator
//------------------------------------//

function calculer(nbr1, nbr2, callback) {
    console.log(multiplication(nbr1,nbr2));
}
function addition(a, b) {
  return a + b;
}
function soustraction(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function div(a, b) {
  if (b === 0) {
    return "You cannot do it on zero";
  }
  else {
      return a / b;
  }
}
calculer(5,6);