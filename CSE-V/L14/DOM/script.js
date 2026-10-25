// const head = document.getElementById("head");
// console.log(head);

// const para = document.getElementsByTagName("p");
// console.log(para);

// const spclPara = document.getElementsByClassName("spclPara");
// console.log(spclPara);

// // how to apply style

// head.style.color="red";
// head.style.border="2px solid black"

// const img = document.getElementsByTagName("img")[0];

// console.log(img);

// // attribute:- set get remove

// img.setAttribute("src",'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D');

// img.style.height= "250px";

// console.log(img.getAttribute("src"));

// img.removeAttribute("src")

// class :- add remove toggle

// const div = document.getElementsByTagName("div")[0];
// console.log(div)
// div.style.fontSize = "1.6em";

// div.classList.add('one');
// div.classList.add("two");

// div.classList.remove("two");
// div.classList.toggle("two");
// div.classList.toggle("two");

// creating html element

// let p = document.createElement("p");
// p.innerText="Hello"
// console.log(p);

// div.appendChild(p);


const favCity = document.getElementById("favCity");

favCity.style.color="magenta";

favCity.previousElementSibling.style.color="blue";
favCity.nextElementSibling.style.color="blue";

console.log(favCity.parentElement);

let ul = favCity.parentElement;
console.log(ul.children);