export class MenuItem{
    constructor(public name:string, public description:string, public price:number){
        this.name = name;
        this.description = description;
        this.price = price;
    }
    addItem(item: MenuItem): void{
        this.name = item.name;
        this.description = item.description;
        this.price = item.price;
    }
}