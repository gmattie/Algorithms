/*
 * Algorithm
 * 
 */

const chunk = (targetArray, chunkSize) => {

    const result = [];
    let start = 0;

    while (start < targetArray.length) {

        result.push(targetArray.slice(start, start + chunkSize));
        start += chunkSize;
    }

    return result;
};

/*
 * Use Case
 * 
 */

const targetArray = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkSize = 2;
const chunkedArray = chunk(targetArray, chunkSize);

console.log(`[${targetArray}] split up in chunks of ${chunkSize} looks like this: ${JSON.stringify(chunkedArray)}`);