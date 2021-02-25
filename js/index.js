let todoItems = [];

const renderTodo = (todo) => {
    const list = document.querySelector('.todo-list');
    const isChecked = todo.checked ? 'done': '';

    const node = document.createElement("li");

    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);

    node.innerHTML = `
    <input id="${todo.id}" type="radio"/>
    <span>${todo.text}</span>

    <i class="far fa-times-circle delete-todo js-delete-todo"></i>
    `;

    list.append(node);

}

const addTodo = (text) => {
    const todo = {
        text,
        checked: false,
        id: Date.now()
    };

    todoItems.push(todo);
    console.log(todoItems);
    renderTodo(todo)
    
};

const form = document.querySelector('.entry-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('.todo-input');
   
    const text = input.value.trim();
    if (text !== '') {
      addTodo(text);
      input.value = '';
      input.focus();
    }
  });