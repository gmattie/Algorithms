/*
 * Algorithm
 * 
 */

const reverseArray = (array) => {

    for (let a = 0, b = array.length - 1; a < array.length / 2; a++, b--) {

        [array[a], array[b]] = [array[b], array[a]];
    }

    return array;
};

/*
 * Use Case
 * 
 */

let array = ["ho", 2, 3, 5, {}, "text"];

console.log(`The array [${array}] reversed is [${reverseArray(array)}]`);