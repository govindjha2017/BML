// const API_LINK = "https://official-joke-api.appspot.com/random_joke";

// const container = document.getElementById("container");

// fetch(API_LINK)
//     .then((res)=>{
//         console.log(res)
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data);

//         const para = document.createElement("p");
//         console.log(para)
//         para.innerText="Setup: " + data.setup;

//         const h2 = document.createElement('h2');
//         h2.innerText="Punchline: "+ data.punchline

//         container.appendChild(para);
         
//         setTimeout(()=>{
//             container.appendChild(h2);
//         },5000)
//     })


/////////////////////////////////////////////



fetch('data.json')
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data.products);
    })