// prva i vtora

let swatch = 0;

const wait = function(delay, br) {
    setTimeout(() => {
        counting = setInterval(() => {
            console.log(swatch++);
            if(swatch == br + 1){
                clearInterval(counting);
                swatch = 0;
            }
        }, 1 * 1000);
    }, delay * 1000);
}

const start = document
  document.getElementById("button-start")
  .addEventListener("click", function () {
    wait (3, 10);
  });

const pause = document
document.getElementById("button-pause")
  .addEventListener("click", function () {
    clearInterval(counting);
  });

const stop = document
document.getElementById("button-stop")
  .addEventListener("click", function () {
    clearInterval(counting);
    swatch = "";
    console.log(swatch);
    
  });
// so console.clear moze da se izbrise cel clonsole.log

//   Treta zadaca

const url = new URL("https://www.youtube.com/watch?v=_7rT-ixivWU");
 
console.log("href - ", url.href);
console.log("hostname - ",url.hostname);
console.log("pathname - ",url.pathname);
console.log("origin - ",url.origin);
console.log("protocol - ",url.protocol);
console.log("search - ",url.search);
console.log("searchParams - ",url.searchParams);


  