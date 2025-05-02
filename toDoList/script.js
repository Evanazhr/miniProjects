const taskList = document.querySelector("#taskList");
const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTaskButton");

class Task {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }
}

class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("Tasks"));
  }

  loadStorage() {
    localStorage.setItem("Tasks", JSON.stringify(this.tasks));
  }

  addTask(title) {
    const task = new Task(title);
    this.tasks.push(task);
    this.loadStorage();
    console.log(this.tasks);
  }

  removeTask(index) {
    this.tasks.splice(index, 1); // Menghapus tugas berdasarkan indeks
    this.loadStorage();
    console.log(this.tasks);
  }

  editTask(title, index) {
    const newTitle = prompt(`Teks awal : ${title}`, title);
    if (newTitle) {
      this.tasks[index].title = newTitle;
    }
    this.loadStorage();
  }

  toggleTask(index) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.loadStorage();
  }

  upTask(index) {
    if (index !== 0) {
      [this.tasks[index], this.tasks[index - 1]] = [
        this.tasks[index - 1],
        this.tasks[index],
      ];
    }
    this.loadStorage();
  }

  downTask(index) {
    if (index !== this.tasks.length - 1) {
      [this.tasks[index], this.tasks[index + 1]] = [
        this.tasks[index + 1],
        this.tasks[index],
      ];
    }
    this.loadStorage();
  }

  render() {
    taskList.innerHTML = "";
    this.tasks.forEach((task, index) => {
      const li = document.createElement("li");
      const p = document.createElement("p");

      const groupButton = document.createElement("div");
      const toggleButton = document.createElement("button");
      const removeButton = document.createElement("button");
      const editButton = document.createElement("button");
      const upButton = document.createElement("button");
      const downButton = document.createElement("button");

      toggleButton.textContent = task.completed ? "✅" : "❎";
      removeButton.textContent = "🗑️";
      editButton.textContent = "🖊️";
      upButton.textContent = "↑";
      downButton.textContent = "↓";

      groupButton.appendChild(toggleButton);
      groupButton.appendChild(removeButton);
      groupButton.appendChild(editButton);
      groupButton.appendChild(upButton);
      groupButton.appendChild(downButton);

      p.textContent = task.title;
      li.appendChild(p);
      li.appendChild(groupButton);

      if (task.completed) {
        li.classList.add("completed");
      }

      toggleButton.addEventListener("click", () => {
        this.toggleTask(index);
        this.render(); // Render ulang daftar tugas
      });

      removeButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Mencegah event bubbling
        this.removeTask(index); // Menghapus tugas berdasarkan indeks
        this.render(); // Render ulang daftar tugas
      });

      editButton.addEventListener("click", () => {
        this.editTask(task.title, index);
        this.render();
      });

      upButton.addEventListener("click", () => {
        this.upTask(index);
        this.render();
      });

      downButton.addEventListener("click", () => {
        this.downTask(index);
        this.render();
      });

      taskList.appendChild(li);
    });
  }
}

const newTask = new TaskManager();
newTask.render();

addTaskButton.addEventListener("click", () => {
  if (taskInput.value !== "") {
    newTask.addTask(taskInput.value);
    taskInput.value = ""; // Mengosongkan input setelah menambahkan tugas
  }
  newTask.render();
});

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && taskInput.value !== "") {
    newTask.addTask(taskInput.value);
    taskInput.value = ""; // Mengosongkan input setelah menambahkan tugas
    newTask.render();
  }
});
