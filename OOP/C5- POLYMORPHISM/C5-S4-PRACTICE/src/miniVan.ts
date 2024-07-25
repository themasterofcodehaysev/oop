import { vehicle } from "./vehicle";

export class minivan extends vehicle {
    constructor(protected numberOfCustomer: number, protected numberLuggage:number,plateID: string,weight: number) {
        super(plateID,weight);
        this.numberOfCustomer = numberOfCustomer;
        this.numberLuggage = numberLuggage;
    }
    getSpeed(): number {
        let speed = 130;
        if (this.numberOfCustomer != 0){
            speed -= (this.numberOfCustomer * 10 )
        }if(this.numberLuggage != 0){
            speed -=(this.numberLuggage * 5 )
        }
        return speed;
    }

};