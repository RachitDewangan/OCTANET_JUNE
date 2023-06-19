document.getElementById("task-items").addEventListener("click", function(event) {
  if (event.target.classList.contains("remove-button")) {
    event.target.parentNode.remove();
  }
});

function addTask() {
  var taskInput = document.getElementById("task-input").value;
  var deadlineInput = document.getElementById("deadline-input").value;
  var prioritySelect = document.getElementById("priority-select").value;
  var labelInput = document.getElementById("label-input").value;

  var taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <span>${taskInput}</span>
    <span>Deadline: ${deadlineInput}</span>
    <span>Priority: ${prioritySelect}</span>
    <span>Label: ${labelInput}</span>
    <button class="remove-button">Done</button>
  `;

  document.getElementById("task-items").appendChild(taskItem);

  // Clear the input fields after adding a task
  document.getElementById("task-input").value = "";
  document.getElementById("deadline-input").value = "";
  document.getElementById("priority-select").value = "";
  document.getElementById("label-input").value = "";
}

document.getElementById("add-button").addEventListener("click", function(event) {
  event.preventDefault();
  addTask();
});