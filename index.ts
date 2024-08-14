#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 20000; //in $
let myPin= 3455;
const pinAns = await inquirer.prompt(
    [
    {
    name: "pin",
    message: "Enter your pin\n",
    type: "number"
}
]
);
if(pinAns.pin === myPin)
{
    console.log("logging in...");
    const operation = await inquirer.prompt(
        [
            {
                name:"menu",
        message: "Select an option",
        type: "list",
        choices: ["Check balance" , "Withdraw cash"],
        }
        ]
        );

        if(operation.menu == "Withdraw cash")
            {
           let answer = await inquirer.prompt(
               [
                   {
           name: "withdrawalAmount",
           message: "Enter the amount for withdrawal\n",
           type: "number"
                   }
               ]
           );     
           if(answer.withdrawalAmount< myBalance){
           
           
           let currentBalance = myBalance - answer.withdrawalAmount;
           console.log("Withdrawing your amount...");   
           console.log("Your remaining balance is: ")
           console.log(currentBalance);
           }
           else {
               console.log("Insufficient balance. Enter a valid amount or check your balance");
           }
            }
            else if(operation.menu === "Check balance")
            {
                console.log("Your balance is: ")
                console.log(myBalance);
            }
            else {
                console.log("Invalid option. Try again!");
            }
        }

else
{ 
    console.log("Invalid pincode. Try again!");
}


 