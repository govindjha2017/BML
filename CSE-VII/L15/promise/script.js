
// let pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("promise rsolved data")
//         reject("error")
//     },5000)
// })

// console.log(pr);



function fetchData (){
    let pr= new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Resolved data")
        },5000)
    })

    return pr;
}
console.log("START");

fetchData()
    .then((data)=>{
        console.log("inside .then");
        console.log(data);
    })
    .catch((err)=>{
        console.log("inside .catch");
        console.log(err);
    })

console.log("END");

