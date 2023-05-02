/**
 * takes in 2 integers, create 2d array of objects. First integer represents how many nested arrays within the array. Second integer represents how many objects within each array.
 * solution(4,2)
 * returns:
 * [
    [{x: 0, y: 0}, {x: 1, y: 0}],
    [{x: 0, y: 1}, {x: 1, y: 1}],
    [{x: 0, y: 2}, {x: 1, y: 2}],
    [{x: 0, y: 3}, {x: 1, y: 3}],
  ]
 * @param {integer} num1 {integer} num2
 * @return {array} arr
 */

const createArr = (i, arr, result, num2) => {
  if (i === num2) {
    result.push(arr);
    return;
  }
  arr.push({ x: i, y: result.length });
  createArr(i + 1, arr, result, num2);
};

const solution = (num1, num2, result = []) => {
  if (result.length === num1) {
    return result;
  }
  const arr = [];
  createArr(i = 0, arr, result, num2);
  return solution(num1, num2, result);
};



module.exports = {
  solution
}
