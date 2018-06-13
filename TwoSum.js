/*
 * Algorithm
 * 
 */

const twoSum = (values, target) => {

    const hash = {};
    const result = [];

    for (let i = 0; i < values.length; i++) {

        if (hash[values[i]]) {

            result.push([hash[values[i]], values[i]]);
        }
        else {

            hash[target - values[i]] = values[i];
        }
    }

    return result;
};

/*
 * Use Case
 * 
 */

const values = [-4, 1, 6, 17, 12, 11, 8, 3, 7];
const target = 7;

console.log(`The TwoSum of [${values}] with the target of ${target} is [${twoSum(values, target)}]`);