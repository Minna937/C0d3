const allFuns = {};


const copyArray = (arr, i = 0, newArray = []) => {
    if (i >= arr.length) {
        return newArray
    };
    newArray.push(arr[i]);
    return copyArray(arr, i + 1, newArray)
}

const removeElement = (a, str, i = 0, result = []) => {
    if (i === a.length) {
        return result
    }
    if (a[i] === str) {
        return removeElement(a, str, i + 1, result)
    }
    result.push(a[i])
    return removeElement(a, str, i + 1, result)
}

const copyWithout = (a, num, i = 0, result = []) => {
    if (i === a.length) {
        return result
    }
    if (a[i] === num) {
        return copyWithout(a, num, i + 1, result)
    }
    result.push(a[i])
    return copyWithout(a, num, i + 1, result)
}

const copyReverse = (a, i = a.length, result = []) => {
    if (i === 0) {
        return result
    }
    result.push(a[i - 1])
    return copyReverse(a, i - 1, result)
}

const copyFirst = (a, num, i = 0, result = []) => {
    if (i >= a.length - num) {
        return result
    }
    result.push(a[i])
    return copyFirst(a, num, i + 1, result)
}

const copyLast = (a, num, result = []) => {
    if (num >= a.length) {
        return result
    }
    result.push(a[num])
    return copyLast(a, num + 1, result)
}


allFuns.copyArray = copyArray;
allFuns.removeElement = removeElement;
allFuns.copyWithout = copyWithout;
allFuns.copyReverse = copyReverse;
allFuns.copyFirst = copyFirst;
allFuns.copyLast = copyLast;
module.exports = allFuns