/*
 * Algorithm
 * 
 */

const binarySearch = (list, target) => {

    list.sort((a, b) => a - b);
    
    let start = 0;
    let end = list.length - 1;
    let middle = Math.round((start + end) / 2);

    while (list[middle] !== target && start < end) {

        if (target < list[middle]) {
        
            end = middle - 1;
        }
        else {

            start = middle + 1;
        }

        middle = Math.round((start + end) / 2);
    }

    return (list[middle] === target) ? middle : -1;
};

/*
 * Use Case
 * 
 */

const list = [8, 2, 10, -19, 1, 4, -3, 32, 102, 18, 5];
const target = 1;

console.log(`The target ${target} appears at index ${binarySearch(list, target)} within the sorted list [${list}]`);