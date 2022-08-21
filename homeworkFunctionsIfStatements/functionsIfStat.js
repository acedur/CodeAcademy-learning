// prv del

let broj = 6;
let num = 5;
let str = "5";

function isNumberEqual(broj, num, str){
    if(broj == num || broj == str || num == str){
        return true
    }
    else{return false}
};

let result = isNumberEqual(broj, num, str)
console.log(result);

// vtor del

function date(month) {
    let thirtyOne = [1, 3, 5, 7, 8, 10, 12];
    let thirty = [4, 6, 9, 11];
    month = prompt("Enter a month")
    month = Number(month)
    if (thirtyOne.includes(month)) {
      return "31 days";
    } else if (thirty.includes(month)) {
      return "30 days";
    } else {
      let twentyEight = prompt("Enter a year");
      if (twentyEight % 4 != 0) {
        return "28 days";
    } else if (twentyEight % 4 == 0 && twentyEight % 100 == 0) {
               if( twentyEight % 400 == 0) {
                        return 29
                  }
                else { return 28 }
   } else {
              return 29
   }
    }
  };
  console.log(date());