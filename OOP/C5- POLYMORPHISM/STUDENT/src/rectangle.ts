import { Abstract } from "./abstract";

export class Rectangle extends Abstract{
    private rightX: number;
    private topY: number;
    constructor(leftX: number, bottomY: number, size: number, rightX: number, topY: number){
        super(leftX, bottomY);
        this.rightX = rightX;
        this.topY = topY;
    }
    getWidth(): number {
        return this.rightX - this.leftX;
    }
    getHeight(): number {
        return this.topY - this.bottomY;
    }
    getArea(): number {
        return this.getWidth() * this.getHeight();
    }
}