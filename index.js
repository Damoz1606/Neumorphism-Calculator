const getHistory = () => {
    return document.querySelector(".history .value").innerHTML;
}

const printHistory = (value) => {
    document.querySelector(".history .value").innerHTML = value;
}

const getOutput = () => {
    return document.querySelector(".output .value").innerHTML;
}

const printOutput = (value) => {
    document.querySelector(".output .value").innerHTML = value;
}

const getFormattedOutput = (value) => {
    if (value === "") {
        return "";
    }
    const number = Number(value);
    return number;
}

const backspace = (value) => {
    if (value === "") return "0";
    else {
        const nextValue = value.slice(0, -1);
        return nextValue === "" ? 0 : nextValue;
    }

}

const operators = document.querySelectorAll("[calc-operator]");

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        const value = getOutput();
        const operatorValue = operator.getAttribute("calc-operator");
        if (operatorValue === "empty")
            printOutput("0");
        else if (operatorValue === "backspace")
            printOutput(getFormattedOutput(backspace(value)));
        else if (operatorValue === "equals") {
            printHistory(value);
            printOutput(getFormattedOutput(eval(value)));
        }
    });
});

const stringValues = document.querySelectorAll("[calc-value]");
stringValues.forEach(value => {
    value.addEventListener("click", () => {
        let currentValue = getOutput();
        const buttonValue = value.getAttribute("calc-value");
        if (currentValue === "0" && !(buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/" || buttonValue === "%")) {
            currentValue = "";
        }
        const newValue = `${currentValue}${buttonValue}`.trim();
        printOutput(newValue);
    });
});

const toggleButton = document.querySelector(".toggle-mode");
toggleButton.addEventListener("click", () => {
    document.querySelector("html").toggleAttribute("dark-mode");
})