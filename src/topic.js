import { Task } from "./task";
export class Topic {
  constructor(title) {
    this.title = title;
    this.taskList = [];
  }

  addTask(title, description, dueDate) {
    const task = new Task(title, description, dueDate);
    this.taskList.push(task);
    return task;
  }

  removeTask(taskToRemove) {
    this.taskList.forEach((task, i) => {
      if (task.title === taskToRemove) {
        this.taskList.splice(i, 1);
      }
    });
  }

  getTaskList() {
    return this.taskList;
  }
}
