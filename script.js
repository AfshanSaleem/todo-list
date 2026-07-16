let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function renderTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.className = "task-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tasks[i].completed;
        checkbox.addEventListener("click", function() {
            tasks[i].completed = !tasks[i].completed;
            renderTasks();
        });
        li.appendChild(checkbox);

        //li.textContent = tasks[i].text;
        //taskList.appendChild(li);
        const span = document.createElement("span");
        span.textContent = tasks[i].text;

        span.addEventListener("dblclick", function() {
            const newText = prompt("Edit task:", tasks[i].text);
            if (newText !== null && newText.trim() !== "") {
                tasks[i].text = newText;
                renderTasks();
            }
        });

        if (tasks[i].completed) {
            span.style.textDecoration = "line-through";
        }
        li.appendChild(span);

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", function() {
            tasks.splice(i, 1);
            renderTasks();
        });
        li.appendChild(delBtn);
        taskList.appendChild(li);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.addEventListener("click", function() {
    const inputval = taskInput.value;
    if (inputval.trim() !== "") {
        tasks.push({ id: Date.now(), text: inputval, completed: false });
        taskInput.value = "";
        renderTasks();
    }

});