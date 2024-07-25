import { Class } from "./class";

export class School{
    constructor(private name:string, private classes:Class[]){
        this.name = name;
    }
}