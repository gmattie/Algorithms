/*
 * Algorithm
 * 
 */

const harmlessRansomNote = (message, letters) => {

    /*
     * Optimize the message and letters strings and convert them into separate arrays. 
     * 
     */ 

    const messageArray = message.toLowerCase().replace(/\W/g, "").split("");
    const lettersArray = letters.toLowerCase().replace(/\W/g, "").split("");

    /*
     * Create a set of unique letters from the message array. 
     * 
     */ 

    const messageSet = new Set(messageArray);

    /*
     * Iterate through the message set checking if the amount of letters is sufficient to create the message. 
     * 
     */ 

    for (let letter of messageSet) {

        if (messageArray.filter((l) => l === letter).length > lettersArray.filter((l) => l === letter).length) return false;
    }
    
    return true;
};

/*
 * Use Case
 * 
 */

console.log("Result:", harmlessRansomNote("Pay Money or Die", "eidroyenomyABC"));