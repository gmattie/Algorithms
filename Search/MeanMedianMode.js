/*
 * Algorithm
 * 
 */

const meanMedianMode = (values) => {

    /*
    * Mean is the values array average
    * 
    */

    const mean = values.reduce((prev, curr) => prev + curr) / values.length;
    
    /*
    * Median represents the middle value, or the average of two middle values, of the sorted values array.
    * 
    */

    const valsLen = values.sort((a, b) => a - b).length;
    const median = (valsLen % 2 === 0) ? (values[valsLen / 2 - 1] + values[valsLen - valsLen / 2]) / 2 : values[Math.floor(valsLen / 2)];

    /*
    * Mode is the optional value or values that occur most often and more than once.
    * 
    */

    const valuesSet = new Set(values);
    const mode = [];
    let modeAmount = 2;

    for (let value of valuesSet) {

        const filter = values.filter((v) => v === value);
        const filtLen = filter.length;

        if (filtLen >= modeAmount) {

            if (filtLen > modeAmount) mode.length = 0;

            mode.push(value);
            modeAmount = filter.length;
        }
    }

    /*
    * Return all calculations.
    * 
    */

    return {

        mean: mean,
        median: median,
        mode: mode
    };
};


/*
 * Use Case
 * 
 */

const values = [-8, 0, 1, 2, 5, 5, 100, 102];
const result = meanMedianMode(values);

console.log(`[${values}] ==> Mean: ${result.mean}, Median: ${result.median}, Mode: [${result.mode}]`);