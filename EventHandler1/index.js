// 이벤트 등록하기
let btn = document.querySelector("#myBtn");

// btn.onclick = function() {
//   console.log("Hi Tai!");
// };

// btn.onclick = function() {
//   console.log("Hi Again!");
// };

function event1() {
  console.log("Hi Javascript!");
}

function event2() {
  console.log("Hi again!");
}

// btn.onclick = function() {
//   event1();
//   event2();
// };

// // elem.addEventListener(event, handler)
btn.addEventListener("click", event1);
btn.addEventListener("click", event2);
btn.addEventListener("click", function() {
  console.log("event3");
});

// // elem.removeEventListener(event, handler)
btn.removeEventListener("click", event2);
btn.removeEventListener("click", function() {
  console.log("event3");
});
