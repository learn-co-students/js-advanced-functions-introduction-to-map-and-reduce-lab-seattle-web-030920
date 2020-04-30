// Your code here
function mapToNegativize(sourceArray) {
    let newArray = []
    for (let index = 0; index < sourceArray.length; index++) {
        newArray.push(sourceArray[index] * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for (let index = 0; index < sourceArray.length; index++) {
        newArray.push(sourceArray[index])
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for (let index = 0; index < sourceArray.length; index++) {
        newArray.push(sourceArray[index] * 2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    for (let index = 0; index < sourceArray.length; index++) {
        newArray.push(sourceArray[index] ** 2)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let value = startingPoint
    for (let index = 0; index < sourceArray.length; index++) {
        value += sourceArray[index]
    }
    return value
}

function reduceToAllTrue(sourceArray) {
    for (let index = 0; index < sourceArray.length; index++) {
        if (!sourceArray[index]) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let index = 0; index < sourceArray.length; index++) {
        if (!!sourceArray[index]) {
            return true
        }
    }
    return false
}
