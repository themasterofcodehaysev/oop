import { Customer } from "./customer";
import { MenuItem } from "./menuItem";

export class Order{
    constructor(public OderItem: MenuItem | MenuItem[]=[], public TotalPrice:number, public customer:Customer){
        this.TotalPrice = TotalPrice;
    }

}