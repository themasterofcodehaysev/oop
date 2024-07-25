export abstract class vehicle{
    constructor(protected plateID: string, protected weight: number){
        this.plateID = plateID;
        this.weight = weight;
    }
    getSpeed(): void{}

}