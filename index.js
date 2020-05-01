// Your code here
function mapToNegativize(sourceArray) {
    let array = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      array.push(-1 * sourceArray[i])
    }
    return array
}

function mapToNoChange(sourceArray) {
    let array = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      array.push(sourceArray[i])
    }
    return array
}

function mapToDouble(sourceArray) {
    let array = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      array.push(2* sourceArray[i])
    }
    return array
}

function mapToSquare(sourceArray) {
    let array = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      array.push(sourceArray[i]*sourceArray[i])
    }
    return array
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total=startingPoint

    for (let i = 0; i < sourceArray.length; i++ ) {
      total = total + sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    let check=true

    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]) {
      check = !!sourceArray[i]
        }
    }
    return check

}

function reduceToAnyTrue(sourceArray) {
    let check=false

    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) {
      check = !!sourceArray[i]
        }
    }
    return check

}