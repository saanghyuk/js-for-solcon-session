const apiKey = "7076706e4167616d34394d75636f70";
const base_url = `http://openAPI.seoul.go.kr:8088/${apiKey}/json/ListAirQualityByDistrictService/1/26/?`;

// 전체 구 결과를 가져온다
function getTotalResult() {
  fetch(base_url).then(response => response.json()).then(result => {
    console.log(result);
    let tBody = document.querySelector("#table_body");
    result.ListAirQualityByDistrictService.row.forEach(function(item) {
      let newRow0 = tBody.insertRow();
      let newCell0 = newRow0.insertCell();
      let newCell1 = newRow0.insertCell();
      let newCell2 = newRow0.insertCell();
      let newCell3 = newRow0.insertCell();

      newCell0.appendChild(document.createTextNode(item.MSRSTENAME));
      newCell1.appendChild(document.createTextNode(item.PM10));
      newCell2.appendChild(document.createTextNode(item.PM25));

      if (item.PM10 >= 76 || item.PM25 >= 151) {
        newCell3.appendChild(document.createTextNode("매우 나쁨"));
        newCell3.style.color = "$red-200";
      } else if (item.PM10 >= 36 || item.PM25 >= 81) {
        newCell3.appendChild(document.createTextNode("나쁨"));
        newCell3.style.color = "$yellow-200";
      } else if (item.PM10 >= 16 || item.PM25 >= 30) {
        newCell3.appendChild(document.createTextNode("보통"));
        newCell3.style.color = "$green-200";
      } else if (item.PM10 == "점검중" || item.PM25 == "점검중") {
        newCell3.appendChild(document.createTextNode("점검중"));
      } else {
        newCell3.appendChild(document.createTextNode("좋음"));
        newCell3.style.color = "$blue-200";
      }
    });
  });
}

// 구 입력 시, 테이블 행들 삭제하고 해당 구의 정보를 가져와서 테이블의 새로운 행을 만들어 추가한다
function getNewResult() {
  let searchText = document.getElementById("input_text").value;
  const curr_tBody = document.getElementById("table_body");
  const curr_tBody_cnt = curr_tBody.rows.length;
  const tBody = document.querySelector("#table_body");

  for (let i = 0; i < curr_tBody_cnt; i++) {
    curr_tBody.deleteRow(-1);
  }

  fetch(base_url).then(response => response.json()).then(result => {
    result.ListAirQualityByDistrictService.row.forEach(item => {
      if (item.MSRSTENAME == searchText) {
        let newRow0 = tBody.insertRow();
        let newCell0 = newRow0.insertCell();
        let newCell1 = newRow0.insertCell();
        let newCell2 = newRow0.insertCell();
        let newCell3 = newRow0.insertCell();

        newCell0.appendChild(document.createTextNode(item.MSRSTENAME));
        newCell1.appendChild(document.createTextNode(item.PM10));
        newCell2.appendChild(document.createTextNode(item.PM25));

        if (item.PM10 >= 76 || item.PM25 >= 151) {
          newCell3.appendChild(document.createTextNode("매우 나쁨"));
          newCell3.style.color = "$red-200";
        } else if (item.PM10 >= 36 || item.PM25 >= 81) {
          newCell3.appendChild(document.createTextNode("나쁨"));
          newCell3.style.color = "$yellow-200";
        } else if (item.PM10 >= 16 || item.PM25 >= 30) {
          newCell3.appendChild(document.createTextNode("보통"));
          newCell3.style.color = "$green-200";
        } else if (item.PM10 == "점검중" || item.PM25 == "점검중") {
          newCell3.appendChild(document.createTextNode("점검중"));
        } else {
          newCell3.appendChild(document.createTextNode("좋음"));
          newCell3.style.color = "$blue-200";
        }
      }
    });
  });
}
const searchValue = document.querySelector("#input_text").value;
const newTitle = document.querySelector("#title");

// 구 입력 시, 네비게이션 바 안의 텍스트를 바꾼다
function getNewTitle() {
  let searchValue = document.querySelector("#input_text").value;
  let newTitle = document.querySelector("#title");
  newTitle.innerHTML = `실시간 서울시 ${searchValue} 미세먼지 현황`;
}

// 메인버튼 클릭 시, 초기와 같이 서울시 전체 결과를 다 보여준다.
function refresh() {
  let curr_tBody = document.getElementById("table_body");
  let curr_tBody_cnt = curr_tBody.rows.length;
  let newTitle = document.querySelector("#title");

  for (let i = 0; i < curr_tBody_cnt; i++) {
    curr_tBody.deleteRow(-1);
  }
  newTitle.innerHTML = "실시간 서울시 미세먼지 현황";
  getTotalResult();
}

getTotalResult();
