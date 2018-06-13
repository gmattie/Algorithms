/*
 * Algorithm
 * 
 */

const memoArray = [];
const memoizedFibonacci = (n) => {
    
    /*
     * Create a base of zero so the first calls to the recursive function avoid range errors within the memo array.
     * 
     */

    if (n <= 2) {
        
        return (n === 0) ? 0 : 1;
    }
    
    /*
     * Cache and/or return calculations to avoid redundant processing cycles.
     * 
     */

    if (!memoArray[n]) {

        memoArray[n] = memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1);
    }

    return memoArray[n];
};

/*
 * Use Case
 * 
 */

for (let i = 0; i <= 20; i++) {

 
    console.log(`${i}: ${memoizedFibonacci(i)}`);
}