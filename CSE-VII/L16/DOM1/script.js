
let paragraph = document.createElement("p");
console.log(paragraph);

const div = document.createElement("div");
console.log(div);

// innerText or innerHtml

paragraph.innerText="HEllo"
paragraph.innerText=`<b>Hello</b>`

// paragraph.innerHTML=`<b>Hello</b>`


const favCity = document.getElementById("favCity");

favCity.style.color="green";

favCity.previousElementSibling.style.border= "2px solid magenta";

favCity.nextElementSibling.style.border= "2px solid magenta";

const parentElem = favCity.parentElement;

parentElem.style.border="2px solid black";

console.log(parentElem.children[4]);