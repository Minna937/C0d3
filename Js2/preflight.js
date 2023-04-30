

const allFuns = {};

const removeCharX = (str, num, counter = 0, result = "") => {

    if (counter === str.length) {
        return result
    }
    if (counter === num) {
        return removeCharX(str, num, counter + 1, result)
    }
    return removeCharX(str, num, counter + 1, result = result + str[counter]);
}

const less3Diff = (str1, str2, i = 0, counter = 0) => {

    if (i === str1.length) {
        return counter < 3
    }
    if (str1[i] !== str2[i]) {
        return less3Diff(str1, str2, i + 1, counter + 1)
    }
    i++;
    return less3Diff(str1, str2, i + 1, counter)
}
const primeMachine = (num1) => {

    const getNextPrime = (num1, i = 2, counter = 1) => {
        let num2 = num1 + counter;
        if (num1 <= 1) { return num2 = 2 }
        if (num2 % i !== 0) { return getNextPrime(num1, i + 1, counter) }
        if (num2 === i) { return num2 }
        return getNextPrime(num1, i = 2, counter + 1)
    }

    return () => {
        const num2 = getNextPrime(num1)
        num1 = num2;
        return num2
    }
}


allFuns.removeCharX = removeCharX;
allFuns.less3Diff = less3Diff;
allFuns.primeMachine = primeMachine;

module.exports = allFuns

