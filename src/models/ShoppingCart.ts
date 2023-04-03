import { ShoeItem } from "./ShoeItem";
import { ShoeItemData } from "./ShoeItemData";
import { ShoeOrder } from "./ShoeOrder";

export class ShoppingCart {
    private static readonly STORAGE_KEY = "ShoppingCart";
    private static shoeOrderList: ShoeOrder[] = [];

    private static logDebug() {
        console.log("Shopping Cart:", this.shoeOrderList);
    }

    private static saveToStorage(){
        sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.shoeOrderList));
    }

    public static setSessionStorage() {
        const storageValue = sessionStorage.getItem(this.STORAGE_KEY);
        if (storageValue) {
            try {
                this.shoeOrderList = JSON.parse(storageValue).map((item: any) => new ShoeOrder(
                    new ShoeItem(item.shoeItem.id,
                        item.shoeItem.name,
                        item.shoeItem.price,
                        item.shoeItem.picturePath,
                        item.shoeItem.gender,
                        item.shoeItem.sizes),
                    item.shoeSize,
                    item.count));
            } catch (e) {
                console.error("Error parsing shopping cart session storage value:", e);
            }
        } else {
            this.shoeOrderList = [];
        }
        this.logDebug();
    }

    private static addToCart(shoeOrder: ShoeOrder){
        let flag: boolean = false;
        this.shoeOrderList.forEach(i =>{
            console.log("Adding to cart:", shoeOrder, i);
            if(shoeOrder.shoeSize === i.shoeSize &&
                shoeOrder.shoeItem.Id === i.shoeItem.Id){
                i.count++;
                flag = true;
                return;
            }
        });
        if(flag)
            return;
        this.shoeOrderList.push(shoeOrder);
    }

    public static addById(itemId: number, shoeSize: string) {
        if (!ShoeItemData.has(itemId)) {
            console.error(`Item with ID ${itemId} not found in ShoeItemData:`, ShoeItemData);
            return;
        }
        const shoeItem = ShoeItemData.getById(itemId);
        const shoeOrder = new ShoeOrder(shoeItem, shoeSize, 1);
        this.addToCart(shoeOrder);
        this.saveToStorage();
        this.logDebug();
    }

    public static getAll(): ShoeOrder[] {
        return this.shoeOrderList;
    }

    public static getTotalItemCount(): number {
        let count: number = 0;
        this.shoeOrderList.forEach(i => {
            count += i.count;
        });
        return count;
    }

    public static removeAll(){
        this.shoeOrderList = [];
        this.saveToStorage();
    }

    public static remove(shoeOrder: ShoeOrder){
        this.shoeOrderList = this.shoeOrderList.filter(i => !i.Equals(shoeOrder));
        this.saveToStorage();
    }

}