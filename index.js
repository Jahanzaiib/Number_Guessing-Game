import inquirer from "inquirer";
import chalk from 'chalk';
const systemGeneratedNo = Math.floor(Math.random() * 10);
console.log(chalk.red("This is System Generated Number", systemGeneratedNo));
let input1 = await inquirer.prompt([
    {
        name: "userNum",
        type: "number",
        message: "guess A Number"
    }
]);
if (systemGeneratedNo === input1.userNum) {
    console.log("Oh yes you win the Game Because Your Giving Number =", input1.userNum, "is equal to system Generated Number =", systemGeneratedNo);
}
else {
    console.log("try it Next Time Because Your giving Number ", input1.userNum, " is Not equal to system Generated Number ", systemGeneratedNo);
}
// in other way we do the same question but with some changes 
console.log(chalk.yellow("Do you want to play this Game again in another Way "));
let winingN0 = 12;
const ans = await inquirer.prompt([
    {
        type: "number",
        name: "userNum",
        message: "Please enter your Number"
    }
]);
if (ans.userNum === winingN0) {
    console.log(chalk.green("Ohhhh Waooo you win the game your number is same"));
}
else {
    console.log("Sorry try it Next");
}
