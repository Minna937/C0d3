const allFuns = {};

const oddToZero = (arr) => {
    return arr.map((x) => {
        if (x % 2 !== 0) {
            return x = 0;
        }
        return x
    })
};

const firstLetters = arr => {
    return arr.map(x => {
        return x = x[0]
    }

    )
}

const nonPrimeToZero = arr => {
    const isPrime = (num, i = 2) => {
        if (num <= 1) { return false }
        if (num === 2) { return true }
        if (num <= i) { return true }
        if (num % i === 0) { return false }
        return isPrime(num, i + 1)
    }
    return arr.map(x => {
        if (isPrime(x)) { return x }
        return x = 0
    })
}

const append=(arr,str)=>{
    return arr.map((x)=>{
    return x = x + str;
    })}

const noMoreEvens = (arr)=>{
    return arr.filter(x=>{
        return x % 2 !== 0;
    })
}

const removeEmpty = arr =>{
    return arr.filter(x=>{
        return x !== ''
    })
}

allFuns.oddToZero = oddToZero;
allFuns.firstLetters = firstLetters;
allFuns.nonPrimeToZero=nonPrimeToZero;
allFuns.append = append;
allFuns.noMoreEvens = noMoreEvens;
allFuns.removeEmpty = removeEmpty;
module.exports = allFuns