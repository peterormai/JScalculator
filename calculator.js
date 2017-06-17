var decimalAdded = false;

function zeroErrorHandler() {
    var result = document.getElementById("resultBar");
    if (result.value === "Infinity" || result.value === "NaN" || result.value === "-Infinity") {
        result.value = "Err: 0 divisor!";
    }
}

function decimalChecker() {
    var result = document.getElementById("resultBar");
    var decimalPoint = "."
    var decimal = result.value.includes(decimalPoint);
    if (decimal) {
        decimalAdded = true;
    } else {
        decimalAdded = false;
    }
}

function displayNums(char) {
    var result = document.getElementById("resultBar");
    var numsAndOps = ['1','2','3','4','5','6','7','8','9','0','+','-','/','*','','.'];
    var lastChar = result.value[result.value.length-1];
    if (result.value.length === 1 & result.value === "0") {
        result.value = "0";
    } else if (numsAndOps.includes(lastChar) || result.value.length === 0) {
        result.value += char;
    }
}

function displayOps(char) {
    var result = document.getElementById("resultBar");
    var nums = ['1','2','3','4','5','6','7','8','9','0'];
    var lastChar = result.value[result.value.length-1];
    if (nums.includes(lastChar)) {
        result.value += char;
        decimalAdded = false;
    }     
}

function countResult() {
    try {
        var result = document.getElementById("resultBar");
        var nums = ['1','2','3','4','5','6','7','8','9','0'];
        var lastChar = result.value[result.value.length-1];
        if (nums.includes(lastChar)) {
            result.value = +(eval(result.value).toFixed(8));
        } else if (result.value.length === 0 || lastChar === '!') {
            result.value = "";
        } else {
            result.value = result.value.slice(0,-1)
            result.value = +(eval(result.value).toFixed(8));
        }
        zeroErrorHandler();
        decimalChecker();
        return result.value;
    } catch(err) {
        if (err instanceof ReferenceError) {
            result.value = "Invalid input!";
        }
        result.value = err;
    }
}

function clearFields() {
     document.getElementById("resultBar").value = "";
     decimalAdded = false;
}

function countPercent() {
    var result = document.getElementById("resultBar");
    var nums = ['1','2','3','4','5','6','7','8','9','0'];
    var lastChar = result.value[result.value.length-1];
    if (nums.includes(lastChar)) {
        result.value = +(eval(result.value).toFixed(8));
    } else if (result.value.length === 0 || lastChar === '!') {
        result.value = "";
    } else {
        result.value = result.value.slice(0,-1);
        result.value = +(eval(result.value).toFixed(8));
    }
    result.value = +(eval(result.value/100).toFixed(8));
    zeroErrorHandler();
    decimalChecker();
}

function makeDecimal(char) {
    var nums = ['1','2','3','4','5','6','7','8','9','0'];
    var result = document.getElementById("resultBar");
    var lastChar = result.value[result.value.length-1];
    if (decimalAdded === false & nums.includes(lastChar)) {
        result.value += char;
        decimalAdded = true;
    }
}

function divideByX() {
    var nums = ['1','2','3','4','5','6','7','8','9','0'];
    var ops = ['+','-','*','/','.']
    var result = document.getElementById("resultBar");
    var lastChar = result.value[result.value.length-1];
    if (nums.includes(lastChar)) {
        result.value = +(eval(result.value).toFixed(8));
        result.value = +(eval(1/result.value).toFixed(8));
    } else if (ops.includes(lastChar)) {
        result.value = result.value.slice(0,-1);
        result.value = +(eval(result.value).toFixed(8));
        result.value = +(eval(1/result.value).toFixed(8));
    } else if (result.value.length === 0 || lastChar !== '!') {
        result.value = "You need a number!";
    }
    zeroErrorHandler();
    decimalChecker();
}

function delLastChar() {
    var result = document.getElementById("resultBar");
    var lastChar = result.value[result.value.length-1];
    if (lastChar !== '!' ) {
        result.value = result.value.slice(0,-1);
    }
}

function changeSign() {
    var result = document.getElementById("resultBar");
    var lastChar = result.value[result.value.length-1];
    if (lastChar !== '!' ) {
        result.value = countResult();
        result.value = eval(result.value * (-1));
    }
}

$( document ).ready()
