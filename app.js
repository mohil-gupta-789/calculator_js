const buttons=document.querySelectorAll('button');

let primaryOperand = '';
let secondaryOperand = '';
let operator='';
let operand1='';
let operand2='';
let result='';
let savedOperator='';

getprimaryOperand();

function calculateNumber(primaryOperand, operator, secondaryOperand){
    result= eval(primaryOperand+operator+secondaryOperand);
    return result;
}

function getprimaryOperand(){
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            operand1= e.target.textContent

            if(operand1!=="0"&&operand1!=="+"&&operand1!=="-"&&operand1!=="*"&&operand1!=="/"&&operand1!=="="&&operand1!=="C"){
                primaryOperand+=e.target.textContent;
                console.log(primaryOperand)
            }
            else if(operand1==="+" || operand1==="-" || operand1==="*" || operand1==="/" || operand1==="=" || operand1!=="C"){
                operator=operand1;
                getSecondaryOperand(operator);
            }
        })
    })
}

function getSecondaryOperand(operator){
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            operand2= e.target.textContent

            if(operand2!=="0"&&operand2!=="+"&&operand2!=="-"&&operand2!=="*"&&operand2!=="/"&&operand2!=="="&&operand2!=="C"){
                secondaryOperand+=e.target.textContent;
                console.log(secondaryOperand)
            }
            else if(operand2 === "=")
                calculateNumber(primaryOperand,operator,secondaryOperand);
        })
    })
}