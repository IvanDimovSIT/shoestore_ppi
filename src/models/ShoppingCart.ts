import { ShoeItem } from "./ShoeItem";
import { ShoeItemData } from "./ShoeItemData";


export class ShoppingCart{
    private static itemsCountPair:Map<ShoeItem, number> = new Map<ShoeItem, number>;

    public static addById(id:number){
        if(!ShoeItemData.has(id)){
            console.error("id ", id, " not found in ShoeItemData:", ShoeItemData);
            return;
        }
        let toAdd:ShoeItem = ShoeItemData.getById(id);
        if(this.itemsCountPair.has(toAdd)){
            this.itemsCountPair.set(toAdd, 1+this.itemsCountPair.get(toAdd)!);
        }else{
            this.itemsCountPair.set(toAdd, 1);
        }
    }

    public static getAll():Map<ShoeItem, number>{
        return this.itemsCountPair;
    }

    public static getTotalItemCount():number{
        let count:number = 0;
        
        this.itemsCountPair.forEach(i => {
            count += i;
        });

        return count;
    }

}