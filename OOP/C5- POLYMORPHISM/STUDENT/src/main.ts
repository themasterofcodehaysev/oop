import {Square} from './square';
import { Rectangle } from './rectangle';
import { Circle } from './circle';

//Square________________________________________________________________
let square = new Square(10, 10, 10);
console.log(square.getHeight());
console.log(square.getWidth());
console.log(square.getArea());

//Rectangle________________________________________________________________
 let rectangle = new Rectangle(20, 20, 20, 40, 40);
 console.log(rectangle.getHeight());
 console.log(rectangle.getWidth());
 console.log(rectangle.getArea());


//Circle________________________________________________________________
let circle = new Circle(50, 50, 100);
console.log(circle.getHeight());
console.log(circle.getWidth());
console.log(circle.getArea());


