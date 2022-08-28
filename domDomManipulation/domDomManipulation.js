// 1

let users = [
    {name: "Jack", surname: "Jones"},
    {name: "John", surname: "Dean"},
];
// Celiot HTML e tuka, obelezano so komentar = 1 Table                                                                                                                                                                      2 List                                                                                                                                                                                        3 Form                                                                                                        
document.body.innerHTML = 
"<table class= 'table table-success table-striped table-bordered border-primary'><thead class=' text-center'><th>Name</th><th>Surname</th></thead><tbody class=' text-center' id='tableContent'></tbody></table><br/><ul id='list'><li class='item'>Liam</li><li class='item'>Olivia</li><li>Noah</li><li class='item'>Emma</li><li class='item'>Oliver</li><li id='lastItem' class='item'>Charlotte</li></ul><br/><article><form id='form'><label for='firstName'>First Name:</label><input firstName='firstName' type='text' id='firstName' /><label for='lastName'>Last Name:</label><input name='lastName' type='text' id='lastName' /><button type='submit'>Insert</button></form></article>";

let tBody = document.getElementById("tableContent")

for(let i = 0; i < users.length; i++){
    tBody.insertRow();
    tBody.rows[i].insertCell();
    tBody.rows[i].cells[0].textContent = users[i].name;
    tBody.rows[i].insertCell();
    tBody.rows[i].cells[1].textContent = users[i].surname;
};

// 2

document.body.childNodes[2].firstChild.style.color = "red";
document.body.childNodes[2].lastChild.style.color = "red";
document.body.childNodes[2].style.backgroundColor = "lime";
document.body.childNodes[2].style.textDecoration = "underline";

// 3

document.body.children[2].getElementsByClassName("item")[3].style.color = "blue";
document.body.children[2].getElementsByClassName("item")[2].style.background = "red";

// 4
// console.log
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
document.querySelector("#form").addEventListener("submit", function (a) {
  a.preventDefault();
  console.log(firstNameInput.value, lastNameInput.value);
});
// list edit
document.querySelector("button").addEventListener("click", function () {
  let fName = document.getElementById("firstName").value;
  let lName = document.getElementById("lastName").value;
  document.getElementById("lastItem").innerHTML = `${fName} ${lName}`;
})



