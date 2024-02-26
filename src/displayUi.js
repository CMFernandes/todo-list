import { TopicList } from "./topicList";
import {
  handleTopicsBtn,
  delTopic,
  handleAddTasks,
  addTop,
  deleteTask,
  toggleDescription,
  checkboxHandler,
} from "./eventsHandler";

export const list = new TopicList();

export function initialize() {
  const inBoxBtn = document.querySelector("[data-name='Inbox']");
  inBoxBtn.addEventListener("click", handleTopicsBtn);

  const addTopicBtn = document.getElementById("add-topic");
  addTopicBtn.addEventListener("click", addTop);
}

function createElementWithAttribute(elementType, attribute, attributeName) {
  const element = document.createElement(elementType);
  element.setAttribute(attribute, attributeName);
  return element;
}

export function displayTopicsBtn(title) {
  const topicName = title;

  const topicListNav = document.querySelector(".nav-topics");

  const topicItem = createElementWithAttribute("div", "data-name", topicName);
  topicItem.setAttribute("class", "topic-item");

  const topicTitleIcon = document.createElement("Div");
  const topicIcon = createElementWithAttribute("i", "class", "fas fa-list");
  const topicTitle = createElementWithAttribute("div", "data-name", topicName);

  const trashDiv = document.createElement("div");
  const trashIcon = createElementWithAttribute("i", "data-name", topicName);
  trashIcon.classList.add("far", "fa-trash-alt");

  topicTitle.textContent = title;

  topicTitleIcon.appendChild(topicIcon);
  topicTitleIcon.appendChild(topicTitle);
  trashDiv.appendChild(trashIcon);
  topicItem.appendChild(topicTitleIcon);
  topicItem.appendChild(trashDiv);
  topicListNav.appendChild(topicItem);

  topicTitle.addEventListener("click", handleTopicsBtn);
  trashIcon.addEventListener("click", (e) => delTopic);
}

export function createTopicCont(topic) {
  const todoCont = document.querySelector(".todo-list-cont");

  const topicHeaderContainer = createElementWithAttribute(
    "div",
    "class",
    "topic-header-cont",
  );

  const topicTitle = createElementWithAttribute("h1", "class", "topic-title");
  topicTitle.textContent = topic.title;

  const topicBodyCont = createElementWithAttribute(
    "div",
    "class",
    "topic-body-cont",
  );
  const taskCont = createElementWithAttribute("div", "class", "task-cont");

  const displayTaskDiv = createElementWithAttribute(
    "div",
    "class",
    "display-task-div",
  );
  const displayTaskBtnCont = createElementWithAttribute(
    "div",
    "class",
    "add-task",
  );
  const displayTaskBtn = createElementWithAttribute("i", "class", "fa fa-plus");
  const displayTaskText = createElementWithAttribute(
    "span",
    "class",
    "add-task-text",
  );
  displayTaskText.textContent = "Add Task";

  todoCont.innerHTML = "";

  
  displayTaskBtnCont.appendChild(displayTaskBtn);
  displayTaskBtnCont.appendChild(displayTaskText);
  topicHeaderContainer.appendChild(topicTitle);
  topicHeaderContainer.appendChild(displayTaskBtnCont)
  topicBodyCont.appendChild(displayTaskDiv);
  topicBodyCont.appendChild(taskCont);
  todoCont.appendChild(topicHeaderContainer);
  todoCont.appendChild(topicBodyCont);

  displayTasks(topic);
  
  displayTaskBtnCont.addEventListener("click", displayTaskInput);
}

function displayTasks(topic) {
  const taskList = topic.getTaskList();
  taskList.forEach((task) => {
    displayTask(task.title, task.description, task.dueDate);
  });
}

export function removeTopicUI(dataName) {
  const topicItem = document.querySelector(`[data-name='${dataName}']`);
  topicItem.remove();
}

export function removeTaskUI(dataName) {
  const task = document.querySelector(`[data-name='${dataName}']`);
  task.remove();
}

