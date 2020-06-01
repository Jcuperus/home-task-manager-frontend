import { User } from './user';

export interface Group {
    id?: number;
    managers: Array<User>;
    group: Array<User>;
    name: string;
}