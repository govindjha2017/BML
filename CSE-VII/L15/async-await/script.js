
// async function fun(){
//     let x =12;
//     return x;
// }

// let a = fun();

// console.log(a);


let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let arr = [13,56,72];
        resolve(arr);
    },4000)
})


async function fetchData(){
    // let data;
    // pr
    //     .then((x)=>{
    //          data=x;
    //     })

    let data = await pr;
}

fetchData();