//map()
//1 to 1 output of array
let myArray = [1, 2, 3, 4];
let newArray = [];

for (let i = 0; i < myArray.length; i++) {
  newArray.push(myArray[i] + 1);
}
//2,3,4,5
console.log(newArray);

// demo list
const coffeeMenu = [
  {
    name: "cappuccino",
    price: 8,
    seasonal: false,
  },
  {
    name: "espresso",
    price: 5,
    seasonal: false,
  },
  {
    name: "latte",
    price: 5,
    seasonal: false,
  },
  {
    name: "affogato",
    price: 9,
    seasonal: true,
  },
  {
    name: "macchiato",
    price: 6,
    seasonal: false,
  },
  {
    name: "americano",
    price: 7,
    seasonal: false,
  },
  {
    name: "iced coffee",
    price: 6,
    seasonal: false,
  },
  {
    name: "frappe",
    price: 8,
    seasonal: false,
  },
  {
    name: "cuban espresso",
    price: 10,
    seasonal: true,
  },
];

function getName(element) {
  return element.name;
}

const listOfDrinks = coffeeMenu.map(getName);
console.log(listOfDrinks);
//arrow function

//demo for map
function increaseByOne(element) {
  return element + 1;
}
let newNewArray = myArray.map(increaseByOne);

//filter()

function isUnder5Dollars(element) {
  return element.price <= 5;
}

const filteredMenu = coffeeMenu.filter(isUnder5Dollars);
console.log(filteredMenu);

//reduce()
function addPrices(total, currentElement) {
  return total + currentElement.price;
}

const totalPrice = coffeeMenu.reduce(addPrices, 0);
console.log(totalPrice);
