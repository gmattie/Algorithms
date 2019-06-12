/*
 * Algorithm
 * 
 */

const sieveOfEratosthenes = (n) => {

    /*
     * Create as markers array of length n filled with true flags.
     * 
     */

    const markers = new Array(n + 1).fill(true);
    
    /*
     * Starting at 2, which is the first prime number, iterate through the markers array.
     * If i is currently true set all remaining multiples of i to false.
     * 
     */

    for (let i = 2; i < Math.sqrt(n); i++) {
        
        if (markers[i]) {
            
            for (let j = i * i; j <= n; j += i) {
                
                markers[j] = false;
            }
        }
    }
    
    /*
     * Create and populate a results array with indices from the markers array that are 
     * marked as true, starting at 2, which is the first prime number.
     * 
     */

    const results = [];

    for (let i = 2; i <= markers.length; i++) {

        if (markers[i]) {
            
            results.push(i);
        }
    }

    return results;
};


/*
 * Use Case
 * 
 */

const targetNumber = 100;

console.log(`Prime numbers up to and including ${targetNumber}: [${sieveOfEratosthenes(targetNumber)}]`);