let todoItems = [];

const addTodo = (text) => {
    const todo = {
        text,
        checked: false,
        id: Date.now()
    };

    todoItems.push(todo);
    console.log(todoItems)
}