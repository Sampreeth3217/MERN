const form = document.querySelector("form");
const h1 = document.querySelector(".result");
let firstInput = form.children[0];
let secondInput = form.children[1];
let thirdInput = form.children[2];

form.addEventListener("submit", (event) => {
    // the form reloads  each time the button is  pressed
    event.preventDefault();
    // the above line corrects  this mistake
    
    let v1 = Number(firstInput.value);
    let v2 = Number(secondInput.value);
    let v3 = thirdInput.value;
    let ans;

    if (v3 == '+') {
        ans = v1 + v2;
    } else if (v3 == '-') {
        ans = v1 - v2;
    } else if (v3 == '*') {
        ans = v1 * v2;
    } else if (v3 == '/') {
        ans = v1 / v2;
    } else {
        ans = "Invalid operation";
    }

    h1.textContent = ans;
});
