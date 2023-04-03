import { ShoeItem } from "./ShoeItem";

export class ShoeOrder{
    public shoeItem:ShoeItem;
    public shoeSize:string;
    public count:number;

    public constructor(shoeItem:ShoeItem, shoeSize:string, count:number){
        this.shoeItem = shoeItem;
        this.shoeSize = shoeSize;
        this.count = count;
    }

    public Equals(shoeOrder: ShoeOrder):boolean{
        return shoeOrder.count === this.count &&
        shoeOrder.shoeSize === this.shoeSize &&
        shoeOrder.shoeItem.Id === this.shoeItem.Id;
    }

}