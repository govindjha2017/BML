
// const head = document.getElementById("head");

// head.addEventListener("click",(e)=>{
//     console.log("clciked");
//     //logic
//     console.log(e.target);

//     e.target.style.color="blue"
// })

// head.addEventListener("mouseenter",(e)=>{
//     e.target.style.border="2px solid green";
// })

// head.addEventListener("mouseleave",(e)=>{
//     e.target.style.border="";
// })

// head.addEventListener("copy",(e)=>{
//     e.target.innerText = "cheating karta hai"
// })


fetch('data.json')
    .then((res)=>{
        console.log(res);
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        console.log(data.products)

        for(let productData of data.products){
            
        }
    })