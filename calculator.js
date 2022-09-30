class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined;
    }
    append(number){
        this.currentOperand = number;
        this.currentOperand += number;
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }
    selectOperation(operation){
        this.operation = operation
        this.previousOperand = this.currentOperand;
        this.currentOperand = ''
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const previousOperandTextElement = document.querySelector('[data-previous]')
const currentOperandTextElement = document.querySelector('[data-current]');
const operationsButtons = document.querySelectorAll('[data-operands]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.append(button.innerText)
        calculator.updateDisplay();
    })
})

operationsButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.selectOperation(button.innerText)
        calculator.updateDisplay();
    })
})
