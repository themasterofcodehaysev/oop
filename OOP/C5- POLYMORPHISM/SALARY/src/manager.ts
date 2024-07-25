import { Salary } from "./employee";
class Manager extends Salary{
    private teamMember: string[] = [];
    constructor(name:string){
        super(name);
    }
    getSalary(): number {
        return this.teamMember.length * 600;
    }
}