export function Add(a, b) {
  return a + b;
}
export function Subtract(a, b) {
  return a - b;
}

const PI = 3.14;

export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `(X : ${this.x},  Y : ${this.y})`;
  }
}
