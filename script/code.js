document.addEventListener("DOMContentLoaded", function() {
    const addItemButton = document.getElementById("addItem");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const sortButton = document.getElementById("sortList")

    // Array to store tasks
let tasks = [];
    // Function to render tasks
function renderTasks() {
    // Clear existing tasks
taskList.innerHTML = "";
    // Render each task in the array
tasks.forEach(task => {
    const listItem = document.createElement("li");
        listItem.textContent = task.name;
    if (task.completed) {
        listItem.classList.add("completed");
}
        
    const closeButton = document.createElement("span");
    closeButton.textContent = "❎";
    closeButton.classList.add("close");
    closeButton.addEventListener("click", () => removeTask(task.id));
    listItem.appendChild(closeButton);
    listItem.addEventListener("click", () => toggleTaskCompletion(task.id));
    taskList.appendChild(listItem);
});
}
    // Function to add a new task
function addTask(name) {
  const id = Date.now();
  const createdDate = new Date().toISOString();
  const completed = false;
  const newTask = { id, name, createdDate, completed };
  tasks.push(newTask);
  renderTasks();
}

    // Function to remove a task
function removeTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

    // Function to toggle task completion
function toggleTaskCompletion(id) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  renderTasks();
}

    // Function to sort tasks alphabetically
function sortTasks() {
  tasks.sort((a, b) => a.name.localeCompare(b.name));
  renderTasks();
}

    // Event listener for Add button
addItemButton.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (taskName !== "" && taskName.length > 3 && /^[A-Z]/.test(taskName)) {
        addTask(taskName);
        taskInput.value = "";
} else {
    alert("Please enter a valid task name (starting with uppercase, more than 3 characters).");
}
});

// SortButton
sortButton.addEventListener("click", sortTasks)

// Initial rendering of tasks
renderTasks();
});