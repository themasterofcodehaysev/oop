
/*
 INSTRUCTIONS
	1 -  Create a type  `Person` with the following properties:
         - name			(string)
         - nationality	(string)
         - salary			(string)

	2 -  For all the functions : add the parameter types and return type

	3 -  Create 2 objects of type personn (like you want) and  test the 3 functions

*/
type person = {
  name:string; 
  nationality:string; 
  salary:number
};

let person1 :person = {name:"Thamoz", nationality:"French", salary:300};
let person2 :person = {name:"Yuzong", nationality:"American", salary:350};

function getName(person:person) {
  return person.name;
}
console.log(getName(person1));

function sumSalaries(person1:person, person2:person) {
  return person1.salary + person2.salary;
}
console.log(sumSalaries(person1,person2));

function isFrench(person:person) {
  return person.nationality == "French";
}
console.log(isFrench(person1));