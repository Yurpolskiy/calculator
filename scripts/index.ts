interface ICalculator {
    firstNum: number | null,
    secondNum: number | null,
    calculate(operation: string): number
}

class Calculator implements ICalculator  {

    constructor(public firstNum: number, public secondNum: number) {}

    calculate(operation: string) {
        if(this.firstNum === null || this.secondNum === null) {
            alert("Invalid input data!")
        }

        switch(operation) {
            case '+': return this.firstNum + this.secondNum
            case '-': return this.firstNum - this.secondNum
            case '*': return this.firstNum * this.secondNum
            case '/': return this.firstNum / this.secondNum
        }
    }
}

const firstNumElem = document.querySelector('.firstNum') as HTMLInputElement
const secondNumElem = document.querySelector('.secondNum') as HTMLInputElement

const firstNum = parseFloat(firstNumElem.value)
const secondNum = parseFloat(secondNumElem.value)

const calc = new Calculator(firstNum, secondNum)

