/*
 * Algorithm
 * 
 */

const caesarCipher = (encodedText, offset) => {

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alpLen = alphabet.length;
    
    /*
     * Limit the offset value within the scope of the alphabet length.
     * 
     */

    if (offset > alpLen) {
        
        offset %= alpLen;
    }
    else if (offset < 0) {
        
        offset = alpLen + offset % alpLen;
    }

    /*
     * Create a cipher alphabet using the offset value.
     * 
     */

    const alphabetLeft = alphabet.substring(0, Math.abs(offset));
    const alphabetRight = alphabet.slice(offset);
    const cipher = alphabetRight + alphabetLeft;

    /*
     * Apply the cipher to the encoded text and return the result.
     * 
     */
    
    let decodedText = "";

    for (let letter of encodedText) {

        decodedText += cipher.charAt(alphabet.indexOf(letter));
    }

    return decodedText;
};


/*
 * Use Case
 * 
 */

console.log(caesarCipher("abc", -49));