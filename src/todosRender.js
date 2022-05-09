const render = (todosList) => {
  const sortedTodos = todosList.list.sort((a, b) => a.index - b.index);
  const todosContainer = document.querySelector('.todos');
  let todosHtml = '';
  sortedTodos.forEach((todo) => {
    const checkedTodo = todo.completed ? 'checked' : '';
    const checkClass = todo.completed ? 'checked' : '';
    todosHtml += `  <div class="todo-item">
                          <div>
                              <input id="${todo.index}" type="checkbox" class="todo-check" ${checkedTodo}/>
                              <input id="${todo.index}" class="todo-edit ${checkClass}" type="text" value="${todo.description}" />
                          </div>
                          <button id="${todo.index}" class="remove-btn"> <i class="fas fa-trash"></i></button>
                      </div>
      `;
  });
  todosContainer.innerHTML = todosHtml;

  // remove todo
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = btn.parentNode;
      element.remove();
      todosList.removeTodo(Number(e.target.parentNode.id));
    });
  });

  // edit todo
  const todosContent = document.querySelectorAll('.todo-edit');
  todosContent.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      todosList.editTodo(Number(e.target.id), e.target.value);
    });
  });

  // Complete Todo
  const todosCheck = document.querySelectorAll('.todo-check');
  todosCheck.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      const { id } = e.target;
      todosList.completeTodo(id, e.target.checked);
      e.target.parentNode.lastElementChild.classList.toggle('checked');
    });
  });
};

export default render;