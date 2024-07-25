class person{
    name: string;
    address: string;
    constructor(name:string, address:string){
        this.name = name;
        this.address = address;
    }
}

class employee extends person{
    salary: number;
    constructor( name: string, address: string, salary: number){
        super(name,address);
        this.salary = salary;
    }
}

let ronan = new employee('Ronan','Phnom Penh',1000);

console.log(ronan);