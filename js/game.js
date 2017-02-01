

function CardsAgainstHumanity (blackCards, whiteCards) {
    this.blackCards = [
      "How did I lose my virginity?",
      "Why can't I sleep at night?",
      "What's that smell?",
      "I got 99 problems but ______________ ain't one.",
      "Maybe she's born with it.  Maybe it's ______________.",
      "What's the next Happy Meal toy?",
      "Here is the church. \n Here is the steeple. \n Open the doors \n And there is ________________.",
      "It's a pity that kids these days are all getting involved with _______________."
      ];

    this.whiteCards = [
      "Donald Trump",
      "Being on fire.",
      "Racism",
      "Old-people smell.",
      "Women in yogurt commercials",
      "Trump's micropenis",
      "Classist undertones",
      "Not giving a shit about the Third World",
      "Court ordered rehab.",
      "A windmill full of corpses."
    ];


}


// Shuffling the White Cards
CardsAgainstHumanity.prototype.shuffleDeck = function () {
    return _.shuffle(this.whiteCards);                        //Shuffle function using Lodash.
};

// function shuffleDeck () {
//   return _.shuffle(newGame.whiteCards);
// }

//Chooses a Random Black Card
CardsAgainstHumanity.prototype.randomBlack = function(){
    return this.blackCards[Math.floor(Math.random() * newGame.blackCards.length)];
};

// CardsAgainstHumanity.prototype.startNewGame = function () {
//     return this.shuffleDeck();
// };
