// let head=document.head;
// console.log("head is",head)

// let body=document.body;
// console.log("body is",body)


// let h1=document.querySelector('h1')
// console.log(h1)


let h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
    h1.style.color = 'red';
    h1.style.backgroundColor = 'green';
    h1.style.fontSize = '5rem';
    h1.textContent = 'Using Mern Stack';
});

let counter = document.querySelector('.counter');
let incBtn = document.querySelector('.increment');
incBtn.addEventListener('click', () => {
    counter.textContent = Number(counter.textContent) + 1;
});

let numbers = [10, 20, 30];

let addElement = document.querySelector('.addelement');
addElement.addEventListener("click", () => {
    numbers.push(100);
    displayArray();
    numbers.length()=0;
});

function displayArray() {
    for (let el of numbers) {
        let h4 = document.createElement('h4');
        h4.textContent = el;
        document.body.appendChild(h4);
    }
}

