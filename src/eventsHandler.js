import { list } from "./displayUi";
import { displayTopic } from "./displayUi";
import { removeTopicUI } from "./displayUi";

export function handleTopicsBtn(e){
    const listItems = list.getTopicList();
    const dataName = e.target.getAttribute("data-name");
    const topic = listItems.find(topic => topic.title === dataName)
    displayTopic(topic)
}

export function delTopic(e){
    const dataName = e.target.getAttribute("data-name");
    
    list.removeTopic(dataName);
    removeTopicUI(dataName)
}

