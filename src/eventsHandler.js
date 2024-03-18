import {
  list,
  displayTopicsBtn,
  removeTopicUI,
  displayTask,
  closeTaskInput,
  removeTaskUI,
  showAddTaskBtn,
  createTopicCont,
} from "./displayUi";

export function handleTopicsBtn(e) {
  const listItems = list.getTopicList();
  const dataName = e.target.getAttribute("data-name");
  const topic = listItems.find((item) => item.title === dataName);
  const todoCont = document.querySelector(".todo-list-cont");
  const existingTopic = todoCont.querySelector("h1");
  
  if (existingTopic === null || existingTopic.textContent !== topic.title) {
    createTopicCont(topic);
  };
};

export function addTop() {
  const titleInput = document.getElementById("topic-title");
  
  const title = titleInput.value;
  
  const listItems = list.getTopicList();
  const repeatedTitle = listItems.find((topic) => topic.title === title);

  if (title === "") {
    alert("The topic title can't be empty!");
    return;
  };
  if (repeatedTitle) {
    alert("The topics must have different names!");
    return;
  };
  list.addTopic(title);

  displayTopicsBtn(title);

  titleInput.value = "";
};
function clearTodoListContainer() {
  const todoCont = document.querySelector(".todo-list-cont");
  todoCont.innerHTML = "";
}

export function delTopic(e) {
  const dataName = e.target.getAttribute("data-name");
  const displayedTopicTitle = document.querySelector(".topic-title")?.textContent;

  list.removeTopic(dataName);
  removeTopicUI(dataName);

  if (dataName === displayedTopicTitle) {
    clearTodoListContainer();
  };
  
};

export function handleAddTasks() {
  const listItems = list.getTopicList();

  const dataName = document.querySelector(".topic-title").textContent;

  const topic = listItems.find((topic) => topic.title === dataName);

  const title = document.getElementById("task-title-input").value;
  const description = document.getElementById("task-descrip-input").value;
  const dueDate = document.getElementById("task-date-input").value;

  const taskList = topic.getTaskList();
  const repeatedTitle = taskList.find((task) => task.title === title);

  if (title === "") {
    alert("The task title can't be empty!");
    return;
  };
  if (repeatedTitle) {
    alert("The tasks must have different names!");
    return;
  };
  if (
    new Date(dueDate) < new Date() &&
    new Date(dueDate).toDateString() !== new Date().toDateString()
  ) {
    alert("The due date can't be earlier than the current date!");
    return;
  };
 
  showAddTaskBtn();
  topic.addTask(title,description, dueDate);
  displayTask(title, description,dueDate);
  closeTaskInput();
};

export function deleteTask(e) {
  const dataName = e.target.getAttribute("data-name");
  const listItems = list.getTopicList();
  const topicTitle = document.querySelector(".topic-title").textContent;
  const topic = listItems.find((topicItem) => topicItem.title === topicTitle);
  const taskList = topic.getTaskList();
  const task = taskList.find((taskItem) => taskItem.title === dataName);
  const descriptionDiv = document.querySelector(`.descrip-div[data-name="${dataName}"]`);
  descriptionDiv.remove();
  topic.removeTask(task.title);
  removeTaskUI(dataName);
};

export function toggleDescription(e){
  const dataName = e.target.getAttribute("data-name");
 
  const descriptionDiv = document.querySelector(`.descrip-div[data-name="${dataName}"]`)

  if( descriptionDiv.classList.contains("hide")){
    descriptionDiv.classList.remove("hide")
  }else{
    descriptionDiv.classList.add("hide")
  };
};

export function checkboxHandler(event) {
  const { target } = event;
  if (target.classList.contains("fa-square")) {
    target.classList.remove("fa-square");
    target.classList.add("fa-check-square");
  } else if (target.classList.contains("fa-check-square")) {
    target.classList.remove("fa-check-square");
    target.classList.add("fa-square");
  };
};
