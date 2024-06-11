let a=10;
function getvalue(value)
{
    let b=value;
    return function findsum()
    {
        let sum=a+b;
        return sum;

    }
}

let result=getvalue(20);
let sum=result()
console.log("Sum :",sum)    