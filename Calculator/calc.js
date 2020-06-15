class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        //get rid of all prev operations and numbers
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        //convert current op into a string and slice off final index
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    append_nr(number) {
        //make sure that only one period symbol can be included. Return function and do nothing if period is already included.
        if (number === '.' && this.currentOperand.includes('.')) {
            return;
        }
        //convert all numbers to a string so that they don't get added up mathematically.
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }

    choose_operation(operation) {
        //if nothing to operate on, return function and don't execute rest of this function
        if (this.currentOperand === '') {
            return;
        }

        //compute any previous operations when moving numbers up to the prev op field
        if (this.previousOperand !== '') {
            this.compute();
        }

        //set current operation to the operation we've just typed in
        this.operation = operation;
        //move all numbers to the upper part of the display; store it in previous op
        this.previousOperand = this.currentOperand;
        //empty out current op to make space for second part of operation
        this.currentOperand = '';
    }

    compute() {
        let computation; //variable that is the result of the computation
        const prev = parseFloat(this.previousOperand); //converts prev op into float
        const curr = parseFloat(this.currentOperand); //converts curr op into float
        //if either prev or curr is not a number / empty, return and don't do anything
        
        if (isNaN(prev) || isNaN(curr)) {
            return;
        }

        //work through different op possibilities
        switch (this.operation) {
            case '+' : //if the op is addition
                computation = prev + curr; //set computation variable to add prev and curr
                break; //break out of the switch; op is done
            case '-' :
                computation = prev - curr;
                break;
            case '*' :
                computation = prev * curr;
                break;
            case '/' :
                computation = prev / curr;
                break;
            default: //else return because op is invalid
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined; //so you can start over and add another op
        this.previousOperand = '';
    }

    //make the display number look mathematically formatted
    getDisplayNumber(number) {
        //convert number to str
        const stringNumber = number.toString();

        //convert number to array by splitting string at period value
        //get the numbers before period; this are the full integers
        const integerDigits = parseFloat(stringNumber.split('.')[0]);

        //get decimal digits
        const decimalDigits = stringNumber.split('.')[1];

        let integerDisplay;
        //if input is 0 or decimal
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay= integerDigits.toLocaleString('en', { //set string display to english
                maximumFractionDigits: 0;
            })
        }

        if (isFinite(decimalDigits)) {//user entered a period and numbers
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }

    }

    update() {
        //update current op field
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);

        if(this.operation != null) {//when we have a previous op
            //concatenate prev op with curr op
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = ''; //leaves us only with final result, clears prev operation
        }
    }
}

const currentOperandTextElement = document.querySelector('[data-current-operand]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const btnNumber = document.querySelectorAll('[data-number]');
const btnOperation = document.querySelectorAll('[data-operation]');
const btnAllClear = document.querySelector('[data-all-clear]');
const btnDel = document.querySelector('[data-delete]');
const btnEquals = document.querySelector('[data-equals]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

btnNumber.forEach(button => {
    button.addEventListener('click', () => {
        calculator.append_nr(button.innerText);
        calculator.update();
    })
})

btnOperation.forEach(button => {
    button.addEventListener('click', () => {
        calculator.choose_operation(button.innerText);
        calculator.update();
    })
})

//on pushing equals button:
btnEquals.addEventListener('click', button => {
    //compute the values given
    calculator.compute();
    //update the display
    calculator.update();
})

//on pushing AC button:
btnAllClear.addEventListener('click', button => {
    calculator.clear();
    calculator.update();
})

//on pushing DEL button
btnDel.addEventListener('click', button => {
    calculator.delete();
    calculator.update();
})