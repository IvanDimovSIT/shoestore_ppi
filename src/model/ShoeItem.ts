
export enum Genders{
    M,
    F,
    K
}

export enum Colors{
    Black,
    White,
    Grey,
    Red,
    Green,
    Blue,
    Orange,
    Brown,
    Pink,
    Yellow,
    MultiColor
}

export class ShoeItem{
    private id:number;
    private name:string;
    private price:number;
    private picturePath:string;
    private gender:Genders;
    private color:Colors;
    private sizes:string[];
    private description:string;
    private brand:string;

    public constructor(
        id:number,
        name:string,
        price:number,
        picturePath:string,
        gender:Genders,
        color:Colors,
        sizes:string[],
        desciption:string,
        brand:string
        ){
        this.id = id;
        this.name = name;
        this.price = price;
        this.picturePath = picturePath;
        this.gender = gender;
        this.color = color;
        this.sizes = sizes;
        this.description= desciption;
        this.brand = brand;
    }

    public get Id():number{
        return this.id;
    }

    public get Name():string{
        return this.name;
    }

    public get Sizes():string[]{
        return this.sizes;
    }

    public get Price():number{
        return this.price;
    }

    public get PicturePath():string{
        return this.picturePath;
    }

    public get Gender():Genders{
        return this.gender;
    }

    public get Color():Colors{
        return this.color;
    }

    public get Description():string{
        return this.description;
    }

    public get Brand():string{
        return this.brand;
    }

    public getGenderDescription():string{
        switch(this.gender)
        {
            case Genders.M:
                return "Мъжки обувки";
            case Genders.F:
                return "Дамски обувки";
            case Genders.K:
                return "Детски обувки";
            default:
                console.error("Unrecogniesd Shoe gender:",this.gender, " from ", this);
                return "ERROR";
        }
    }

}