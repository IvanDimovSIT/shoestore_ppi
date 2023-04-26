import { Colors, Genders, ShoeItem } from "./ShoeItem";

export class ShoeItemData{
    private static shoes:Map<number, ShoeItem> = new Map<number, ShoeItem>;

    public static init():void{
        this.shoes.set(1, new ShoeItem(1,"Nike Terminator High OG",199.99, "../assets/shoes/shoe1.png", Genders.M, Colors.Grey, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"Untouched, unaltered and straight from the vault—you get the picture. The Terminator High lets you step back to the era of hook shots, knee pads and calf-high socks. Returning to the '85 original (the first signature school shoe by Nike), its throwback colour-blocking lets you rep the '84 champs and the team you love. Crisp leather keeps 'em smoother than backboard glass while retro branding delivers a big varsity finish. It's game time.","Nike"));
        this.shoes.set(2, new ShoeItem(2,"Air Max 1 '87",299.99, "../assets/shoes/shoe2.png", Genders.M, Colors.Red ,["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"","Nike"));
        this.shoes.set(3, new ShoeItem(3,"Air Max Furyosa",79.99, "../assets/shoes/shoe3.png", Genders.F, Colors.Brown, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"","Nike"));
        this.shoes.set(4, new ShoeItem(4,"Air Max 1 '86 Original",89.99, "../assets/shoes/shoe4.png", Genders.M, Colors.MultiColor ,["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"","Nike"));
        this.shoes.set(5, new ShoeItem(5,"Nike Cortez",179.99, "../assets/shoes/shoe5.png", Genders.F, Colors.White, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"","Nike"));
        this.shoes.set(6, new ShoeItem(6,"Air Max Scorpion",699.99, "../assets/shoes/shoe6.png", Genders.K, Colors.Black, ["32", "35", "35.5", "36" , "37", "38", "39", "40"],"","Nike"));
        this.shoes.set(7, new ShoeItem(7,"Run Swift 2", 49.99, "../assets/shoes/shoe7.png", Genders.K, Colors.Blue, ["32", "35", "35.5", "36" , "37", "38", "39", "40"],"","Nike"));
        this.shoes.set(8, new ShoeItem(8,"Air Zoom Fire", 179.99, "../assets/shoes/shoe8.png", Genders.F, Colors.White, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"","Nike"));
        this.shoes.set(9, new ShoeItem(9,"Air Max 95",159.99, "../assets/shoes/shoe9.png", Genders.M, Colors.Red, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"","Nike"));
        this.shoes.set(10, new ShoeItem(10,"Air Max Excee",239.99, "../assets/shoes/shoe10.png", Genders.M, Colors.Black, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"","Nike"));
        this.shoes.set(11, new ShoeItem(11,"Air Max 97 OG",399.99, "../assets/shoes/shoe11.png", Genders.M, Colors.Yellow, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"","Nike"));
        this.shoes.set(12, new ShoeItem(12,"Nike Quest 5",39.99, "../assets/shoes/shoe12.png", Genders.F, Colors.Pink, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"","Nike"));
        this.shoes.set(13, new ShoeItem(13,"Air Force 1",299.99, "../assets/shoes/shoe13.png", Genders.F, Colors.Orange, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"","Nike"));
        this.shoes.set(14, new ShoeItem(14,"Air Jordan 1 Low",179.99, "../assets/shoes/shoe14.png", Genders.F, Colors.Green, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"","Nike"));
        this.shoes.set(15, new ShoeItem(15,"Waffle Debut Vintage",399.99, "../assets/shoes/shoe15.png", Genders.K, Colors.Green, ["32", "35", "35.5", "36" , "37", "38", "39", "40"],"","Nike"));
        this.shoes.set(16, new ShoeItem(16,"Air Max 270",299.99, "../assets/shoes/shoe16.png", Genders.K, Colors.Black, ["32", "35", "35.5", "36" , "37", "38", "39", "40"],"","Nike"));
        this.shoes.set(17, new ShoeItem(17,"Air Max Plus",179.99, "../assets/shoes/shoe17.png", Genders.M, Colors.Black, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"","Nike"));
        this.shoes.set(18, new ShoeItem(18,"Air Jordan XXXVII",499.99, "../assets/shoes/shoe18.png", Genders.M, Colors.Grey, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"","Nike"));
        this.shoes.set(19, new ShoeItem(19,"Air Force 1 LV8",119.99, "../assets/shoes/shoe19.png", Genders.K, Colors.Yellow, ["32", "35", "35.5", "36" , "37", "38", "39", "40"],"","Nike"));
        this.shoes.set(20, new ShoeItem(20,"Air Max Bliss", 189.99, "../assets/shoes/shoe20.png", Genders.F, Colors.Yellow, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"","Nike"));
        this.shoes.set(21, new ShoeItem(21,"Metcon 8",399.99, "../assets/shoes/shoe21.png", Genders.F, Colors.MultiColor, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"","Nike"));
        this.shoes.set(22, new ShoeItem(22,"Nike Court Legacy", 39.99, "../assets/shoes/shoe22.png", Genders.K, Colors.White, ["32", "35", "35.5", "36" , "37", "38", "39", "40"],"","Nike"));
        this.shoes.set(23, new ShoeItem(23,"Air Max 170", 189.99, "../assets/shoes/shoe23.png", Genders.M, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"],"","Nike"));
        this.shoes.set(24, new ShoeItem(24,"Air Force 1 Premium", 399.99, "../assets/shoes/shoe24.png", Genders.F, Colors.Grey, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"","Nike"));
        this.shoes.set(25, new ShoeItem(25,"Jordan Post", 29.99, "../assets/shoes/shoe25.png", Genders.M, Colors.Red, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"","Nike"));
        this.shoes.set(26, new ShoeItem(26,"Super Rep Go 3", 159.99, "../assets/shoes/shoe26.png", Genders.F, Colors.Red, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"","Nike"));
        this.shoes.set(27, new ShoeItem(27,"Air Max Plus 3", 229.99, "../assets/shoes/shoe27.png", Genders.F, Colors.MultiColor, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"","Nike"));


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