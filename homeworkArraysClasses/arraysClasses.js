// 1
let library = [
    {author: "Bill Gates", title: "The Road Ahead", libraryID: 1254},
    {author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264},
    {author: "Suzanne Collins", title: "Mockingjay", libraryID: 3245},
];
// Write a JavaScript function to sort the following array of objects by title value.

  library.sort(function(a, b){
    let x = a.title.toLowerCase();
    let y = b.title.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
console.log(library);

// Create new array filled with the authors names from the previous array.

console.log(library.map((library) => library.author));

// Create function that will return an array with all the books that have library id: 1254.

console.log(library.filter((library) => library.libraryID == 1254 ));


2

class Car {
    constructor(brand , year, horsepower){
        (this.brand = brand), (this.year = year), (this.horsepower = horsepower)
    }
    age(){
      let date = new Date();
      return date.getFullYear() - this.year;
    }
    canDrive(){
          for (let i = 0; i < this.year.length; i++) {
            if (this.year[i] > 25) {
              console.log(`${this.brand[i]} can drive.`);
            } if (this.year[i] < 25 && this.year[i] > 18 ) {
              console.log(`${this.brand[i]} can drive only cars with up to 105 horsepower.`);
            } if(this.year[i] < 18) {
              console.log(`${this.brand[i]} is not allowed to drive.`);
            }
          }}
      }
              
// Car age
let myCar = new Car("Opel", 2008);
console.log(myCar.age());

let users = [
    {user: "Petar Petrovski", age: 20},
    {user: "Stefan Stefovski", age: 26},
    {user: "John Doe", age: 16},
    {user: "Jane Doe", age: 32}
];
// Cars they can drive
let userAge = users.map(function (age) {
    return age.age;
  });
let userName = users.map(function (user) {
    return user.user;
  });
let they = new Car(userName, userAge);
  they.canDrive();

