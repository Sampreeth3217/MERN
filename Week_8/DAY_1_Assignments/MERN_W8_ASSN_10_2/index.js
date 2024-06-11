function findFactors() {

    
    let number = document.getElementById("numberInput").value;
    let factors = [];


    for(let i = 1; i <= number; i++) {
        if(number % i === 0) {
            factors.push(i);
        }
    }


    document.getElementById("result").innerHTML = "Factors of " + number + " are: " + factors.join(", ");
}