function hideAddTaskBtn() {
  const displayTaskBtnCont = document.querySelector(".add-task");
  displayTaskBtnCont.style.display = "none";
}

export function displayTaskInput() {
  hideAddTaskBtn();

  const displayTaskDiv = document.querySelector(".display-task-div");
  
  const taskInputCont = createElementWithAttribute(
    "div",
    "class",
    "task-input-cont",
  );

  const taskTitleInput = createElementWithAttribute(
    "input",
    "id",
    "task-title-input",
  );
  taskTitleInput.type = "text";
  taskTitleInput.setAttribute("placeholder", "Enter a title");
  
  const taskDescripInput = createElementWithAttribute(
    "textarea",
    "id",
    "task-descrip-input"
  )

  taskDescripInput.setAttribute("placeholder", "Enter a description");

  const taskDueDate = createElementWithAttribute(
    "input",
    "id",
    "task-date-input",
  );
  taskDueDate.type = "date";
  
  
  const addTaskBtn = createElementWithAttribute(
    "i",
    "class",
    "fa fa-check-square",
  );
  const closeTaskInputBtn = createElementWithAttribute(
    "i",
    "class",
    "fa fa-window-close",
  );
  
  displayTaskDiv.appendChild(taskInputCont);
  taskInputCont.appendChild(closeTaskInputBtn);
  taskInputCont.appendChild(taskTitleInput);
  taskInputCont.appendChild(taskDescripInput);
  taskInputCont.appendChild(taskDueDate);
  taskInputCont.appendChild(addTaskBtn);
  

  addTaskBtn.addEventListener("click", handleAddTasks);
  closeTaskInputBtn.addEventListener("click", closeTaskInput);
}

export function displayTask(title, description, dueDate) {
  const taskCont = document.querySelector(".task-cont");

  const taskDiv = createElementWithAttribute("div", "class", "task-div");
  taskDiv.setAttribute("data-name", title);
 
  const leftTaskCont = createElementWithAttribute(
    "div",
    "class",
    "left-task-cont",
  );
 
  const checkboxIcon = document.createElement("i");
  checkboxIcon.className = "far fa-square";
  checkboxIcon.setAttribute("data-name", title);

  const taskTitle = createElementWithAttribute("div", "class", "task-title");
  taskTitle.textContent = title;
  taskTitle.setAttribute("data-name", title);

  const rightTaskCont = createElementWithAttribute(
    "div",
    "class",
    "right-task-cont",
  );

  const taskDueDate = createElementWithAttribute(
    "div",
    "class",
    "task-dueDate",
  );
  taskDueDate.textContent = dueDate;

  const delTask = createElementWithAttribute("i", "class", "fas fa-times");
  delTask.setAttribute("data-name", title);

  const descriptionDiv = createElementWithAttribute(
    "div",
    "class",
    "descrip-div"
  )
  descriptionDiv.classList.add("hide");
  descriptionDiv.setAttribute("data-name", title)
  descriptionDiv.textContent = description;

  taskCont.appendChild(taskDiv);
  taskCont.appendChild(descriptionDiv)
  leftTaskCont.appendChild(checkboxIcon);
  leftTaskCont.appendChild(taskTitle);
  
  rightTaskCont.appendChild(taskDueDate);
  rightTaskCont.appendChild(delTask);
  taskDiv.appendChild(leftTaskCont);
  taskDiv.appendChild(rightTaskCont);

  delTask.addEventListener("click", deleteTask);

  checkboxIcon.addEventListener("click", checkboxHandler);

  taskCont.addEventListener("dblclick",toggleDescription)
};

export function showAddTaskBtn() {
  const displayTaskBtnCont = document.querySelector(".add-task");
  displayTaskBtnCont.style.display = "flex";
};

export function closeTaskInput() {
  const taskInputCont = document.querySelector(".task-input-cont");
  taskInputCont.remove();
  showAddTaskBtn()
};
