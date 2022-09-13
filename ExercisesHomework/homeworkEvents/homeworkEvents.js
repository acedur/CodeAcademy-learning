// Da se napravi meni kade shto korisnikot kje moze da pristapi do home , about , contant
// Ova meni kje gi ima na site 3 strani pr :
//<div>
// <div>Home</div>
//<div>About</div>
//<div>Contack</div>
//</div>
// kje go ima na trite strani
// dokolku korisnikot se naoga vo momentot na home page => <div>Home</div> kje ima
// crveni bukvi
// dokolku korisnikot se naoga vo momentot na about page => <div>About</div> kje ima
// crveni bukvi a hope page kje gi izgubi crvenite bukvi i kje ima crni

// koga userot kje e na home page i klikne na start kopceto
// kje napravime mini kalkulator koj kje pravi zbir od 2 broja
// dvata broja userot kje gi vnesuva preku promt.
// Otkako kje se vnesat dvata broja na ekran prikazi go zbirot

// koga kje sme na about page
// na sekoi 10 sekundi da se dodade paragrav koj kje ima lorem ipsum teskt ( bilo kakov teskt)

// koga kje sme na contant page
// da napravime forma koja kje bara od korisnikot da vnese
// ime , prezime, email , gender , telefon , adresa
// pritoa da napravime validacii za imeto ( da e samo string ) , prezimetno ( da e samo string)
// email ( mora da sodrzi @ ) , gender ( radio button kade mora edno da e selektirano)
// telefon ( mora da se brojki i da gi ima 9 ) i adresa ( mora da bide string)
// validacijata da se izvrshi otkako kje se klikne kopceto submit.
// ako validacijata e validna na console log da go ispecatime objektot od formata


// home
function calculate() {
    let x,y,z,oper;
    x=prompt("Type first number");
    y=prompt("Type second number");
    oper = "+";

    if(oper){
      z=Number(x)+Number(y);
    }
    document.getElementById("rezultat").innerHTML = z;
    
      }
      
//   about
      function addParagraph() {
        setInterval(() => {
          const paragraph = document.createElement("p");
          paragraph.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit est praesentium reprehenderit unde? Quaerat adipisci, aperiam, voluptatibus laboriosam eos delectus quam est modi architecto iusto fuga ex alias hic nam?";
          document.body.appendChild(paragraph);
        }, 1 * 3000);
      }
      
// contact
 function validateField(valid) {
        return (condition = !/\e/.test(valid) && valid != "");}

    function validateForm(fname, lname, email, gender, phoneNum, address) {
        validateField(fname) ? {} : (fname = "Required field!");
        validateField(lname) ? {} : (lname = "Required field!");
        email.includes("@") ? {} : (email = "Must contain @!");
        gender != "" ? {} : (gender = "Select an option!");
        !(phoneNum.length < 9) && !(phoneNum.length > 9) && !isNaN(phoneNum * 1)
          ? {}
          : (phoneNum = "This field must contain 9 numbers!");
        validateField(address) ? {} : (address = "Required field!");
      
        console.log(fname, lname, email, gender, phoneNum, address
        );
      }