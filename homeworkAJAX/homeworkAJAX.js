  // 1 XML Example => Fetch
  let xmlData = "";
  let tableData = document.getElementById("data");
  function extractXML(){
  fetch("gethint.xml")
    .then((response) => response.text())
    .then((xml) => {
      xmlData = xml;
      let parser = new DOMParser();
      let xmlExtract = parser.parseFromString(xmlData, "application/xml");
      let artist = xmlExtract.getElementsByTagName("ARTIST");
      let title = xmlExtract.getElementsByTagName("TITLE");

      for (let i = 0; i < artist.length; i++) {
        let tr = document.createElement("tr");

        let td = document.createElement("td");
        td.innerHTML = artist[i].childNodes[0].nodeValue;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = title[i].childNodes[0].nodeValue;
        tr.appendChild(td);

        tableData.children[1].appendChild(tr);
      }
    })}


    // 2 Fetch Example => plain AJAX
    function getXMLFile() {
        let request = new XMLHttpRequest();
        request.open("GET", "https://jsonplaceholder.typicode.com/posts");
        request.onreadystatechange = function () {
          if (request.readyState == 4) {
            document.getElementById("fetch").innerHTML = "Success";
          }
        };
        request.send();
      }

