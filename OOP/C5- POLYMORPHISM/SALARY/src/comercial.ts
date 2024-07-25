import { Salary } from "./employee";
class commercial extends Salary {
    private contacts: [] = [];
    constructor(name: string) {
        super(name);
    }
    getSalary(): number {
        return this.contacts.length * 400;
    }
}