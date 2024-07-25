import { vehicle } from "./vehicle";

export class tuctuc extends vehicle {
  constructor(protected numberOfCustomer: number, plateID: string, weight: number) {
    super(plateID, weight);
    this.numberOfCustomer = numberOfCustomer;
  }

  getSpeed(): number {
    let speed = 130;
    speed -= this.numberOfCustomer * 5;
    return speed;
  }
}
