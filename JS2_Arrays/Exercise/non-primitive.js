const allFuns = {};

const selectiveZero = (arr, num, i = 0) => {
    if (i === arr.length) {
        return arr
    }
    if (arr[i] === num) {
        arr[i] = 0;
        return selectiveZero(arr, num, i + 1)
    }
    return selectiveZero(arr, num, i + 1)
};

const largest = (arr, num, i = 0, counter = 1) => {
    if (arr.length === 0) { return }

    if (counter === arr.length) {
        return num
    }
    if (arr[i] >= arr[counter]) {
        num = arr[i];
        return largest(arr, num, i, counter + 1)
    }

    num = arr[counter];
    return largest(arr, num, i = counter, counter + 1)
}

const firstXToZero = (arr, num, i = 0) => {
    if (i === arr.length) {
        return arr
    }
    if (i < num) {
        arr[i] = 0;
        return firstXToZero(arr, num, i + 1)
    }
    return firstXToZero(arr, num, i + 1)
}

const allPrime = (arr, counter = 0) => {
    const isPrime = (num, i = 2) => {
        if (num <= 1) { return false }
        if (num === 2) { return true }
        if (num <= i) { return true }
        if (num % i === 0) { return false }
        return isPrime(num, i + 1)
    }
    if (counter === arr.length) { return true }
    if (isPrime(arr[counter])) {
        return allPrime(arr, counter + 1)
    }
    return false
}

const increasing = (arr, i = 0) => {
    if (i === arr.length - 1) { return true }
    if (arr[i] < arr[i + 1]) {
        return increasing(arr, i + 1)
    }
    return false
}



allFuns.selectiveZero = selectiveZero;
allFuns.largest = largest;
allFuns.firstXToZero = firstXToZero;
allFuns.allPrime = allPrime;
allFuns.increasing = increasing;
module.exports = allFuns