//simple calculator using switch statement
var num1=10;
var num2=5;
var operator='+';
var result; 
switch(operator){
    case '+':
        result=num1+num2;
        break;
    case '-':
        result=num1-num2;   
        break;
    case '*':
        result=num1*num2;   
        break;
    case '/':
        result=num1/num2;   
        break;
    default:
        console.log('Invalid operator');
}
console.log(result);