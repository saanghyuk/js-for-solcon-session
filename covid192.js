const myKey = "54734151797363613437614b70736d";
const guRow =
  "111123 : 종로구,111121 : 중구,111131 : 용산구,111142 : 성동구,111141 : 광진구,111152 : 동대문구,111151 : 중랑구,111161 : 성북구,111291 : 강북구,111171 : 도봉구,111311 : 노원구,111181 : 은평구,111191 : 서대문구,111201 : 마포구,111301 : 양천구,111212 : 강서구,111221 : 구로구,111281 : 금천구,111231 : 영등포구,111241 : 동작구,111251 : 관악구,111262 : 서초구,111261 : 강남구,111273 : 송파구,111274 : 강동구";
const guNameCd = guRow.split(",");

const code = () => {
  const myGuName = prompt("구 명을 입력해주세요");
  for (let i = 0; i < guNameCd.length; i++) {
    if (myGuName != "" && guNameCd[i].includes(myGuName)) {
      return "/" + guNameCd[i].split(" : ")[0];
    } else if (myGuName == "") return "";
  }
};

const myGuCd = code();

const myUrl = `http://openAPI.seoul.go.kr:8088/${myKey}/json/ListAirQualityByDistrictService/1/25${myGuCd}`;

async function getMyDust() {
  try {
    const response = await fetch(myUrl);
    const result = await response.text();
    const dust = JSON.parse(result);

    if (myGuCd == "") {
      const allByGu = dust.ListAirQualityByDistrictService.row;
      allByGu.forEach(item => {
        console.log(
          `현재 ${item.MSRSTENAME}의 미세먼지 최고 수치는 ${item.MAXINDEX}(으)로, ${item.GRADE}입니다.`
        );
      });
    } else {
      const gu = dust.ListAirQualityByDistrictService.row[0].MSRSTENAME;
      const grade = dust.ListAirQualityByDistrictService.row[0].GRADE;
      const maxindex = dust.ListAirQualityByDistrictService.row[0].MAXINDEX;
      console.log(`현재 ${gu}의 미세먼지 최고 수치는 ${maxindex}(으)로, ${grade}입니다.`);
    }
  } catch (error) {
    console.log(error);
  }
}
getMyDust();
