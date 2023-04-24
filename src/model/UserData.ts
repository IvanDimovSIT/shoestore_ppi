import { User } from "./User";

export class UserData{
    private static users:Map<string, User> = new Map<string, User>;

    public static init():void{
        this.users.set('zdravko@abv.bg', new User('zdravko@abv.bg', '12345678', 'Здравко', 'Иванов', '0831457092'));
        this.users.set('todor@gmail.com', new User('todor@gmail.com', '12345678', 'Тодор', 'Йорданов', '0881267099'));
        this.users.set('ivan@mail.com', new User('ivan@mail.com', '12345678', 'Иван', 'Димов', '0855267092'));
    }

    public static add(user: User):boolean{
        if(this.users.has(user.email))
            return false;
        
        this.users.set(user.email, user);
        return true;
    }

    public static get(email: string):User|undefined{
        return this.users.get(email);
    }

}