/**
 * Replicate Array.prototype.filter and call it cFilter
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_filter.asp
 */

const solution = () => {

  Array.prototype.cFilter = function (cb, i = 0, arr = []) {
    if (i === this.length) {
      return arr;
    }
    if (cb(this[i], i, this)) {
      arr.push(this[i])
    }
  return this.cFilter(cb, i + 1, arr)
  }
}

module.exports = {
  solution
}
