
// let arr1 = [33,11,65,78,34,51];

// let arr2 = [54,76,33,7];

// // let x = arr1.concat(arr2);
// // console.log(x);

// let mergeArr = [...arr1,...arr2];
// // console.log(mergeArr);


// let [a,b,,...c] = arr1;

// console.log(a);
// console.log(b);
// console.log(c);




let student = {
    name:'teena',
    age:26,
    city:'Delhi',
    email:'teena@gmail.com'
}

// let name = student.name;
// let age = student.age;
// let city = student.city;
// let email = student.email;

let {name,age,city,email} = student;


console.log(name,age,city,email)