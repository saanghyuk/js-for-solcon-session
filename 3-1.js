const licenseKey =
  "OjiEMSk1mBl1AHs04XthXtYWEz0HtsOgcldwYU33L06fSWQCcCQ8DYF2wtmo01mPrIC%2FkbTndJhAylP4SzT6wg%3D%3D";
const base_url =
  "https://api.odcloud.kr/api/15077603/v1/uddi:90bfb316-0caf-495b-92c0-c5cbc7bca1d9?page=1&perPage=300&";

// let result = new Map();

// result.set("Seoul", )

fetch(base_url + "serviceKey=" + licenseKey)
  .then(response => response.json())
  .then(result => {
    // console.log(result);

    result.data.map(item => {
      if (item.주소.includes("서울")) {
        let tBody = document.querySelector("#table_body");
        let newRow0 = tBody.insertRow();
        let newCell0 = newRow0.insertCell();
        let newCell1 = newRow0.insertCell();
        let newCell2 = newRow0.insertCell();

        newCell0.appendChild(document.createTextNode(item.센터명));
        newCell1.appendChild(document.createTextNode(item.사무실전화번호));
        newCell2.appendChild(document.createTextNode(item.주소));
      }
    });
  });

function getNewResult() {
  const inputText = document.getElementById("input_text").value;
  const curr_tBody = document.getElementById("table_body");
  const curr_tBody_cnt = curr_tBody.rows.length;

  for (let i = 0; i < curr_tBody_cnt; i++) {
    curr_tBody.deleteRow(-1);
  }

  fetch(base_url + "serviceKey=" + licenseKey)
    .then(response => response.json())
    .then(result => {
      // console.log(result);

      result.data.map(item => {
        if (item.주소.includes(inputText)) {
          console.log(inputText);
          console.log(item.주소);
          let tBody = document.querySelector("#table_body");
          let newRow0 = tBody.insertRow();
          let newCell0 = newRow0.insertCell();
          let newCell1 = newRow0.insertCell();
          let newCell2 = newRow0.insertCell();

          newCell0.appendChild(document.createTextNode(item.센터명));
          newCell1.appendChild(document.createTextNode(item.사무실전화번호));
          newCell2.appendChild(document.createTextNode(item.주소));
        }
      });
    });
}
