#! /usr/bin/env node
import inquirer from "inquirer";
const Currency = {
    USD: 1, // Base Currency
    EUR: 0.92,
    GBP: 0.79,
    INR: 74.58,
    PKR: 277.0
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    }
]);
let fromAmount = Currency[userAnswer.from]; // Exchange Rate
let toAmount = Currency[userAnswer.to]; // Exchange Rate
let amount = userAnswer.amount;
// let result = amount * fromAmount / toAmount 
let baseAmount = amount / fromAmount; // USD Base Currency
let result = baseAmount * toAmount;
console.log(result);
