const calculator = {
    
    add: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    powerof: function (a, b) {
        return a ** b;
    },
};

const addResult = calculator.add(2, 3);
const minusResult = calculator.minus(addResult, 10);
const multiplyResult = calculator.multiply(addResult, minusResult);
const divideResult = calculator.divide(multiplyResult, minusResult);
const powerofResult = calculator.powerof(divideResult, multiplyResult);
