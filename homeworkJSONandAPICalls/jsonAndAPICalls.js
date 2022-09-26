// 1
let user = {
    firstName: "John",
    lastName: "Doe",
    age: 25
}

let url = `https://jsonplaceholder.typicode.com/posts/`;

function setUser() {
    let add = JSON.stringify(user);

    let xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(add);

    xhr.onload = function(){
        if (xhr.status === 201){
            console.log(xhr.responseText);
        }
    }
}
setUser();

// 2

fetch(url)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    data = data.slice(0, 10);
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
let mainContainer = document.getElementById("myData");
for (let i = 0; i < data.length; i++) {
let div = document.createElement("div");
div.innerHTML ='id: ' + data[i].id;
mainContainer.appendChild(div);
}
}

 // 3

 fetch(url)
 .then(function(response){
    return response.json();
 })
 .then(function (data){
    data = data.slice(90, 100);
    appendData(data);
})
 .catch(function (err) {
    console.log('error: ' + err);
});
appendData();
