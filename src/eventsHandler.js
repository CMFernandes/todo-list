import { list, displayTopic, displayTopicsBtn, 
        removeTopicUI, displayTask, closeTaskInput, 
        removeTaskUI, showAddTaskBtn} from "./displayUi";


export function handleTopicsBtn(e){
    const listItems = list.getTopicList();
    const dataName = e.target.getAttribute("data-name");
    const topic = listItems.find(topic => topic.title === dataName)
    displayTopic(topic)
}

export function addTop(){
    let titleInput = document.getElementById("topic-title");
    const title = titleInput.value;
    const listItems = list.getTopicList();
    const repeatedTitle = listItems.find(topic => topic.title === title)

    if(title === ""){
        alert("The topic title can't be empty!");
        return;
    }else if (repeatedTitle){
        alert("The topics must have different names!")
        return;
    }
    list.addTopic(title);
    
    displayTopicsBtn(title);

    titleInput.value = "";
}

export function delTopic(e){
    const dataName = e.target.getAttribute("data-name");
    const displayedTopicTitle = document.querySelector(".topic-title").textContent;

    list.removeTopic(dataName);
    removeTopicUI(dataName);

    if (dataName === displayedTopicTitle) {
        clearTodoListContainer(); 
    }
}

function clearTodoListContainer() {
    const todoCont = document.querySelector(".todo-list-cont");
    todoCont.innerHTML = '';
}

export function handleAddTasks(){ 
    const listItems = list.getTopicList();
    const dataName = document.querySelector(".topic-title").textContent;
    const topic = listItems.find(topic => topic.title === dataName);
    const title = document.getElementById("task-title-input").value
    const dueDate = document.getElementById("task-date-input").value;

    const taskList = topic.getTaskList()
    const repeatedTitle = taskList.find(task => task.title === title)
     
    if(title === ""){
        alert("The task title can't be empty!");
        return;
    }else if (repeatedTitle){
        alert("The tasks must have different names!")
        return;
    }
    showAddTaskBtn()
    topic.addTask(title, dueDate)
    displayTask(title, dueDate)
    closeTaskInput()
}


export function deleteTask(e){
    const dataName = e.target.getAttribute("data-name");
    const listItems = list.getTopicList();
    const topicTitle = document.querySelector(".topic-title").textContent
    const topic = listItems.find(topic => topic.title === topicTitle)
    const taskList = topic.getTaskList();
    const task = taskList.find(task => task.title === dataName);
    topic.removeTask(task.title);
    removeTaskUI(dataName)
}
