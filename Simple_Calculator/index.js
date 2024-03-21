#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "firstNumber" },
    { message: "Enter second Number", type: "number", name: "secondtNumber" },
    {
        message: "select one of the operators to perform action! ",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//  conditional statments!
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondtNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondtNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondtNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondtNumber);
}
else {
    console.log("please select volid operator!");
}