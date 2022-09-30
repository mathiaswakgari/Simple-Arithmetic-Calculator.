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
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const previousOperandTextElement = document.querySelector('[data-previous]')
const currentOperandTextElement = document.querySelector('[data-current]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.append(button.innerText)
        calculator.updateDisplay();
    })
})
