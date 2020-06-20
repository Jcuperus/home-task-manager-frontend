import { Group } from '../groups/groups';

export interface Task {
    id?: number;
    group: Group;
    name: string;
    description: string;
    dueDate: Date;
    isDone: boolean;
}