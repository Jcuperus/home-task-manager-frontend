export class Task {
    name: string;
    description: string;
    isDone: boolean;

    constructor(name: string, description: string, isDone: boolean = true) {
        this.name = name;
        this.description = description;
        this.isDone = isDone;
    }
}