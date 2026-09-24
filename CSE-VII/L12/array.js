
// let arr = [34,11,56,65,71,"hello"];

// console.log("before",arr);

// console.log(arr.length);
// console.log(arr.indexOf(56));

// arr.push(67);
// arr.pop()
// arr.pop()

// arr.unshift("start");
// arr.unshift(12);

// arr.shift();

// arr.splice(2,1)
// arr.splice(1,3);
// arr.splice(2,0,"mid");
// arr.splice(2,0,"mid",13,14);


// arr.splice(3,1,"A","B",3)

// console.log("after",arr)




let arr1 = [34,56,71,13,82];
let arr2 = ["a","b","c"];

// for(var i=0; i<arr1.length;i++){
//     console.log(arr1[i]);
// }

// for of loop

// for(let item of arr1){
//     console.log(item);
// }

// for in loop

// for(let ind in arr1){
//     console.log(ind);
// }

// let finalArr = arr2.concat(arr1);
// console.log(finalArr);

// let finalArr = [...arr1,...arr2];
// console.log(finalArr);



let arr3 = [11,45,6,78,13];

let [a,b,...c] = arr3;

console.log(arr3.slice(1,3))