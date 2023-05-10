// src/modules/function.js
export default function populateTodoList() {
  const tasks = [
    { description: 'task1', completed: false, index: 1 },
    { description: 'task2', completed: true, index: 2 },
    { description: 'task3', completed: false, index: 3 },
  ];

  const todoList = document.getElementById('todo');

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'task-item';
    listItem.innerHTML = `
      <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
      <input type="text" class="Text" value="${task.description}" ${task.completed ? 'disabled' : ''}>
      <span class="material-symbols-outlined delete">delete_outline</span>
    `;
    todoList.appendChild(listItem);
  });
}
