import { Student } from "./student";

export class Class{
    constructor( private name:string, private classMonito01:string,private classMonito02:string, private students:Student[] ){
        this.name = name;
        this.classMonito01 = classMonito01;
        this.classMonito02 = classMonito02;
    }
}