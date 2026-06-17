export interface IShape {
    draw(): void;
}

export class Circle implements IShape {
    public draw(): void {
            console.log("画圆");
        }
}

export class Triangle implements IShape {
    public draw(): void {
            console.log("画三角形");
        }
}