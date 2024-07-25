class salary{
    NodeJs : number;
    VueJs : number;
    OOP : string;
    constructor(NodeJs : number, VueJs : number, OOP : string){
        this.NodeJs = NodeJs;
        this.VueJs = VueJs;
        this.OOP = OOP;
    }
    getSalary(){
        if(this.NodeJs < 1 && this.VueJs < 1 && this.OOP == 'no'){
            return 250;
        }else if(this.NodeJs < 1 && this.VueJs > 1 && this.OOP == 'no'){
            return 350;
        }else if(this.NodeJs > 1 && this.VueJs > 1 && this.OOP == 'no'){
            return 450;
        }else if(this.NodeJs > 1 && this.VueJs > 1 && this.OOP == 'yes'){
            return 700;
        }
        
    }
}

let Robert = new salary(1.5,1.5,'yes');
console.log(Robert.getSalary())