
let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('promise resolved data')
        // reject("rejected error msg")
    },5000)
})

// console.log(pr);

console.log("start");

pr
    .then((data)=>{
        console.log("inside .then");
        console.log(data);
    })
    .catch((err)=>{
         console.log("inside .cath");
         console.log(err);
    })


console.log("END");