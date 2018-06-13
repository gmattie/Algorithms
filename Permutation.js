/*
 * Algorithm
 *
 */

const permute = (targetArray) => {

    let result = [];

    const permutation = (arr, m = []) => {

        if (arr.length === 0) {

            result.push(m);
        }
        else {

            for (let i = 0; i < arr.length; i++) {

                let curr = arr.slice();
                let next = curr.splice(i, 1);

                permutation(curr.slice(), m.concat(next));
            }
        }
    };

    permutation(targetArray);

    return result;
};


/*
 * Use Case
 *
 */

const randomArray = [55, "text", {}];

console.log(`A permutation of the array ${JSON.stringify(randomArray)} returns the following result: ${JSON.stringify(permute(randomArray))}`);