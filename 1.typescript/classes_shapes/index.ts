class Shape {
    constructor(public x: number, public y: number) {
        this.x = x;
        this.y = y;
    }
    getArea() {
        return this.x * this.y;
    }
}
class Rectangle extends Shape {
    getArea(): number {
        return super.getArea();
    }
}
const rectangle1: Rectangle = new Rectangle(10, 5);
alert(rectangle1.getArea());