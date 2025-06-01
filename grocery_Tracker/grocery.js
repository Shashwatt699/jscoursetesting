const calculateGrocery = () => {
    let grocery1 = parseFloat(document.getElementById("grocery1").value);
    let grocery2 = parseFloat(document.getElementById("grocery2").value);
    let grocery3 = parseFloat(document.getElementById("grocery3").value);

    let result = grocery1 + grocery2 + grocery3;
    document.getElementById("result").innerText = `The Total amount is : ${result}`;
}