const head = document.getElementById("head");


head.addEventListener('click',()=>{
    console.log("clicked!")
    //logic
    head.style.border="2px solid red"
})



const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    // console.log("hello")
    console.log(username.value);
    console.log(password.value);
})


head.addEventListener("copy",(e)=>{
    console.log(e.target);

    e.target.innerText = 'cheating karta hai!'
})

head.addEventListener("mouseenter",(e)=>{
    e.target.style.color="blue";
})

head.addEventListener("mouseleave",(e)=>{
    e.target.style.color="black";
})