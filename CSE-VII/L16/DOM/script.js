const head = document.getElementById("head");
console.log(head);

const para = document.getElementsByTagName('p');
console.log(para);

const spclPara = document.getElementsByClassName("spclPara");
console.log(spclPara);

// how to apply css

head.style.color='red';
head.style.border="2px solid blue";


const img = document.getElementsByTagName('img')[0];

img.setAttribute('src','https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D');

img.style.height="200px"

// attribute:- setAttribute , getAttribute , removeAttribute;

console.log(img.getAttribute("src"));
img.removeAttribute("src")

// classList :- add , remove, toggle

const div = document.getElementsByTagName("div")[0];
div.classList.add('one');
div.classList.add("two");
div.classList.remove("two");
div.classList.toggle("two");
div.classList.toggle("two");

