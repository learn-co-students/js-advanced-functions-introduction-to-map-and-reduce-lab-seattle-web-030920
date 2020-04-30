const reduceToTotal = (sourceArray, startingPoint=0) => {
    let memo = startingPoint
    for(let i = 0; i < sourceArray.length; i++){
        memo += sourceArray[i]
    }
    return memo
}


function reduceToAllTrue(sourceArray){
    let memo = true
    for(let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i] === false){
            memo = false 
            return memo 
        }
    }
    return memo
}


const reduceToAnyTrue = (sourceArray)=>{
    let memo = true
    for(let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i] === true){
            return memo 
        }
    }
    memo = false
    return memo
}








function mapToNegativize(sourceArray){
    let nuArr = []
    for(let i = 0; i < sourceArray.length; i++){
        nuArr.push(sourceArray[i] * -1)
    }
    return nuArr 
}


const mapToNoChange = (sourceArray) => {
    let nuArr = []
    for(let i = 0; i < sourceArray.length; i++){
        nuArr.push(sourceArray[i])
    }
    return nuArr
}


function mapToDouble(sourceArray){
    let nuArr = []
    for(let i = 0; i < sourceArray.length; i++){
        nuArr.push(sourceArray[i] * 2)
    }
    return nuArr
}


const mapToSquare = (sourceArray)=>{
    let nuArr = []
    for(let i = 0; i < sourceArray.length; i++){
        nuArr.push(sourceArray[i] ** 2)
    }
    return nuArr
}