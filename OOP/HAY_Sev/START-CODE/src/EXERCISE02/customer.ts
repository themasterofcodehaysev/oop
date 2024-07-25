import { Person } from "./person";
import { Order } from "./order";

export class Customer extends Person {
    private static nextId: number = 1;

    constructor(name: string, orders: null | Order[] = []) {
        super(Customer.nextId, name);
        Customer.nextId++;
    }
}