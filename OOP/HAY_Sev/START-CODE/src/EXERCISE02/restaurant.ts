import { Customer } from "./customer";
import { MenuItem } from "./menuItem";

export class Restaurant{
    constructor(private customers: Customer, public menuItems: MenuItem[] =[]) {

    }
    placeOrder(customer: Customer, items: MenuItem[]): void{
        this.customers = customer;
        this.menuItems = items;
    }
    getOrdersByCustomer(customer: Customer): Order[]{
        return Order.filter(order => order.Customer === customer);
    }

}