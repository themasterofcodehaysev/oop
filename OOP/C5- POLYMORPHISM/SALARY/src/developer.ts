import { Salary } from "./employee";
class Developer extends Salary {
    skills: string[] = [];
    constructor(name: string) {
        super(name);
    }
    getSalary(): number {
        let salary: number = this.skills.length * 500;
        if (this.skills.includes('OOP')) {
            salary += 2000;
        }
        return salary;
    }
}