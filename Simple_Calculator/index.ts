#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message:"Enter first Number", type:"number", name:"firstNumber"},
    {message:"Enter second Number", type:"number", name:"secondtNumber"},
    {
        message:"select one of the operators to perform action! ",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division","Exponentiation","Modulus"],
    },

]);

//  conditional statments!

if(answer.operator === "Addition"){
    console.log(`The answer of ${answer.firstNumber} + ${answer.secondtNumber} is : ${answer.firstNumber + answer.secondtNumber}`);

}else if(answer.operator === "Subtraction"){
    console.log(`The answer of ${answer.firstNumber} - ${answer.secondtNumber} is : ${answer.firstNumber - answer.secondtNumber}`);

}else if(answer.operator === "Multiplication"){
console.log(`The answer of ${answer.firstNumber} * ${answer.secondtNumber} is : ${answer.firstNumber * answer.secondtNumber}`);

}else if(answer.operator === "Division"){
console.log(`The answer of ${answer.firstNumber} / ${answer.secondtNumber} is : ${answer.firstNumber / answer.secondtNumber}`);

}else if(answer.operator === "Exponentiation"){
console.log(`The answer of ${answer.firstNumber} ** ${answer.secondtNumber} is : ${answer.firstNumber ** answer.secondtNumber}`);

}else if(answer.operator === "Modulus"){
console.log(`The answer of ${answer.firstNumber} % ${answer.secondtNumber} is : ${answer.firstNumber % answer.secondtNumber}`);

}else{
    console.log(`please select volid operator!`);
}
   