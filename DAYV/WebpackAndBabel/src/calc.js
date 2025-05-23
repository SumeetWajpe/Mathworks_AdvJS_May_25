import { Add, Subtract, Point } from "./math.js";

console.log(`The addition is : ${Add(10, 20)}`);
console.log(`The subtraction is : ${Subtract(20, 10)}`);
const point = new Point(10, 20);
console.log(`The point is : ${point.toString()}`);
