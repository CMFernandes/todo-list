import {Task} from task

class TodoList{
    constructor() {
        this.list = []
    }

    addToList(task) {
        this.list.push(task)
    }

    removeFromList(id) {
        this.list.splice(id, 1)
    }

}


