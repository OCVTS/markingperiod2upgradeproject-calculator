const results = document.getElementById('results');
const answer = document.getElementById('prev-ans');
let input = ''; // this contains operators and numbers
let total = 0; // contains the result
let inputs = ['num1','op', 'num2']; // this variable will storage the array for the numbers and operators
let prevAns = 'prev-ans'; // variable for the previus answer
const operators = { // this is an object that have the operators
    addS : ' + ',
    subtractS : ' - ',
    divideS: ' / ',
    multiplyS: ' x ',

}
// this is to show the numbers and operators in the scren
function display(num) {
    let op3letters = input.slice(-3); // the last 3 characters of the input

    // in case of division by zero or something like that
    if ( input === 'NaN') {
        input = '';
    }

    // TO PREVENT THE CONSECUTIVES POINTS
    if(input.slice(-1) === '.' && num === '.'){
        return;
    }

    //to reset input when we click  a number if we already have a previus answer
    if (prevAns == input && !Object.values(operators).includes(num)) {
        input = '';
    } 
    /* if the first value is an operator, do nothing*/
    if (input === '' && Object.values(operators).includes(num)) {
        return;  // 
    }

    /* if the last 3 characters (3 characters because for the operators we are using the spaces ' + ', so then i can separate
    them by the spaces) and the variable we are trying to display, both are in the object operators,
     the variable wont displaythis is for prevent 2 operators in a row */
    if (Object.values(operators).includes(op3letters) && Object.values(operators).includes(num)) {
        return
    }
    
    input += num; // to add the numbers to input 
    results.textContent = input; //shows the input
    
    
}

/********************** addition function  *********************/
function add(num1, num2) {
    return num1 + num2;
}

/********************** subtraction function  *********************/
function subtract(num1, num2) {
    return num1 - num2;
}

/********************** multiplication function  *********************/
function multiply(num1, num2) {
    return num1 * num2;
}

/********************** division function  *********************/
function divide(num1, num2) {
    return num1 / num2;
}

/********************** clear function  *********************/
function clr() {
    // here we are puting the value of the variables to nothing
    input = ''; 
    total = 0; 
    operator = ''; 
    results.textContent = ''; 
    prevAns= '';
    answer.textContent = '';
}

function dlt(){
    // taking the last 3 characters of the input
    let lastThree = input.slice(-3); 
    // in case the last 3 character are an operator, we delete the entire operator (' + ');
    if (Object.values(operators).includes(lastThree)) {    
        input = input.slice(0, -3);
    // in case is not an operator, it just deletes the number
    } else {
        input = input.slice(0, -1);
    }
    
    results.textContent = input;
}

/********************** calculate function  *********************/
function calculate() {

    if (input === ''){
        return;
    }
    // the user can't end the operation with an operator
    if (Object.values(operators).includes(input.slice(-3))){
        alert("You can't end the operation with an operator")
        return
    } 

    inputs = input.split(' ') // separating the numbers by the space and puting them in an array

    let num1 = parseFloat(inputs[0]); // the first value is always a number

    for (let i = 1; i < inputs.length; i += 2){ /* the functions we have are for 2 numbers, so this loop is going to use the 
        functions correctly, and then with the result, it is going to take the other number and operator */
            let op = inputs[i] // the second value is always an operator
            let num2 = parseFloat(inputs[i+1]) // the value to the right of the operator is the second number
            
            // we are calling all the past functions and puting the values in the variable total
            switch (op) {
                case '+':
                    num1 = add(num1, num2);
                    break;
                case '-':
                    num1 = subtract(num1, num2);
                    break;
                case 'x':
                    num1 = multiply(num1, num2);
                    break;
                case '/':
                    num1 = divide(num1, num2);
                    break;
                default:
                    alert('invalid');
                    return;
    }
    }

   
     
    prevAns =  num1
    input = num1.toString(); // this makes the result in a string again, so we can add another number as string and the with the function split be able to separate them again
    
    answer.textContent = `Answer  =  ${prevAns}`;
    results.textContent = input;

}


