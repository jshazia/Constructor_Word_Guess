var Letter = require("./letter.js");

function Word (newWord){
    this.newWord = newWord.split(" ").map(function(character){
        return new Letter(character);
    });

    this.showWord = function(){
        var currentGuess = [];

        for (i=0; i < this.newWord.length; i++){
            var addLetter = this.newWord[i].hideOrShow();
            currentGuess[i] = addLetter;
        }
        return currentGuess.join(" ");
    };

    this.userGuess = function (guessLetter){
        for (i = 0; i < this.newWord.length; i++){
            this.newWord[i].guessed(guessLetter);
        }
    };

}

module.exports = Word;