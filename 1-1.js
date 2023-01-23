// 메인 페이지에는 어제자 기준으로 영화 1~10 순위를 보여준다.

const today = new Date();
const yesterday = new Date(today.setDate(today.getDate() - 1));

const year = yesterday.getFullYear();
const month = ("0" + (yesterday.getMonth() + 1)).slice(-2);
const day = ("0" + yesterday.getDate()).slice(-2);
const dateStr = year + month + day;

fetch(
  `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${dateStr}`
)
  .then(response => response.json())
  .then(result => {
    for (i = 0; i < result.boxOfficeResult.dailyBoxOfficeList.length; i++) {
      let mySubTag = document.querySelector(`#movie-${i + 1}`);
      mySubTag.innerHTML = result.boxOfficeResult.dailyBoxOfficeList[i].movieNm;
    }
  })
  .catch(error => {
    alert("오류가 발생했습니다");
    console.log(error);
  });

fetch(
  `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&multiMovieYn=Y&targetDt=${dateStr}`
)
  .then(response => response.json())
  .then(result => {
    for (i = 0; i < result.boxOfficeResult.dailyBoxOfficeList.length; i++) {
      let mySubTag = document.querySelector(`#vmovie-${i + 1}`);
      mySubTag.innerHTML = result.boxOfficeResult.dailyBoxOfficeList[i].movieNm;
    }
  })
  .catch(error => {
    alert("오류가 발생했습니다");
    console.log(error);
  });

fetch(
  `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&multiMovieYn=N&targetDt=${dateStr}`
)
  .then(response => response.json())
  .then(result => {
    for (i = 0; i < result.boxOfficeResult.dailyBoxOfficeList.length; i++) {
      let mySubTag = document.querySelector(`#smovie-${i + 1}`);
      mySubTag.innerHTML = result.boxOfficeResult.dailyBoxOfficeList[i].movieNm;
    }
  })
  .catch(error => {
    alert("오류가 발생했습니다");
    console.log(error);
  });

// input(date)에서 날짜 선택 후 조회하기 버튼을 누르면, 해당 일자의 1위부터 10위까지 가져옴
function getNewResult() {
  const inputDate = document
    .getElementById("input_date")
    .value.replace(/-/g, "");

  fetch(
    `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${inputDate}`
  )
    .then(res => res.json())
    .then(newResult => {
      for (
        i = 0;
        i < newResult.boxOfficeResult.dailyBoxOfficeList.length;
        i++
      ) {
        let mySubTag = document.querySelector(`#movie-${i + 1}`);
        mySubTag.innerHTML =
          newResult.boxOfficeResult.dailyBoxOfficeList[i].movieNm;
      }
    })
    .catch(error => {
      alert("오류가 발생했습니다");
      console.log(error);
    });

  fetch(
    `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&multiMovieYn=Y&targetDt=${inputDate}`
  )
    .then(response => response.json())
    .then(result => {
      for (i = 0; i < result.boxOfficeResult.dailyBoxOfficeList.length; i++) {
        let mySubTag = document.querySelector(`#vmovie-${i + 1}`);
        mySubTag.innerHTML =
          result.boxOfficeResult.dailyBoxOfficeList[i].movieNm;
      }
    })
    .catch(error => {
      alert("오류가 발생했습니다");
      console.log(error);
    });

  fetch(
    `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&multiMovieYn=N&targetDt=${inputDate}`
  )
    .then(response => response.json())
    .then(result => {
      for (i = 0; i < result.boxOfficeResult.dailyBoxOfficeList.length; i++) {
        let mySubTag = document.querySelector(`#smovie-${i + 1}`);
        mySubTag.innerHTML =
          result.boxOfficeResult.dailyBoxOfficeList[i].movieNm;
      }
    })
    .catch(error => {
      alert("오류가 발생했습니다");
      console.log(error);
    });
}
