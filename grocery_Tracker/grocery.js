let grocery1 = parseFloat(document.getElementById(grocery1).value);
let grocery2 = parseFloat(document.getElementById(grocery2).value);
let grocery3 = parseFloat(document.getELementById(grocery3).value);

const calculateGrocery = (grocery1 , grocery2, grocery3) => {
    let result = grocery1 + grocery2 + grocery3;
    document.getElementById("result").innerHTML = `The Total amount is : $result`;
}