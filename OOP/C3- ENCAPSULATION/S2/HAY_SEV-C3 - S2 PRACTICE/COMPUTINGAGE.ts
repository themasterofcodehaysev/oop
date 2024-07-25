class Person{
    private name: string;
    private yearOfBirth: number;
    constructor(name: string,yearOfBirth: number){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    getName():string{
        return this.name;
    }
    getYearOfBirth():number{
        return this.yearOfBirth;
    }
}

class Calendar{
    private currentYear = new Date().getFullYear();

    getAge(person:Person):number {
        return this.currentYear - person.getYearOfBirth();
    }
}
let user = new Person('Hay',2000);

let userName = user.getName();

let calendar = new Calendar();
let userAge = calendar.getAge(user);
console.log('User '+userName +' is ' + userAge);
