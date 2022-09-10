// PRVA
function alertForm() {
    if(document.getElementsByClassName("field")[0].value.length == 0)
{
    alert("THE FORM IS INCOMPLETE !!!")
}
else if(document.getElementsByClassName("field")[1].value.length == 0)
{alert("THE FORM IS INCOMPLETE !!!")
}
else if(document.getElementsByClassName("field")[2].value.length == 0)
{alert("THE FORM IS INCOMPLETE !!!")
}
else if(document.getElementsByClassName("field")[3].value.length == 0)
{alert("THE FORM IS INCOMPLETE !!!")
}
else if(document.getElementsByClassName("field")[4].value.length == 0)
{alert("THE FORM IS INCOMPLETE !!!")
}
else {
    alert ("OK!")
}
};


// VTORA
function check() {
    if (document.getElementsByClassName('field')[0].value == '' || !document.getElementsByClassName('field')[0].value.length) {
      document.getElementsByClassName('error')[0].innerHTML = "Required field";
    }
    else if (document.getElementsByClassName('field')[1].value == '' || !document.getElementsByClassName('field')[1].value.length) {
        document.getElementsByClassName('error')[1].innerHTML = "Required field";
    }
    else if (document.getElementsByClassName('field')[2].value == '' || !document.getElementsByClassName('field')[2].value.length) {
        document.getElementsByClassName('error')[2].innerHTML = "Required field";
    }
    else if (document.getElementsByClassName('field')[3].value == '' || !document.getElementsByClassName('field')[3].value.length) {
        document.getElementsByClassName('error')[3].innerHTML = "Required field";
    }
    else if (document.getElementsByClassName('field')[4].value == '' || !document.getElementsByClassName('field')[4].value.length) {
        document.getElementsByClassName('error')[4].innerHTML = "Required field";
    }
  };
function empty() {
      document.getElementsByClassName('error')[0].innerHTML = "";
      document.getElementsByClassName('error')[1].innerHTML = "";
      document.getElementsByClassName('error')[2].innerHTML = "";
      document.getElementsByClassName('error')[3].innerHTML = "";
      document.getElementsByClassName('error')[4].innerHTML = ""; 
  };

// TRETA
let counterVal = 0;

function incrementClick() {+
    update(++counterVal);
}

function resetCounter() {
    counterVal = 0;
    update(counterVal);
}

function update() {
    console.log(counterVal);
}