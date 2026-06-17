"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("====18 命名空间 ====");
var Drawing;
(function (Drawing) {
    class Circle {
        draw() {
            console.log("画圆");
        }
    }
    Drawing.Circle = Circle;
    class Triangle {
        draw() {
            console.log("画三角形");
        }
    }
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
function drawAlllShapes(shape) {
    shape.draw();
}
drawAlllShapes(new Drawing.Circle());
drawAlllShapes(new Drawing.Triangle());
var Runoob;
(function (Runoob) {
    let invoiceApp;
    (function (invoiceApp) {
        class Invoice {
            calculateDiscount(price) {
                return price * 0.9;
            }
        }
        invoiceApp.Invoice = Invoice;
    })(invoiceApp = Runoob.invoiceApp || (Runoob.invoiceApp = {}));
})(Runoob || (Runoob = {}));
let invoice = new Runoob.invoiceApp.Invoice();
console.log("2) 嵌套型命名空间 ->", invoice.calculateDiscount(100));
console.log("====================本章结束===================");
