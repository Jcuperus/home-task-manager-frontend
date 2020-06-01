export class User{
    name: string;
    password: string;
    role: string;

    constructor(name: string, password: string){
        this.name = name;
        this.password = password;
    }
}