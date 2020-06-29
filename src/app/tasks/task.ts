import { Group } from '../groups/group';
import { User } from '../users/user';

export interface Task {
    id?: number;
    group: Group;
    name: string;
    description: string;
    dueDate: Date;
    user?: User;
    isDone: boolean;
}