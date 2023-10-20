import { Task } from "./task";
export class Topic{
    constructor(title){
        this.title = title;
        this.taskList = [];
    }

    addTask(title,description) {
        const task = new Task(title,description)
        this.taskList.push(task)
        return task
    }

    removeTask(){
        
    }
}


