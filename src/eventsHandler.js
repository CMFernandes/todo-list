import { list, displayTopic, displayTopicsBtn, removeTopicUI, displayTask} from "./displayUi";


export function handleTopicsBtn(e){
    const listItems = list.getTopicList();
    const dataName = e.target.getAttribute("data-name");
    const topic = listItems.find(topic => topic.title === dataName)
    displayTopic(topic)
}

export function addTop(){
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

export function delTopic(e){
    const dataName = e.target.getAttribute("data-name");
    
    list.removeTopic(dataName);
    removeTopicUI(dataName)
}

export function handleAddTasks(){
    const listItems = list.getTopicList();
    const dataName = document.querySelector(".topic-title").textContent;
    const topic = listItems.find(topic => topic.title === dataName);
    const title = document.getElementById("task-title-input").value
    const descrip = document.getElementById("task-descrip-input").value;
    topic.addTask(title, descrip)
    displayTask(title, descrip)
}
