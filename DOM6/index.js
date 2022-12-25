const haeuns = document.querySelectorAll("[data-haeun]");

for (let tag of haeuns) {
  const field = tag.dataset.haeun;
  console.log(field);
}
