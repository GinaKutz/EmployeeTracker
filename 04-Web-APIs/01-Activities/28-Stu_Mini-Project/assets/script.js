
var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

var possiblewords = ["testword", "guesses"]

function actualgame(){

    chosenWord = possiblewords[Math.floor(Math.random() * possiblewords.length)]
    wordsplit = chosenWord.split(" ")
    console.log(wordsplit)

    wordBlank.textContent = " "
    currentguess = [ ]

    for (let i=0; i < wordsplit.length; i++) {
        wordBlank.textContent = wordBlank.textContent + " _"
        curentguess.push(" _")

    }

    var timeInterval = setInterval function() {
        timer--

        if (timer <= 0) {
            clearInterval(timeInterval);

            if (isWin == false) {
                loseCounter++
            }
            else {winCounter++                                                                   }
        }
    }

    console.log(currentguess)

}

document.addEventListener('keydown', function (event) {

    var key = event.key.toLowerCase()

    if (wordsplit.includes(key)) {

        for (let i = 0; i < wordsplit.length; i++) {

            if (wordsplit[i] == key) {
                currentguess[i] = key
            }
        }
    }


})





}