// function Add(x, y) {
//   return x + y;
// }
// function Subtract(x, y) {
//   return x - y;
// }
// function Multiply(x, y) {
//   return x * y;
// }

var MathModule = (function () {
  function Add(x, y) {
    return x + y;
  }
  function Subtract(x, y) {
    return x - y;
  }
  function Multiply(x, y) {
    return x * y;
  }

  return {
    Addition: Add,
    Subtraction: Subtract,
  };
})();
