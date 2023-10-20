import { TopicList } from "./topicList";
import { Topic } from "./topic";
import { Task } from "./task";
import { handleTopicsBtn, delTopic } from "./eventsHandler";


export const list = new TopicList();


function addTop(){
    let titleInput = document.getElementById("topic-title");
    const title = titleInput.value;
    if(title === ""){
        displayMessage("The topic title can't be empty!");
        return;
    }
    list.addTopic(title);
    
    displayTopicsBtn(title);

    titleInput.value = "";
}
export function initialize() {
    const inBoxBtn = document.querySelector('[data-name="Inbox"]');
    inBoxBtn.addEventListener('click', handleTopicsBtn);

    const addTopicBtn = document.getElementById("add-topic");
    addTopicBtn.addEventListener("click", addTop);
}

function displayTopicsBtn(title){
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
    
    const addTaskDiv = document.createElement("div")
    const addTask = createElementWithAttribute("i","class","fa fa-plus")
    const addTaskText = createElementWithAttribute("span", "class", "add-task-text");
    addTaskText.textContent = "Add Task";
    

    todoCont.innerHTML = '';

    
    todoCont.appendChild(topicHeaderContainer);
    todoCont.appendChild(topicBodyCont);
    addTaskDiv.appendChild(addTask);
    addTaskDiv.appendChild(addTaskText);
    topicHeaderContainer.appendChild(topicTitle);
    topicHeaderContainer.appendChild(addTaskDiv);
    
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