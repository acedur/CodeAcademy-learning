// 1
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24
};


const propertyValues = Object.values(person);
const propertyNames = Object.keys(person);
const entries = Object.entries(person);

console.log(propertyNames, propertyValues, entries);


// 2
const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  };

  console.log(
    convertArrayToObject(
      [
       person
      ]
    ),
  );

//   3 proveruva keys i value
const isEqual = (firstObj, secondObj) =>{
    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);

    for (let objKey of firstObjKeys){
        if (firstObj[objKey] !== secondObj[objKey])
        return false;
    }
    return true
};


const firstObj = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 24
};

const secondObj = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24
};
console.log(isEqual(firstObj, secondObj));