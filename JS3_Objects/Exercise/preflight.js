const allFuns = {};

const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2]
}

const firstLongerThan = (arr, num) => {
    return arr.find((e) => {
        return e.length > num
    })
}

const getReturnValues = (arr) => {
    return arr.map((e) => {
        return e()
    })
}

const zeroSquare = (num, arr = [], arr2 = []) => {
    for (let i = 0; i < num; i++) {
        arr.push(0);
        arr2.push(arr)
    }
    return arr2
}


allFuns.mergeArrays = mergeArrays;
allFuns.firstLongerThan = firstLongerThan;
allFuns.getReturnValues = getReturnValues;
allFuns.zeroSquare = zeroSquare;
module.exports = allFuns