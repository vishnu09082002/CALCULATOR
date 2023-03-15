let display = document.querySelector('.result');
let history = document.querySelector('.history');
let buttons = document.querySelectorAll('button');
let operators = ['+', '-', '*', '/', '%'];
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let ce = document.querySelector('.ce');

let input = '';
let calculation = '';
let result = '';

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let value = this.value;
        
        // clear input and result if C button is clicked
        if (value === 'C') {
            input = '';
            result = '';
            calculation = '';
            display.innerText = '0';
            history.innerText = '';
        }
        
        // delete last character if CE button is clicked
        else if (value === 'CE') {
            input = input.slice(0, -1);
            display.innerText = input;
        }
        
        // perform calculation if = button is clicked
        else if (value === '=') {
            if (input !== '') {
                calculation = input;
                result = eval(calculation);
                display.innerText = result;
                history.innerText = calculation + ' = ' + result;
                input = '';
            }
        }
        
        // handle input of digits and operators
        else {
            input += value;
            display.innerText = input;
        }
    });
});

