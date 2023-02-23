let btn = document.querySelector("#myBtn");

function event1() {
  console.log("Hi Javascript!");
}

function event2() {
  console.log("Hi again!");
}

btn.addEventListener("click", event1);
btn.addEventListener("click", event2);

btn.removeEventListener("click", event2);
