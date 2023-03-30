import { ShoeItem } from "./ShoeItem";

export class ShoeItemData{
    private static shoes:Map<number, ShoeItem> = new Map<number, ShoeItem>;

    public static init(){
        this.shoes.set(1, new ShoeItem(1,"Nike Terminator High OG",199.99, "../assets/shoe1.png", "M", ["35", "38"]));
        this.shoes.set(2, new ShoeItem(2,"Air Max 1 '87",299.99, "../assets/shoe2.png", "F", ["35", "38"]));
        this.shoes.set(3, new ShoeItem(3,"Air Max Furyosa",79.99, "../assets/shoe3.png", "M", ["35", "38"]));
        this.shoes.set(4, new ShoeItem(4,"Air Max 1 '86 Original",89.99, "../assets/shoe4.png", "M", ["32", "35", "38"]));
        this.shoes.set(5, new ShoeItem(5,"Nike Cortez",179.99, "../assets/shoe5.png", "F", ["35", "38"]));
        this.shoes.set(6, new ShoeItem(6,"Air Max Scorpion",99.99, "../assets/shoe6.png", "K", ["35", "38"]));
        console.log("Initialising:",this.shoes);
    }

    public static has(id: number):boolean{
        return this.shoes.has(id);
    }

    public static getById(id:number):ShoeItem{
        return this.shoes.get(id)!;
    }

    public static getAll():ReadonlyMap<number, ShoeItem>{
        return this.shoes;
    }

}