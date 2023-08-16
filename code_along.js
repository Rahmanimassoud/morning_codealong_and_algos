
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

// console.log(longestWord);




// 2-write a function that returns a random number.
const getRandomNumber = () => {
  // make a random number
  // .random gives 0-1    .228   .999 .785
  // times 10!            22.8   99.9  78.5
  let randomNum = Math.floor(Math.random() * 100);
    return randomNum;
  // return it
}

let randomOne = getRandomNumber()
let randomTwo = getRandomNumber()
let randomThree = getRandomNumber()
let randomFour = getRandomNumber()
let randomFive = getRandomNumber()

// console.log(randomOne)
// console.log(randomTwo)
// console.log(randomThree)
// console.log(randomFour)
// console.log(randomFive)


// 3- write a function that will count the lenght of 3 strings
const answerOne = "lorem ipsum"
const answerTwo = "This is answer two"
const answerThree = "lorem ipsum three"

const returnCount = (ans1, ans2, ans3) => {
    return ans1.length + ans2.length + ans3.length
}

// let count1 = returnCount(answerOne, answerTwo, answerThree);

// let count2 = returnCount("hello", "im", "Chase");




// 4-Write a function that will count the letters of a string and add it to a total. 

// Step 1, declare a function.

// step2, inside the function, declare a variable total and set it to zero.


// step 3,remove the white spaces and other extra carectors from string.


// step 4, loop through the string and add to total

const countLet = (string)=>{
    total = 0;
    const stringWithNoSpace = string.replace(/\s+/g, "");
    for(let i = 0; i<stringWithNoSpace.length; i++){
        total++;
    }
    console.log(total);
};
// countLet("I'm going to work");


// 5-Write a function that will return True or False if a number is divisible by 3 & 5
const divisableNum = (number)=>{
    if(number % 3 === 0 && number % 5 === 0){
        return true;
    }
    return false
};
// console.log(divisableNum(15));


// 5-Vowel Counter: Write a function that takes a string as input and counts the number of vowels (a, e, i, o, u) in it. Add this count to a running total and return the updated total.

const vowelChecker = (string)=> {
    // step 1, convert the string to lowerCase.
    const lowerCaseString  = string.toLowerCase();
    let total = 0;
    for(let i =0; i<lowerCaseString.length; i++){
        // console.log(i)
        if(lowerCaseString[i] == "a" || lowerCaseString[i] == "e" || lowerCaseString[i] == "i" || lowerCaseString[i] == "o" || lowerCaseString[i] == "u"){
            total++
        }
    }
    return total;
};
// console.log(vowelChecker("aaaaeiou"));

// 6-Word Reverser: Build a function that takes a sentence (a string containing multiple words) as input and returns the sentence with the order of words reversed.
const wordReverser = (sentence)=>{
    // split the sentence/string into a words array.
    const words = sentence.split(" ");

    // reverse each word.
    const reversedWords = words.reverse();

    // join them back
    const reversedSentence = reversedWords.join(" ");
    return reversedSentence;
};
const originalSentence = "This is a sample sentence";
const reversed = wordReverser(originalSentence);
// console.log(reversed); 


// 7-Palindrome Detector: Write a function that checks if a given string is a palindrome (reads the same forwards and backwards). Return True if it is, and False otherwise.



// 8-Check temprature and change from C to f

const tempInCelsius =(fahrenheit)=>{
    let tempInCelsius = ((fahrenheit-32)/1.8)
    console.log(tempInCelsius + "°")
}
// tempInCelsius(89)



// FUNCTIONS AND ARRAYS==========

//1- Shopping List Organizer:
// let shoppingList = ['Apples', 'Milk', 'Bread', 'Eggs'];
// Write a function that will loop through the list and describe each element.
// Write a function that will add something to the list IF it is not already on the list. 
// Write a function that will remove something from the list

//2- Guest List Management: Develop an array to store the names of guests for an event. 
// let guestList = ['Alice', 'Bob', 'Charlie'];
// Write functions to add guests, 
// remove guests by name, 
// and check if a specific guest is on the list.


//3- High Scores Tracker: Develop an array to store high scores in a game. 
// let highScores = [1024, 876, 1500, 720, 950];
// Write functions to add new scores, 
// remove scores, 
// and display the top scores (a specific number of top scores).

//4- Student Roster: Create an array to store student grades. 
// let studentGrades = [85, 92, 78, 65, 90];
// Write functions to add new grades, 
// and calculate the average grade
// Get the highest and lowest grades
// Add 10% to grades under 70%


//4- Color Palette Creator: Develop an array to store color codes.
// let colorPalette = ['#FF5733', '#3498DB', '#27AE60', '#E74C3C', '#9B59B6'];
// Write a function to select a random color.

