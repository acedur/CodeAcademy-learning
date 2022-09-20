
async function getData(){
await fetch("https://fakestoreapi.com/products?limit=5")
 .then(response => response.json())
 .then(data => console.log(data))
}
getData();

 // https://fakestoreapi.com/products
 const apiUrls = {
    // here I get all the products
    products: `https://fakestoreapi.com/products`,
    // here i get all the categorys
    category: "https://fakestoreapi.com/products/categories",
  };
  const div = document.getElementById("apiInfo");
  
  const title = document.getElementById("title");
  const image = document.getElementById("image");
  const desc = document.getElementById("desc");
  const rating = document.getElementById("rating");
  
  async function getData(url) {
    let result = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  
    return result;
  }
  
  function renderScreen() {
    getData(apiUrls.products).then((res) => {
      res.forEach((element) => {
        //   let elem = document.createElement("div");
        //   elem.innerHTML = element.title;
        //   div.appendChild(elem);
  
        //main div
        let elem = document.createElement("div");
        elem.classList.add("container", "display-f-c-c");
  
        //title div
        let titleNew = document.createElement("div");
        titleNew.classList.add("title", "margin-15-auto", "display-f-c-c");
        titleNew.innerHTML = element.title;
        elem.appendChild(titleNew);
  
        //image
        let imageNew = document.createElement("img");
        imageNew.classList.add(
          "image",
          "margin-15-auto",
          "height-200-width-300",
          "display-f-c-c"
        );
        imageNew.src = element.image;
        elem.appendChild(imageNew);
  
        // description
        let descriptionNew = document.createElement("div");
        descriptionNew.classList.add(
            "title", "margin-15-auto", "height-200-width-300", "display-f-c-c"
        );
        descriptionNew.innerHTML = element.description;
        elem.appendChild(descriptionNew);

        // rating
        let ratingNew = document.createElement("div");
        ratingNew.classList.add(
            "rating", "margin-15-auto", "display-f-c-c"
        );
        ratingNew.innerHTML = element.rating.rate;
        elem.appendChild(ratingNew);

        //final step
        console.log("tuka sum ");
        div.appendChild(elem);
      });
    });
    //   getData(apiUrls.category).then((res) => {
    //     res.forEach((element) => {
    //       let elem = document.createElement("div");
    //       elem.innerHTML = element;
    //       div.appendChild(elem);
    //     });
    //   });
  }
  
  renderScreen();

