// Named export
export function Add(a, b) {
  return a + b;
}
export function Subtract(a, b) {
  return a - b;
}
function Multiply(a, b) {
  return a * b;
}

export const PI = 3.14;
export default Multiply; // Only be one default export per module
