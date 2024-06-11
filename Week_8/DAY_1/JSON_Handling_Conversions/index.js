let person={
    pid:100,
    name:'ravi',
    age:21
}
console.log(person)


// let person1={
//     "pid":100,
//     "name":"raghav",
//     "age":21    
// }

let person1=JSON.stringify(person)
console.log(person1)


let jsobj=JSON.parse('{"pid":100,"name":"ravi","age":21}')
console.log(jsobj)