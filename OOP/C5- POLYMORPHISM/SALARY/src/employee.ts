export abstract class Salary{
    constructor(protected name:string){
        this.name = name;
    }

    abstract getSalary(): number;
}