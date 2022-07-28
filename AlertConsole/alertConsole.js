let myName = "Aleksandar";
let age = 28;
let jobTitle = "Sales rep.";
let gender = "Male";
let citySkopje = true;
// object
let me = {
    myFirstName : myName,
    myAge : age,
    myOcuption : jobTitle,
    myGender : gender,
    myCitySkopje : citySkopje,
};
console.log(me)
// ovde e funkcijata za kopceto
let btn = document.getElementById('click');
btn.addEventListener('click', function(){alert(myName)});