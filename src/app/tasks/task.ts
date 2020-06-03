export interface Task {
    id?: number;
    groupId?: number;
    name: string;
    description: string;
    due: Date;
    isDone: boolean;
}