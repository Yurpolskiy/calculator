var buttons = document.querySelectorAll("button");
var res = "";
var display = document.querySelector('.calculator__current-number');
function updateDisplay() {
    if (typeof res === "string") {
        display.textContent = res;
    }
}
function clearResult() {
    console.clear();
    res = "";
    updateDisplay();
}
function delLastChar() {
    if (typeof res === "string") {
        res = res.slice(0, -1);
        console.log(res);
        updateDisplay();
    }
}
function calcResult() {
    if (typeof res === "string") {
        res = eval(res);
        console.log(res);
        res = String(res);
        updateDisplay();
    }
}
function handleDefault(value) {
    if (typeof res === "string") {
        res += value;
        console.log(res);
        updateDisplay();
    }
}
buttons.forEach(function (item) {
    item.addEventListener('click', function () {
        var value = item.value;
        switch (value) {
            case "clear":
                clearResult();
                break;
            case "=":
                calcResult();
                break;
            case "del":
                delLastChar();
                break;
            default:
                handleDefault(value);
        }
    });
});
