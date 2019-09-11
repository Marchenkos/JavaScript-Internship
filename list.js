class Task {
    constructor(type, shortDescription, fullDescription) {
        this.type = type,
        this.shortDescription = shortDescription,
        this.fullDescription = fullDescription,
        this.isComplete = false
    }

    completeTask() {
        this.isComplete = true;
    }

    showTask() {
        console.log(`\nType: ${this.type}\nShort description: ${this.shortDescription}\nFull description: ${this.fullDescription}\nState: ${this._getState()}`);
    }

    _getState() {
        return this.isComplete ? 'complete' : 'not complete';
    }
}

class SingleTask extends Task {
    constructor(shortDescription, fullDescription, deadline) {
        super('single task', shortDescription, fullDescription);
        this.deadline = deadline;
    }

    showTask() {
        console.log(`\nType: ${this.type}\nShort description: ${this.shortDescription}\nFull description: ${this.fullDescription}\nState: ${this._getState()}\nDeadline: ${this.deadline}`);
    }
}

class GroupTask extends Task {
    constructor(shortDescription, fullDescription, team) {
        super('group task', shortDescription, fullDescription);
        this.team = team;
    }

    showTask() {
        console.log(`\nType: ${this.type}\nShort description: ${this.shortDescription}\nFull description: ${this.fullDescription}\nState: ${this._getState()}\nTeam: ${this.team}`);
    }

    addTeamMember(teamMember) {
        this.team.push(teamMember);
    }

    removeTeamMember(teamMember) {
        if(this.team.indexOf(teamMember) > -1) {
            this.team.splice(this.team.indexOf(teamMember), 1);
        }
    }
}

class TaskList {
    constructor(list) {
        this.list = list;
    }

    addTask(task) {
        this.list.push(task);
    }

    removeTask(task) {
        if(this.list.indexOf(task) > -1) {
            this.list.splice(this.list.indexOf(task), 1);
        }
    }

    output() {
        console.table(this.list);
    }

    outputCompletedTasks() {
        let result = this.list.filter((task) => task.isComplete == true);
        console.table(result);
    }

    outputIncompletedTasks() {
        let result = this.list.filter((task) => task.isComplete == false);
        console.table(result);
    }
}

let task1 = new GroupTask('Create a new project', 'A lot of information about this project', ['Mike', 'Anna', 'Diana']);
task1.showTask();
let task2 = new GroupTask('Buy a cat', 'Buy a cat with Miya and Vlad', ['Miya', 'Vlad']);
let task3 = new SingleTask('Finish task', 'ffldlfd', 'today');
let task4 = new SingleTask('Buy a new car', 'Buy a new car after next week', 'week');
let list = new TaskList([task1,task2,task3]);
list.output();
list.addTask(task4);
list.output();
list.removeTask(task3);
list.output();
task4.completeTask();
list.outputCompletedTasks();
task2.addTeamMember('Diana');
task1.removeTeamMember('Diana');
list.outputIncompletedTasks();