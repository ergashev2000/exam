let sum = [];
function sumInput() {
    for (; ;) {
        let count = prompt("Son kiriting: ");
        if (count == '' || count === null || isNaN(count) || count.substring(0, 1) == " ") {
            break;
        } else {
            sum.push(count - 0);
        }
    }
}


sumInput();
let result = sum.reduce((a, b) => a + b);
alert(`Jami ${result}`)
document.querySelector(".value").innerHTML = "Jami: " + result;
