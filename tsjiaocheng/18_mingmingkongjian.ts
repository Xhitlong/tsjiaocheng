export {};
console.log("====18 命名空间 ====");
namespace Drawing {
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
}
function drawAlllShapes(shape: Drawing.IShape): void {
    shape.draw();
}
drawAlllShapes(new Drawing.Circle());
drawAlllShapes(new Drawing.Triangle());

namespace Runoob {
    export namespace invoiceApp {
        export class Invoice {
            public calculateDiscount(price: number): number {
                 return price  * 0.9;
            }
        }
    }
}
let invoice = new Runoob.invoiceApp.Invoice();
console.log("2) 嵌套型命名空间 ->", invoice.calculateDiscount(100));
console.log("====================本章结束===================")
