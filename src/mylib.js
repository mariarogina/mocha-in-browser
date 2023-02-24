export const mylib = {
  /**
   * Arrow function to sum 2 numbers
   * @param {Number} a is the first number
   * @param {Number} b is the second number
   * @return {Number} is the sum of a and b params
   *
   */
  sum: (a, b) => a + b,

  /**
   * Arrow function to subtract 2 numbers
   * @param {Number} a is the first number
   * @param {Number} b is the second number
   * @return {Number} is the substraction result of a and b params
   *
   */
  subtraction: (a, b) => a - b,

  /**
   * Arrow function to multiply 2 numbers
   * @param {Number} a is the first number
   * @param {Number} b is the second number
   * @return {Number} is the multiplication result of a and b params
   *
   */
  multiplication: (a, b) => a * b,

  /**
   * Arrow function to divide one number by another
   * @param {Number} a is the first number
   * @param {Number} b is the second number
   * @return {Number} is the division result of a and b params
   *
   */
  division: (a, b) => {
    if (b === 0) {
      throw new Error("Divisor should not be zero");
    } else {
      return a / b;
    }
  },

  /**
   * Arrow function to get one number to the power of another number
   * @param {Number} a is the first number
   * @param {Number} b is the second number
   * @return {Number} is the  result of a to b-th degree
   *
   */
  degree: (a, b) => a ** b,

  /**
   * Arrow function to find the remainder of the division of 2 numbers
   * @param {Number} a is the first number
   * @param {Number} b is the second number
   * @return {Number} is the remainder from division of a by b
   *
   */
  modulo: (a, b) => a % b,

  /**
   * Arrow function to return a random number
   *
   * @return {Number}
   *
   */
  random: () => Math.random(),
};
