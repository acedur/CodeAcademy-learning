// 1 

function validateFirstName() {
    let text = "OK";
    if (document.getElementById("fname").validity.patternMismatch) {
        text = "Wrong input";
    }
    document.getElementById("errorFN").innerHTML = text;
}

function validateLastName() {
  let text = "OK";
  if (document.getElementById("lname").validity.patternMismatch) {
      text = "Wrong input";
  }
  document.getElementById("errorLN").innerHTML = text;
}

function validateEmail() {
  let text = "OK";
  if (document.getElementById("email").validity.patternMismatch) {
      text = "Wrong input";
  }
  document.getElementById("errorEmail").innerHTML = text;
}

function validatePassword() {
  let text = "OK";
  if (document.getElementById("pass").validity.patternMismatch) {
      text = "Wrong input";
  }
  document.getElementById("errorPass").innerHTML = text;
}

function validatePhoneNum() {
  let text = "OK";
  if (document.getElementById("phoneNum").validity.patternMismatch) {
      text = "Wrong input";
  }
  document.getElementById("errorPhoneNum").innerHTML = text;
}

function validateForm () {
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePassword();
  validatePhoneNum();
}

// 2

function store(){
let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
let age = prompt("Enter your age");

localStorage.setItem("age", age);
sessionStorage.setItem("first name", firstName);
sessionStorage.setItem("last name", lastName);
}

// 3

  async function getText(){
    let response = await fetch("text1.txt").then((response) =>(response.text()))
    let aResponse = await fetch("text2.txt").then((aResponse) => (aResponse.text()))
    if(response > aResponse){
      document.getElementById("wiki").innerHTML = response
    } else{
      document.getElementById("wiki").innerHTML = aResponse
    }
  }

