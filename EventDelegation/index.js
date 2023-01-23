const list = document.querySelector("#list");
list.addEventListener("click", function(e) {
  console.log(e.target);
  e.target.classList.toggle("done");
});

const li = document.createElement("li");
li.classList.add("item");
li.textContent = "일기 쓰기";
list.append(li);
