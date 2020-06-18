export interface Task {
    id?: number;
    groupId?: number;
    name: string;
    description: string;
    dueDate: Date;
    isDone: boolean;
}