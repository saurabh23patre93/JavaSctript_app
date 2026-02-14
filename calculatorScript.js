function add(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let result = n1 + n2;
    document.getElementById("result").innerHTML = "Result: " + result;
}

function subtract(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let result = n1 - n2;
    document.getElementById("result").innerHTML = "Result: " + result;
}