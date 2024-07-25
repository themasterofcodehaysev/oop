var person1 = { name: "Thamoz", nationality: "French", salary: 300 };
var person2 = { name: "Yuzong", nationality: "American", salary: 350 };
function getName(person) {
    return person.name;
}
console.log(getName(person1));
function sumSalaries(person1, person2) {
    return person1.salary + person2.salary;
}
console.log(sumSalaries(person1, person2));
function isFrench(person) {
    return person.nationality == "French";
}
console.log(isFrench(person1));
