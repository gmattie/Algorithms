/*
 * Algorithm
 * 
 */

const sortMerge = (array) => {
    
    if (array.length === 1) {
        
        return array;
    }
    
    const halfArray = Math.floor(array.length / 2);
    const leftArray = sortMerge(array.slice(0, halfArray));
    const rightArray = sortMerge(array.slice(halfArray));
    
    return merge(leftArray, rightArray);
};

const merge = (leftArray, rightArray) => {

    const result = [];

    while (leftArray.length > 0 && rightArray.length > 0) {

        result.push((leftArray[0] < rightArray[0]) ? leftArray.shift() : rightArray.shift());
    }

    return result.concat((leftArray.length) ? leftArray : rightArray);
};

/*
 * Use Case
 * 
 */

const array = [-45, 67, 3, 55, 33, 1, 2, 7, -9, 784, -190, 87];

console.log(`[${array}] sorted are [${sortMerge(array)}]`);