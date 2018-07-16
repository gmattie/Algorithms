/*
 * Algorithm
 * 
 */

const sortQuick = (array) => {

    if (!array.length) return [];

    const leftSide = [];
    const rightSide = [];
    const pivot = array[0];

    for (let i = 1; i < array.length; i++) {

        if (pivot > array[i]) {

            leftSide.push(array[i]);
        }
        else {

            rightSide.push(array[i]);
        }
    }

    return [].concat(sortQuick(leftSide), pivot, sortQuick(rightSide));
};

 /*
 * Use Case
 * 
 */

const array = [-45, 67, 3, 55, 33, 1, 2, 7, -9, 784, -190, 87];

console.log(`[${array}] sorted are [${sortQuick(array)}]`);