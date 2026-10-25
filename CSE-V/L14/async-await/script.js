let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise resolved data")
    },5000)
})
console.log("start");
async function fetchData(){
    console.log("Hello")
    let data = await pr;
    console.log(data);
    console.log("inside handle function!")
}
console.log("HII");
fetchData()
console.log("END");
