'use strict';

class Todo {
    constructor(form, input, todoList, todoCompleted) {
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData = new Map(JSON.parse(localStorage.getItem('todoList')));
    }

    addToStorage() {
        localStorage.setItem('todoList', JSON.stringify([...this.todoData]));
    }

    render() {
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.todoData.forEach(this.createItem, this);
        this.addToStorage();
        this.input.value = '';
    }

    createItem(todo) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.key = todo.key;
        li.insertAdjacentHTML('beforeend', `
        <span class="text-todo">${todo.value}</span>
        <div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
        </div>
        `);

        if (todo.completed) {
            this.todoCompleted.append(li);
        } else {
            this.todoList.append(li);
        }
    }

    addTodo(e) {
        e.preventDefault();
        if (this.input.value.trim()) {
            const newTodo = {
                value: this.input.value,
                completed: false,
                key: this.generateKey(),
            };
            this.todoData.set(newTodo.key, newTodo);
            this.render();
        } else {
            alert('В список задач нельзя вносить пустую строку!');
        }
    }

    generateKey() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    deleteItem(item) {
        this.todoData.forEach((elem, index) => {
            if (item.key === index) {
                this.todoData.delete(index);
            }
        });
        this.render();
    }

    completedItem(item) {
        this.todoData.forEach((elem, index) => {
            if (item.key === index) {
                elem.completed = !elem.completed;
            }
        });
        this.render(item);
    }

    handler() {
        document.querySelector('.todo-container').addEventListener('click', event => {
            const target = event.target;
            if (target.matches('.todo-remove')) {
                this.deleteItem(target.closest('.todo-item'));
            } else if (target.matches('.todo-complete')) {
                this.completedItem(target.closest('.todo-item'));
            }
        });
    }

    unit() {
        this.form.addEventListener('submit', this.addTodo.bind(this));
        this.render();
        this.handler();
    }
}
const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');
todo.unit();
