import { Abstract } from "./abstract";
export class Square extends Abstract{
    private size: number;

    constructor(leftX: number, bottomY: number, size: number) {
        super(leftX, bottomY);
        this.size = size;
    }
    getWidth(): number {
        return this.size;
    }
    getHeight(): number {
        return this.size;
    }
    getArea(): number {
        return this.size * this.size;
    }
}