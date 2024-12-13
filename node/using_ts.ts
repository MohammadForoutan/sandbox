// this is random code u
const a = "2";
const b = "3";

const add = function (a: number, b: number): number {
  return a + b;
};

const reduce = function (a: number, b: number): number {
  return a - b;
};

const multiply = function (a: number, b: number): number {
  return a * b;
};

const divide = function (a: number, b: number): number {
  return a / b;
};

class OurCalculator {
  add(a: number, b: number) {
    return add(a, b);
  }

  reduce(a: number, b: number) {
    return reduce(a, b);
  }

  multiply(a: number, b: number) {
    return multiply(a, b);
  }

  divide(a: number, b: number) {
    return divide(a, b);
  }
}
