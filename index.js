import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoAns = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in your todo list ?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "do you want to add more ?",
            default: "false"
        },
    ]);
    todos.push(todoAns.todo);
    condition = todoAns.addMore;
    console.log(todos);
}
