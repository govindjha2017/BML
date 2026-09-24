
// let obj = {
//     "a":11,
//     "b":"Hello",
//     "c":13,

// };

// console.log(obj);


let student = {
    name:'rahul',
    age:45,
    city:"Delhi",
    university:"BMU",
    marks:[6.5,7.2,8.1],
    key:11
}

// console.log(student.name)
// console.log(student.city)

// for(let key in student){
//     // console.log(key);
//     // console.log(student.key)
//     console.log(student[key])
// }

// let name = student.name;
// let marks = student.marks;
// let university = student.university

let {name,marks,university} = student;

console.log(name);
console.log(marks);
console.log(university);