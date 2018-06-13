/*
 * Algorithm
 * 
 */

const sortBubble = (array) => {

    const valsLen = array.length;

    for (let i = 0; i < valsLen - 1; i++) {

        let isSorting = false;
        
        for (let j = 0; j < valsLen - 1 - i; j++) {
            
            if (array[j] > array[j + 1]) {

                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                isSorting = true;
            }
        }

        if (isSorting === false) {

            break;
        }
    }

    return array;
};

/*
 * Use Case
 * 
 */

const array = [-45, 67, 3, 55, 33, 1, 2, 7, -9, 784, -190, 87];

console.log(`[${array}] sorted are [${sortBubble(array)}]`);