const head = document.getElementById("head");

head.addEventListener("click",(e)=>{
    console.log("clicked")
    //logic
    console.log(e.target);

    e.target.style.border="2px solid green"
})