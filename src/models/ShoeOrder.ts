import { ShoeItem } from "./ShoeItem";

export class ShoeOrder{
    public shoeItem:ShoeItem;
    public shoeSize:string;

    public constructor(shoeItem:ShoeItem, shoeSize:string){
        this.shoeItem = shoeItem;
        this.shoeSize = shoeSize;
    }

    private stringToHash(str:string) {
             
        let hash:number = 0;
         
        if (str.length == 0) return hash;
         
        for (let i:number = 0; i < str.length; i++) {
            let char:number = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
         
        return hash;
    }

    equals(other: ShoeOrder): boolean {
        return this.shoeItem.getId() === other.shoeItem.getId() && this.shoeSize === other.shoeSize;
    }

    hashCode(): number {
        return this.shoeItem.getId() ^ this.stringToHash(this.shoeSize);
    }

}