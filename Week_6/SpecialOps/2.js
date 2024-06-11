let testobj={a:10,b:20,c:20};
//keys function
let k=Object.keys(testobj);
console.log(k);
// values function
let v=Object.values(testobj);
console.log(v);
//freeze function
Object.freeze(testobj);
//assign function
let copy=Object.assign({},testobj)
console.log(copy);

let obj1={x:20};
let obj2={y:30};
let merged=Object.assign({},obj1,obj2);
console.log(merged)
