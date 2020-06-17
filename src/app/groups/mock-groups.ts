import { Group } from './groups';
import { User } from './user';
export const currentUser: User = new User('Marco', '12345');
export const groups: Group[] = [
    {id: 1, managers: [new User('Daisy', 'abcde')], group: [currentUser, new User('Donald', '54321'), new User('Daisy', 'abcde'), new User('Scrooge', 'edcba')], name: 'noname'},
    {id: 2, managers: [currentUser], group: [new User('Kwik', '12345'), new User('Kwek', '12345'), new User('Kwak', '12345')], name: 'De neefjes'}
];