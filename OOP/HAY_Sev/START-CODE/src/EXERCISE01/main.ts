import { School } from "./school";
import { Class } from "./class";
import { Student } from "./student";

//Create a student name HAY Sev
let Hay = new Student('HAY Sev', 22, '098765432');

let students: Student[] = [];
students.push(Hay);

//Create a class name WepA
let WepA = new Class('WepA','Thamoz','Dyrroth',students); 

let classes: Class[] = [];
classes.push(WepA);

//Create a school name PNC
let PNC = new School('PNC', classes);

//Console.log the result
console.log(PNC);
