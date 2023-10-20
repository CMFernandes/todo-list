import { TopicList } from "./topicList";
import { handleTopicsBtn, delTopic, handleAddTasks, addTop } from "./eventsHandler";

export const list = new TopicList();


export function initialize() {
    const inBoxBtn = document.querySelector('[data-name="Inbox"]');
    inBoxBtn.addEventListener('click', handleTopicsBtn);

    const addTopicBtn = document.getElementById("add-topic");
    addTopicBtn.addEventListener("click", addTop);
}

export function displayTopicsBtn(title){
    let topicName = title;

    const topicListNav = document.querySelector(".nav-topics");

    const topicItem = createElementWithAttribute("div","data-name",topicName);

    const topicTitle = createElementWithAttribute("div","data-name",topicName);

    const trashIcon = createElementWithAttribute("i","data-name",topicName);
    trashIcon.classList.add("far", "fa-trash-alt");

    topicTitle.textContent = title;
    
    topicItem.appendChild(topicTitle);
    topicItem.appendChild(trashIcon);
    topicListNav.appendChild(topicItem);

    topicTitle.addEventListener('click', handleTopicsBtn);
    trashIcon.addEventListener('click',delTopic);
}

export function displayTopic(topic){
    const todoCont = document.querySelector(".todo-list-cont");
    const existingTopic = todoCont.querySelector("h1");

    if (existingTopic === null || existingTopic.textContent !== topic.title) {
        createTopicCont(topic);
    }
}

function createTopicCont(topic){
    const todoCont = document.querySelector(".todo-list-cont");

    const topicHeaderContainer = createElementWithAttribute("div","class","topic-header-cont");

    const topicTitle = createElementWithAttribute("h1","class","topic-title");
    topicTitle.textContent = topic.title;

    const topicBodyCont = createElementWithAttribute("div","class","topic-body-cont")
    const taskCont = createElementWithAttribute("div","class", "task-cont");

    const displayTaskDiv = createElementWithAttribute("div","class","display-task-div")
    const displayTaskBtnCont = document.createElement("div")
    const displayTaskBtn = createElementWithAttribute("i","class","fa fa-plus")
    const displayTaskText = createElementWithAttribute("span", "class", "add-task-text");
    displayTaskText.textContent = "Add Task";
    

    todoCont.innerHTML = '';

    todoCont.appendChild(topicHeaderContainer);
    todoCont.appendChild(topicBodyCont);
    displayTaskDiv.appendChild(displayTaskBtnCont)
    displayTaskBtnCont.appendChild(displayTaskBtn);
    displayTaskBtnCont.appendChild(displayTaskText);
    topicHeaderContainer.appendChild(topicTitle);
    topicHeaderContainer.appendChild(displayTaskDiv);
    topicBodyCont.appendChild(taskCont)

    displayTaskBtnCont.addEventListener('click', displayTaskInput)
}


export function removeTopicUI(dataName){
    const topicItem = document.querySelector(`[data-name="${dataName}"]`);
    topicItem.remove();
}

function createElementWithAttribute(elementType,attribute, attributeName){
    const element = document.createElement(elementType);
    element.setAttribute(attribute, attributeName);
    return element;
}

export function displayTaskInput(){
    const displayTaskDiv = document.querySelector(".display-task-div")
    const taskInputCont = createElementWithAttribute("div","class","task-input-cont");
    
    const taskTitleInput = createElementWithAttribute("input","id","task-title-input")
    taskTitleInput.type = "text";
    taskTitleInput.setAttribute("placeholder","Enter a title")

    const taskDescripInput = createElementWithAttribute("input","id","task-descrip-input")
    taskDescripInput.type = "text";
    taskDescripInput.setAttribute("placeholder","Enter a description")

    const addTaskBtn = createElementWithAttribute("i","class","fa fa-plus")

    displayTaskDiv.appendChild(taskInputCont)
    taskInputCont.appendChild(taskTitleInput)
    taskInputCont.appendChild(taskDescripInput)
    taskInputCont.appendChild(addTaskBtn)

    addTaskBtn.addEventListener('click', handleAddTasks)
}

export function displayTask(title, descrip){
    const taskCont = document.querySelector(".task-cont")
    const taskDiv = createElementWithAttribute("div", "class", "task-div");

    const checkbox = createElementWithAttribute("input", "class", "checkbox")
    checkbox.type = "checkbox";

    taskCont.appendChild(taskDiv)
    taskDiv.appendChild(checkbox)
}