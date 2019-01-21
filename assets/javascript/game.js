//  variable and array  that will grabs letter from the data

var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var choosingLetter = "";
var letterToGuess = "";
//var numBlank = 0;
var guesses = [];
var blankAndSuccessses = [];


// Counting of the letter wins or losses
var correctLeter = 0;
var incorrectLetter = 0;
var guessesLeft = 9;


// Running reusable call back function.
function startGame() {
    letterToGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];
    // letterWord = choosingLetter.split("");
    // console.log(letterToGuess);
    //setting numBlack equal to the number of elements in the letterWord array
    //numBlank = letterWord.length;

    // Set back to zore after all letter guess
    letterLeft = 9;
    blankLetter = [];
    blankAndSuccessses = [];


    // for (var i = 0; i < numBlank; i++) {
    //     blankAndSuccessses.push("_");
    // }

    //call function to display values
    showOnScreen();   

}



function checkLetters(letter) {

    //check if the letter the user clicked is the same as the randomly generated letter
    if(letter === letterToGuess)
    {
        alert("You guessed the magic letter!")
    }
    else if (guesses.indexOf(letter) === -1)
    {
        //if the letter is not already in the guesses array add it
        guesses.push(letter);
    }

    showOnScreen();
}

function showOnScreen(){
    //display array of letters in DOM
    document.getElementById("letterGuess").innerHTML = guesses.join(",");
    document.getElementById("letterLeft").innerHTML = guessesleft;
    document.getElementById("correctLetter").innerHTML = correctLetter;
    document.getElementById("incorretLetter").innerHTML = incorrectLetter;
}

function roundcomplete() {
    //Run if the user win or not
    if (letterOptions.toString() === blackAndSuccesses.toString()) {
        winCounter++;
        alert("You Won");
        document.getElementById("winCounter").innerHTML = winCount;
        document.getElementById("win");
    }
    else if (guessesLeft === 0) {
    }
}

document.onkeyup = function (event) {
    var letterGuess = event.key.toUpperCase();
    //console.log(letterGuess)
    checkLetters(letterGuess);
}

startGame();


