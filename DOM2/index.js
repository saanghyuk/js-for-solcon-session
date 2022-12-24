const myTag = document.querySelector("#list-1");
console.log(myTag.innerHTML);

// myTag.innerHTML = "<li>Tai</li>";
// console.log(myTag.innerHTML);

// myTag.innerHTML += "<li>Sojeen</li>";
// console.log(myTag.innerHTML);

// // outerHTML
// // console.log(myTag.innerHTML);
// console.log("-----------");
// console.log(myTag.outerHTML);
// myTag.outerHTML = "<div>Hello, World!</div>";
// console.log(myTag.outerHTML);

// console.log("-----------");
// myTag.outerHTML = "<div>Hello, Jieun!</div>";
// console.log(myTag.outerHTML);

console.log(myTag.textContent);
myTag.textContent = "<li>new text</li>";
