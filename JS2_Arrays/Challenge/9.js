/**
 * Replicate Array.prototype.reduce and call it cReduce
 * Documentation:
 *     Replicate Array.prototype.reduce and call it cReduce
 */

const solution = () => {
  Array.prototype.cReduce = function (cb, acc) {
    let i = 0;

    if (typeof acc === "undefined") {
      acc = this[0];
      i++;
    }

    const reduce = (i, acc) => {
      if (i === this.length) {
        return acc;
      }
      return reduce(i + 1, cb(acc, this[i], i, this));
    };

    return reduce(i, acc);
  };
};


module.exports = {
  solution
}
