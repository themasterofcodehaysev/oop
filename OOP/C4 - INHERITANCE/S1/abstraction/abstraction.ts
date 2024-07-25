abstract class Animal{
    private name: string
    constructor(name: string){
        this.name = name
    }
    abstract playSound(sound: string):void 
    getname():string { return this.name}
}

class Dog extends Animal{
    constructor(name: string){
        super(name)
    }
    playSound(sound: string):void{
        console.log(sound)
    }
}
class Cat extends Animal{
    constructor(name: string){
        super(name)
    }
    playSound(sound: string):void { 
        console.log(sound)
    }
};

let dog = new Dog('kupa');
dog.playSound('Woff!');

let cat = new Cat('cat');
cat.playSound('meow!');

console.log(dog);
console.log(cat);
