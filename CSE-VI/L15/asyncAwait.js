// async function fun(){
//     return "hello";
// }


// let x = fun();
// console.log(x);

let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let arr = [13,16,17,19,21];
        resolve(arr)
    },4000)
})



async function fetchData(){
    // pr
    //     .then((data)=>{
    //         console.log(data);
    //     })

    let data = await pr;
    console.log(data);

}

fetchData()