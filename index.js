function mapToNegativize(sourceArray)
{
    function collectionNegate(item, index){
        sourceArray[index] = item * -1;
    }

    sourceArray.forEach(collectionNegate);
    // let index = 0;

    // sourceArray.forEach(item => {
    //     sourceArray[index] = item * -1;
    //     index++;
    // })
    return sourceArray
}

function mapToNoChange(sourceArray)
{    
    //let returnArray = [...sourceArray];
    let returnArray = [];
    function populateReturnArray(item, index)
    {
        returnArray[index] = item;
    }
    sourceArray.forEach(populateReturnArray);

    return returnArray;
}

function mapToDouble(sourceArray)
{
    function doubleItems(item, index)
    {   
        sourceArray[index] = item * 2;
    }
    sourceArray.forEach(doubleItems);
    return sourceArray;
}

function mapToSquare(sourceArray)
{
    function squareItems(item, index)
    {   
        sourceArray[index] = Math.pow(item,2);
    }
    sourceArray.forEach(squareItems);
    return sourceArray;
}

function reduceToTotal(sourceArray, startingPoint = 0)
{
    let total = startingPoint;
    console.log(total);
    sourceArray.forEach(item => {
        total = total + item
    })
    return total;
}

function reduceToAllTrue(sourceArray)
{            
    for(let i = 0; i < sourceArray.length; i++)
    if(sourceArray[i] == false)
    {
        return false
    }
    return true;
}

function reduceToAnyTrue(sourceArray)
{
    for(let i = 0; i < sourceArray.length; i++)
    {
        if(sourceArray[i] == true)
        {
            return true;
        }
    }
    return false;
}

//let testArray = [1,2,3]

//console.log(mapToNegativize(testArray));

//console.log(reduceToTotal(testArray, 100));

tester = [1, 2, true, "razmatazz", false]
console.log(reduceToAllTrue(tester));