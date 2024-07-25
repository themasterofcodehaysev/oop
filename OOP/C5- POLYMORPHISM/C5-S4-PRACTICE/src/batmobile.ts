import { vehicle } from "./vehicle";

export class batmobile extends vehicle {
    constructor(protected isBatmanHere : boolean,plateID: string,weight: number) {
        super(plateID,weight);
        this.isBatmanHere = isBatmanHere;
        
    }
    getSpeed(): number {
        let speed = 0;
        if(this.isBatmanHere){
            speed = 500;
        }else{
            speed = 110;
        }
        return speed;
    }
};