let todoItems = [];

const renderTodo = (todo) => {
    const list = document.querySelector('.todo-list');
    const item = document.querySelector(`[data-key='${todo.id}']`);

    if (todo.deleted) {
        item.remove();
        return
    }

    const isChecked = todo.checked ? 'done': '';
    const node = document.createElement("li");

    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);

    node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <i class="far fa-times-circle delete-todo js-delete-todo"></i>
    </button>
  `;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }

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

function toggleDone(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;
    renderTodo(todoItems[index]);
};

function deleteTodo(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));

    const todo = {
      deleted: true,
      ...todoItems[index]
    };

    todoItems = todoItems.filter(item => item.id !== Number(key));
    renderTodo(todo);
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

const list = document.querySelector('.todo-list');

list.addEventListener('click', event => {
    if (event.target.classList.contains('js-tick')) {
      const itemKey = event.target.parentElement.dataset.key;
      toggleDone(itemKey);
    }

    if (event.target.classList.contains('js-delete-todo')) {
      const itemKey = event.target.parentElement.dataset.key;
      deleteTodo(itemKey);
    }
});

  