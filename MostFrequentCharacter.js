/*
 * Algorithm
 * 
 */

const mostFrequentChar = (characters) => {

    const charsMap = new Map();

    for (let char of characters) {
        
        let memoVal = charsMap.get(char);
        charsMap.set(char, (memoVal) ? memoVal + 1 : 1);
    }
    
    const result = Array.from(charsMap.entries()).sort((a, b) => b[1] - a[1])[0];

    return {

        character: result[0],
        amount: result[1]
    };
};

/*
 * Use Case
 * 
 */

const target = "afnqwer908u-0ajs089noas-pfe42qno234r80fvnalsdnfn";
const result = mostFrequentChar(target);

console.log(`The most frequent character in "${target}" is "${result.character}" which appears ${result.amount} times`);
