const getDate = prompt(`조회하고자 하는 날짜를 yyyymmdd 형식으로 입력해 주세요`);
function getMultiMoviefunction() {
  const getMultiMovieYn = prompt(`다양성영화, 상업영화, 전체 중 조회하고 싶은 영화 구분값을 입력하세요`);
  console.log(`< ${getMultiMovieYn} 박스오피스 TOP 10>`);
  if (getMultiMovieYn === `다양성영화`) {
    return `multiMovieYn=Y`;
  } else if (getMultiMovieYn === "상업영화") {
    return `multiMovieYn=N`;
  }
}

function getMovieNationfunction() {
  const getMovieNation = prompt(`한국영화, 외국영화, 전체 중 조회하고 싶은 영화 구분을 입력하세요`);
  console.log(`- 한국/외국 영화 구분: ${getMovieNation}`);
  if (getMovieNation === `한국영화`) {
    return `repNationCd=K`;
  } else if (getMovieNation === "외국영화") {
    return `repNationCd=F`;
  }
}

const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=인증키입력&${getMultiMoviefunction()}&${getMovieNationfunction()}&targetDt=${getDate}`;

fetch(url).then(res => res.json()).then(myJson => {
  const boxOfficeList = myJson.boxOfficeResult.dailyBoxOfficeList;
  for (let i = 0; i < boxOfficeList.length; i++) {
    console.log(`${boxOfficeList[i].rank}위: ${boxOfficeList[i].movieNm} 
\ => 개봉일: ${boxOfficeList[i].openDt}, 누적관객수: ${Number(
      boxOfficeList[i].audiAcc
    ).toLocaleString("ko-KR")} 명`);
  }
});
