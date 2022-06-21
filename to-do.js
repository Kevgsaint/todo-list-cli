const prompt = require('prompt-sync')({ sigint: true });

console.log("Welcome to the To-Do List Manager Application!");
console.log("=========================================");
console.log("Your to-do list is empty.")
console.log("~ Select an action ~")
console.log("[1] Create a to-do item")
console.log("[2] Complete a to-do item")

let choice = Number(prompt("> ")); //

let items = [""]; //

while(choice !== 3){
    if(choice === 1){
        console.log("\nCreate a new item\n");
        //
        let answer = prompt("Please enter an item: ");
        items.push(answer);
        statusArray = [""] //
        printList()
        selectchoice()
    

    } } if (choice === 2) {
        if (statusArray.length > 1) {
            console.log("\nSelect item to be completed\n");
            // 
            let indexChoice = Number(prompt("Enter a number: "));

            
            while (indexChoice > statusArray.length - 1 || indexChoice === 0 || isNaN(indexChoice)){  
                
                console.log("Please choose a number that corrersponds to an item in the list.");
            indexChoice = Number(prompt("Enter a number: "))
        }
        if (statusArray[indexChoice] === false) {
            statusArray[indexChoice] = true;
        }
        
    } else {
        console.log("You have no items in your to-do list")
    }

    printList();
    selectChoice();
} else {
    console.log("\nPlease, choose a number between [1], [2], [3]");
    selectChoice();
}


//////////////////////////////////////////////////////////////////


//functions
function selectChoice ()
    console.log("Select an action: ")
    console.log("[1] Create a to-do item")
    console.log("[2] Complete a to-do item")
    console.log("[3] Exit the application ")
    choice = Number(prompt("> "))


function printList() {
    console.log("")
    console.log("Current to do list: ");
    let status = ""
    for (let i = 1; i < items.length; i++) {
        // if statement to check if status is true or false
        if (statusArray[i] === false) {
            status = "[incomplete] "
        } else if (statusArray[i] === true)
            status = "[complete] "
        console.log(i + ". " + status + items[i]);
    }
    console.log("")
}



