// Zadaca 1

let arr = [25, 48, 98, 67, 48, 76];
let target = 67;
let i = 0;
while (i < arr.length){
    if (arr[i] === target) {
        arr.splice(i, 1);
    }
    else{i++;}
};

console.log(arr);

// Zadaca 2

function countDigits(n) {
    let count = 0;
    if (n >= 1) ++count;
  
    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
  
    return count;
  }
  console.log(countDigits(65849626));

//   Zadaca 3

let arrLargest = [67542734, 6754172, 1932467, 632846];
let largestNum = 0;

for (let i = 0; i < arrLargest.length; i++) {
  if (largestNum < arrLargest[i]) {
    largestNum = arrLargest[i];
  }
}
console.log(largestNum);
