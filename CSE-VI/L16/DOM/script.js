// const head = document.getElementById("head");

// console.log(head);

// const para = document.getElementsByTagName('p');
// console.log(para);

// const spclPara = document.getElementsByClassName("spclPara");
// console.log(spclPara);

// // How to apply css

// head.style.color="red"
// head.style.border="2px solid green"

// for(let pargarph of para){
//     pargarph.style.border="2px solid black"
// }


// // setAttrobute getAttribute removeAttribute

// const img = document.getElementsByTagName('img')[0];
// console.log(img)

// img.setAttribute('src','https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D');
// img.style.height="200px";

// console.log(img.getAttribute("src"));
// img.removeAttribute("src");

// const div = document.getElementsByTagName('div')[0];

// // div.setAttribute("class","one");
// // div.setAttribute("class",'two')

// // classList :- add remove toggel

// div.classList.add("one");
// div.classList.add("two");

// div.classList.remove("two");

// div.classList.toggle("two")
// div.classList.toggle("two");


// creating html element

const p = document.createElement("p");
console.log(p);

// p.innerText="hello"

// p.innerText="<h1>Hello</h1>"

// p.innerHTML="<h1>Hello</h1>"

// const div = document.getElementsByTagName('div')[0];

// div.appendChild(p)


const favCity = document.getElementById('favCity');

favCity.style.color="magenta";

favCity.previousElementSibling.style.fontSize="1.5em";
favCity.nextElementSibling.style.fontSize="1.5em"

const parent = favCity.parentElement;
console.log(parent)
parent.style.border="4px solid black";

console.log(parent.children)