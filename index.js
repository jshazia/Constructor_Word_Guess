var inquirer = require("inquirer");
var Letter = require("./letter.js");
var Word = require ("./word.js");

var wordBank = ["dog", "cat","bird"];
var wordsLeft = 3;
var animal;
var randomWord;
var guessesLeft;
var guessesToWin;
var guessedLetters;

function newGame (){
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    guessesLeft = 10;
    guessesToWin = randomWord.length;
    animal = new Word (randomWord);
    console.log(animal.showWord());
}

var questions = [
    {
        type: 'input',
        name: 'userLetterGuess',
        message: "Guess a letter!"
    }
];

function ask(){
    inquirer.prompt(questions)
        .then (answers => {

            if (){
                guessesLeft --;
                console.log("Wrong! " + guessesLeft + " guesses remaining!");
            }

            if(guessesToWin === 0){
                console.log("You win!");
                newGame();
                wordsLeft--;

            }

            if (guessesLeft === 0){
                console.log("You lose!");
                newGame();
                wordsLeft --;
            }

            if (wordsLeft > 0){
                ask();
            }
            else {
                console.log("you guessed all of the animals!")
            }

        });
}

newGame();
ask();
