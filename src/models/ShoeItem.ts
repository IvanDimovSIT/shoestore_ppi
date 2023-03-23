
export class ShoeItem{
    private id:number;
    private name:string;
    private price:number;
    private picturePath:string;
    private gender:string;

    public constructor(id:number, name:string, price:number, picturePath:string, gender:string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.picturePath = picturePath;
        this.gender = gender;
    }

    public getId():number{
        return this.id;
    }

    public getName():string{
        return this.name;
    }

    public getPrice():number{
        return this.price;
    }

    public getPicturePath():string{
        return this.picturePath;
    }

    public getGender():string{
        return this.gender;
    }

}