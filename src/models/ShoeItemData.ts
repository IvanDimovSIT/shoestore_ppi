import { Colors, Genders, ShoeItem } from "./ShoeItem";

export class ShoeItemData{
    private static shoes:Map<number, ShoeItem> = new Map<number, ShoeItem>;

    public static init(){
        this.shoes.set(1, new ShoeItem(1,"Nike Terminator High OG",199.99, "../assets/shoe1.png", Genders.M, Colors.Grey, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(2, new ShoeItem(2,"Air Max 1 '87",299.99, "../assets/shoe2.png", Genders.M, Colors.Red ,["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(3, new ShoeItem(3,"Air Max Furyosa",79.99, "../assets/shoe3.png", Genders.F, Colors.Orange, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(4, new ShoeItem(4,"Air Max 1 '86 Original",89.99, "../assets/shoe4.png", Genders.M, Colors.Yellow ,["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(5, new ShoeItem(5,"Nike Cortez",179.99, "../assets/shoe5.png", Genders.F, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(6, new ShoeItem(6,"Air Max Scorpion",699.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(7, new ShoeItem(7,"Air Max Scorpion",799.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(8, new ShoeItem(8,"Air Max Scorpion",899.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(9, new ShoeItem(9,"Air Max Scorpion",999.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(10, new ShoeItem(10,"Air Max Scorpion",1099.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(11, new ShoeItem(11,"Air Max Scorpion",1199.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(12, new ShoeItem(12,"Air Max Scorpion",1299.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(13, new ShoeItem(13,"Air Max Scorpion",1399.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(14, new ShoeItem(14,"Air Max Scorpion",1499.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(15, new ShoeItem(15,"Air Max Scorpion",1599.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(16, new ShoeItem(16,"Air Max Scorpion",1699.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(17, new ShoeItem(17,"Air Max Scorpion",1799.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(18, new ShoeItem(18,"Air Max Scorpion",1899.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(19, new ShoeItem(19,"Air Max Scorpion",1999.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));
        this.shoes.set(20, new ShoeItem(20,"Air Max Scorpion",2099.99, "../assets/shoe6.png", Genders.K, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"]));

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

    public static getByGender(gender: Genders):ReadonlyMap<number, ShoeItem>{
        let result: Map<number, ShoeItem> = new Map<number, ShoeItem>();
        this.shoes.forEach((v,k) => {
            if(v.Gender === gender){
                result.set(k, v);
            }
        });
        return result;
    }

}