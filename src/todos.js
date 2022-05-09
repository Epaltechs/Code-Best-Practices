export default class Todos {
  constructor() {
    this.list = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];
  }

  addTodo(todo) {
    this.list.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.list));
  }

  removeTodo(todoID) {
    this.list = this.list.filter((todo) => todo.index !== todoID);
    const todos = this.list.map((data, idx) => ({ ...data, index: idx + 1 }));
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  editTodo(todoId, todoDescription) {
    const newData = this.list.map((todo) => {
      if (todo.index === todoId) {
        return { ...todo, description: todoDescription };
      }
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(newData));
  }

  completeTodo(todoId, status) {
    this.list[todoId - 1].completed = status;
    localStorage.setItem('todos', JSON.stringify(this.list));
  }

  clearCompletedTodos() {
    this.list = this.list.filter((todo) => !todo.completed);
    const todos = this.list.map((data, idx) => ({ ...data, index: idx + 1 }));
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}