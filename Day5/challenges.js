//---------------------------//
//level1
//---------------------------//

//Car Object
const car = {
    brand : "Lexus",
    model : "Es",
    year : 2027
}
console.log(`This car is ${car.brand} ${car.model}`);

//Object Mutation
const user = {
    age : 21
}
console.log(`age before update ${user.age}`);
user.isActive = true;
user.age = 24;
console.log(`age after update ${user.age}`);

//Key/Value Iteration
car = {
  "color": "red",
  "wheels": 4,
  "isElectric": true
}
for (key in car) {
  console.log(car[key]);
}

//---------------------------//
//level2
//---------------------------//

//Oldest Person
people = [
  { name: "Minus", age: -5 },  // "Oldest" in number terms
  { name: "Zero", age: 0 }
]

function findolder(people) {
  if (people.length === 0) {
    return -1;
  }
  let i = 0
  let maxage = people[0].age;
  let name  = people[0].name;
  while(i < people.length - 1) {
    if (maxage < people[i + 1].age) {
      maxage = people[i + 1].age;
      name = people[i + 1].name;
    }
    i++;
  }
  return name;
}
console.log(findolder(people));

//In stock filter
const products = [
  { name: "Apple", price: 1.99, inStock: true },
  { name: "Banana", price: 0.99, inStock: false },
  { name: "Orange", price: 2.49, inStock: true }
]

function stock(products) {
  let i = 0;
  let array = [];
  while (i < products.length) {
    if (products[i].inStock === true) {
      array.push(products[i]);
    }
    i++;
  }
  return array;
}
console.log(stock(products))

//Total in cart
const cart = [
  { price: 5.00, quantity: 2 },  // 2 × $5 = $10
  { price: 3.50, quantity: 1 },  // 1 × $3.50 = $3.50
  { price: 1.25, quantity: 4 }   // 4 × $1.25 = $5.00
]

function total_cart(cart) {
  let i = 0;
  let total = 0;
  while (i < cart.length) {
    total = total + cart[i].price * cart[i].quantity;
    i++;
  }
  return total;
}
console.log(total_cart(cart));

//---------------------------//
//level3
//---------------------------//

//Group by department
const employees = [
  { name: "Alice", department: "HR" },
  { name: "Bob", department: "Engineering" },
  { name: "Charlie", department: "HR" }
]

function grouper(emp) {
  let i = 0;
  let array = {};
  while (i < emp.length) {
    if (!(array[emp[i].department])) {
      array[emp[i].department] = [];
    }
    array[emp[i].department].push(emp[i].name);
    i++;
  }
  return array;
}
console.log(grouper(employees))

// Merged array 1D

const basicInfo = {
  name: "Zara",
  email: "zara@work.com"
}

const contactInfo = {
  email: "zara@personal.com",
  address: "123 Main St"
}

function grouped (basicInfo, contactInfo) {
  const group = {... basicInfo , ... contactInfo}
return group;
}

console.log(grouped(basicInfo,contactInfo));

//Deep Clone Intro
const original = {
  name: "Alex",       // String (primitive)
  age: 28,            // Number (primitive)
  isActive: true,     // Boolean (primitive)
  id: "USR-734",      // String (primitive)
  score: 95.5         // Float (primitive)
};

function cloneobject(array) {
    if (array === undefined) {
        return -1;
    }
    let emparray = {};
    for (let key in array) {
        emparray[key] = array[key];
    }
   return emparray;
}
console.log(cloneobject(original));
