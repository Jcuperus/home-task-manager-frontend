import { Group } from '../groups/group';

export interface Task {
    id?: number;
    group: Group;
    name: string;
    description: string;
    dueDate: Date;
    isDone: boolean;
}