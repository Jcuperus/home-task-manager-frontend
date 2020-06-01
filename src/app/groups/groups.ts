import { User } from './user';

export interface Group {
    id?: number;
    manager: User;
    group: Array<User>;
    name: string;
}