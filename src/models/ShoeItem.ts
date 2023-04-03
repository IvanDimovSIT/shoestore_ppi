
export class ShoeItem{
    private id:number;
    private name:string;
    private price:number;
    private picturePath:string;
    private gender:string;
    private sizes:string[];

    public constructor(id:number, name:string, price:number, picturePath:string, gender:string, sizes:string[]){
        this.id = id;
        this.name = name;
        this.price = price;
        this.picturePath = picturePath;
        this.gender = gender;
        this.sizes = sizes;
    }

    public getId():number{
        return this.id;
    }

    public getName():string{
        return this.name;
    }

    public getSizes():string[]{
        return this.sizes;
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

    public getGenderDescription():string{
        switch(this.gender)
        {
            case "M":
                return "Мъжки обувки";
            case "F":
                return "Дамски обувки";
            case "K":
                return "Детски обувки";
            default:
                console.error("Unrecogniesd Shoe gender:",this.gender, " from ", this);
                return "ERROR";
        }
    }

}