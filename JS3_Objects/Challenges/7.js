/*
 * write a map function for objects
 * @param {callback} cb
 * @returns {number}
*/

const solution = () => {
  Object.prototype.map = function (cb, i = 0, keys = Object.keys(this), arr = []) {
    if (i === keys.length) {
      return arr;
    }

    arr.push(cb(keys[i], this[keys[i]], i, this));
    return this.map(cb, i + 1, keys, arr)
  }
}

module.exports = {
  solution
}
