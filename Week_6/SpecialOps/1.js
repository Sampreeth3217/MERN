let emps = [
    {
        eno: 100,
        name: 'ravi',
        age: 21,
        salary: 2000
    },
    {
        eno: 200,
        name: 'Bhanu',
        age: 25,
        salary: 5000
    },
    {
        eno: 300,
        name: 'Vikas',
        age: 30,
        salary: 30000
    }
];
let youngestEmployee = emps.reduce((y, c) => {
    return (c.age < y.age) ? current : y;
});
console.log("Youngest Employee:", youngestEmployee);
