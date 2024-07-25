class country{
    name:string;
    population:number;
    capitalname:string;
    currencty:string;
    constructor(name:string, population:number, capitalname:string, currencty:string){
        this.name = name;
        this.population = population;
        this.capitalname = capitalname;
        this.currencty = currencty;
    }
    getInformation():string{
        return'Welcome to ' + this.name + ',' + this.population + ' Million people ' +' Capital '+ 
        this.capitalname +' and '+' currency '+ this.currencty;
        
    }

}

let French = new country('French',70,'Paris','Euro');
let Cambodia = new country('French',17,'Phnom Penh','Riel');
let UK = new country('UK',80,'London','Pound')
console.log(French.getInformation());