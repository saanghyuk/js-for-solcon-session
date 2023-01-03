let btn = document.querySelector("#myBtn");

let myInput = document.querySelector("#myInput");

btn.onclick = function() {
  console.log("Hi Tai!");
};

// 기존을 덮어써버림
btn.onclick = function() {
  console.log("Hi Again!");
};

myInput.addEventListener("keydown", function(e) {
  console.log(e);
  console.log("keydown event!");
});
