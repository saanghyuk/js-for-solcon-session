// 감영 현황 총괄 통계 API
function totalAPI(date) {
  const serviceKey =
    "OjiEMSk1mBl1AHs04XthXtYWEz0HtsOgcldwYU33L06fSWQCcCQ8DYF2wtmo01mPrIC%2FkbTndJhAylP4SzT6wg%3D%3D";
  const base_url =
    "http://apis.data.go.kr/1352000/ODMS_COVID_02/callCovid02Api?";

  fetch(
    `${base_url}serviceKey=${serviceKey}&pageNo=1&numOfRows=500&apiType=JSON&status_dt=${date}`
  )
    .then(response => response.json())
    .then(result => {
      delete result.items[0].accExamCompCnt;
      delete result.items[0].statusDt;
      delete result.items[0].statusTime;

      let tBody = document.querySelector("#total_table_body");
      let tNewRow = tBody.insertRow();
      Object.keys(result.items[0]).forEach(item => {
        let tNewCell = tNewRow.insertCell();
        tNewCell.appendChild(document.createTextNode(result.items[0][item]));
      });
    });
}

// accDefRate: 누적 확진율
// accExamCnt: 누적 검사수
// careCnt: 치료중 환자 수
// dPntCnt: 격리해제 수
// gPntCnt: 사망자 수
// hPntCnt: 확진자 수
//resultNegCnt: 결과음성수
//uPntCnt: 검사중 수

// 코로나19 확진자 성별 연령별 현황 API

function variousAPI(date) {
  const serviceKey =
    "OjiEMSk1mBl1AHs04XthXtYWEz0HtsOgcldwYU33L06fSWQCcCQ8DYF2wtmo01mPrIC%2FkbTndJhAylP4SzT6wg%3D%3D";
  const base_url =
    "http://apis.data.go.kr/1352000/ODMS_COVID_05/callCovid05Api?";

  fetch(
    `${base_url}serviceKey=${serviceKey}&pageNo=1&numOfRows=500&apiType=JSON&create_dt=${date}`
  )
    .then(response => response.json())
    .then(result => {
      let orderList = [];
      result.items.map(item => {
        orderList.push(item.gubun.slice(0, 1));
      });
      orderList.sort();
      let finalList = [];

      for (i = 0; i < orderList.length; i++) {
        result.items.forEach(item => {
          if (item.gubun.slice(0, 1) == orderList[i]) {
            let res = Object.fromEntries(
              Object.entries(item).sort(([a], [b]) => (a > b ? -1 : 1))
            );
            finalList.push(res);
          }
        });
      }
      console.log(finalList);
      finalList.forEach(item => {
        delete item.createDt;
        let tBody = document.querySelector("#various_table_body");
        let newRow = tBody.insertRow();
        console.log(Object.keys(item));
        Object.keys(item).forEach(sKeys => {
          let newCell = newRow.insertCell();
          console.log(sKeys);
          console.log(item[sKeys]);
          newCell.appendChild(document.createTextNode(item[sKeys]));
        });
      });
    });
}
// totalAPI();
// variousAPI();
// gubun: 구분명 (연령대)
// confCase: 확진자 수
// confCaseRate: 확진율
// death: 사망자 수
// deathRate: 사망률
// criticalRate: 치명율

function getNewResult() {
  const inputDate = document.getElementById("input_date").value;
  if (!inputDate) {
    alert("조회 일자를 선택해주세요");
  } else {
    let totalInputDate = inputDate.replace(/-/g, "");
    let variousInputDate = inputDate;

    let curr_total_tBody = document.getElementById("total_table_body");
    let curr_various_tBody = document.getElementById("various_table_body");

    for (let i = 0; i < curr_total_tBody.rows.length; i++) {
      curr_total_tBody.deleteRow(-1);
    }
    for (let i = 0; i < curr_various_tBody.rows.length; i++) {
      curr_various_tBody.deleteRow(-1);
    }

    totalAPI(totalInputDate);
    variousAPI(variousInputDate);
  }
}

totalAPI("20221231");
variousAPI("2022-12-31");
