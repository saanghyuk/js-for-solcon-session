function closure() {
  let cnt = 0;
  function cntPlus() {
    cnt = cnt + 1;
  }

  function printCnt() {
    console.log(cnt);
  }

  return cntPlus;
}

const cntClosure = closure();

console.log(cntClosure);
cntClosure();

console.log(cnt);
