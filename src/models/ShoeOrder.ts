import { ShoeItem } from "./ShoeItem";

export class ShoeOrder{
    public shoeItem:ShoeItem;
    public shoeSize:string;

    public constructor(shoeItem:ShoeItem, shoeSize:string){
        this.shoeItem = shoeItem;
        this.shoeSize = shoeSize;
    }

}