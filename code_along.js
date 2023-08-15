
//1. Longest Word Finder: Create a function that takes a sentence as input and returns the longest word in the sentence.


const findLongestWord = (sentence) => {
    if (sentence == '' || typeof sentence !== "string") {
        return
    }

    let arrayOfStrings = sentence.split(' ');
    let currentLongest = ''
    for (let i=0; i<arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length > currentLongest.length) {
            currentLongest = arrayOfStrings[i]
        } 
    }
    return currentLongest;
}

let longestWord = findLongestWord("What words are longest here?");

console.log(longestWord);