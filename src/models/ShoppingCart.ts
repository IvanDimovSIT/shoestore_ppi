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
                this.shoeOrderList = JSON.parse(storageValue).map((item: any) => new ShoeOrder(item.shoeItem, item.shoeSize));
            } catch (e) {
                console.error("Error parsing shopping cart session storage value:", e);
            }
        } else {
            this.shoeOrderList = [];
        }
        this.logDebug();
    }

    

    public static addById(itemId: number, shoeSize: string) {
        if (!ShoeItemData.has(itemId)) {
            console.error(`Item with ID ${itemId} not found in ShoeItemData:`, ShoeItemData);
            return;
        }
        const shoeItem = ShoeItemData.getById(itemId);
        const shoeOrder = new ShoeOrder(shoeItem, shoeSize);
        this.shoeOrderList.push(shoeOrder);
        this.saveToStorage();
        this.logDebug();
    }

    public static getAll(): ShoeOrder[] {
        return this.shoeOrderList;
    }

    public static getTotalItemCount(): number {
        return this.shoeOrderList.length;
    }

    public static removeAll(){
        this.shoeOrderList = [];
        this.saveToStorage();
    }

}