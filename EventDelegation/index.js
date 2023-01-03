const list = document.querySelector("#list");
list.addEventListener("click", function(e) {
  console.log(e.target);
  e.target.classList.toggle("done");
});
