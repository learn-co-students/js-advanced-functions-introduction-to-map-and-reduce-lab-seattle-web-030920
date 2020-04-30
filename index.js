// Your code here
const mapToNegativize = (arr) => {
    let result = []
    for (let num of arr) {
        result.push(num * -1)
    }
    return result
}

const mapToNoChange = (arr) => {
    let result = []
    for (let num of arr) {
        result.push(num)
    }
    return result
}

const mapToDouble = (arr) => {
    let result = []
    for (let num of arr) {
        result.push(num * 2)
    }
    return result
}

const mapToSquare = (arr) => {
    let result = []
    for (let num of arr) {
        result.push(num * num)
    }
    return result
}

function reduceToTotal(arr, start=0) {
    let result = start
    for (let i = 0; i < arr.length; i++) {
        // console.log(result)
        result = result + arr[i]
    }
    return result
}

function reduceToAllTrue(arr) {
    let result = true
    for (let val of arr) {
        if (!!val === false) {
            result = false
        }
    }
    return result
}

function reduceToAnyTrue(arr) {
    let result = false
    for (let val of arr) {
        if (!!val === true) {
            result = true
        }
    }
    return result
}