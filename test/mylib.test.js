import { mylib } from "../src/mylib.js";

describe("Unit testing mylib.js", () => {
  // run tasks before tests in this block
  before(() => {
    console.log("Let the test begin");
  });

  // unit test for the mylib.sum function
  describe("Sum", () => {
    it("Should return 2 when using sum function with a=1, b=1", () => {
      const result = mylib.sum(1, 1); // 1 + 1
      assert(result === 2); // result expected to equal 2
    });

    it("Should return 101 when using sum function with a=1, b=100", () => {
      const result = mylib.sum(100, 1); // 100 + 1
      assert(result === 101); // result expected to equal 101
    });
  });

  describe("Subtraction", () => {
    it("Should return 2 when using subtraction function with a=7, b=5", () => {
      const result = mylib.subtraction(7, 5); // 7-5
      assert(result === 2); // result expected to equal 2
    });
  });

  describe("Multiplication", () => {
    it("Should return 4 when using multiplication function with a=2, b=2", () => {
      const result = mylib.multiplication(2, 2); // 2*2
      assert(result === 4); // result expected to equal 4
    });
  });

  describe("Division", () => {
    it("Should return 2 when using division function with a=10, b=5", () => {
      const result = mylib.division(10, 5); // 10 / 5
      assert(result === 2); // result expected to equal 2
    });

    it.skip("Should throw an error if b=0", () => {
      const result = () => mylib.division(1, 0); // 1 / 0
      expect(() => result()).to.throw(Error, "Divisor should not be zero"); // result expected to equal 2
    });
  });

  describe("Degree", () => {
    it("Should return 100 when using degree function with a=10, b=2", () => {
      const result = mylib.degree(10, 2); // 10 ** 2
      assert(result === 100); // result expected to equal 100
    });
  });

  describe("Modulo", () => {
    it("Should return 1 when using modulo function with a=7, b=2", () => {
      const result = mylib.modulo(7, 2); // 7 % 2
      assert(result === 1); // result expected to equal 1
    });
  });

  describe.skip("Random", () => {
    it("Should return result from 0 to 1", () => {
      const result = mylib.random(); // Math.random()
      expect(result).to.be.greaterThan(0);
      expect(result).to.be.lessThan(1); // result expected to be between 0 and 1
    });
  });

  // runs after all tests in this block
  after(() => console.log("Tests are done"));
});
