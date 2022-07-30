// Prv del

let num1 = 1;
let num2 = 0;
let string1 = "1";
let string2 = "0";
let string3 = "ten";
let bool1 = true;
let bool2 = false;
let var1 = null;
let var2 = undefined;
let con1 = "";
let con2 = '';

console.log(Boolean(num1));
console.log(Boolean(num2));
console.log(Number(string1));
console.log(Number(string2));
console.log(Boolean(string3));
console.log(typeof string3);
console.log(Number(bool1))
console.log(Number(bool2))
console.log(Number(var1))
console.log(Number(var2))
console.log(Boolean(con1))
console.log(Boolean(con2))

// Vtor del

let day = 19;
console.log(day)

let sumFName = 20;
console.log(sumFName)

let subtYear = 94 - 19;
console.log(subtYear)

let sumYear = 1 + 9 + 9 + 4;
console.log(sumYear)

// Tret del

let higher = day > sumFName;
console.log(higher)

let divide = 75 % 23;
console.log(divide)

let iAm = "I am the" + ((higher && divide < 3) ? "Light" : "Darkness");
console.log(iAm)