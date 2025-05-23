function add(a, b) {
  return a + b;
}

describe("A suite is just a function", function () {
  let a;

  it("and so is a spec", function () {
    a = true;

    expect(a).toBe(true);
  });
});
describe("A suite is for addition", function () {
  let a;

  it("adds two numbers", function () {
    var result = add(20, 30);
    expect(result).toBe(50);
  });
});
