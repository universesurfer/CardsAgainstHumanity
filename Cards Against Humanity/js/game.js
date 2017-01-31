

function CardsAgainstHumanity (blackCards, whiteCards, score) {
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

    this.score = 0;
    // this.playerOneScore = 0;
    // this.playerTwoScore = 0;

    // this.randomBlackCard();
    // shuffleDeck();
}


//Shuffling the White Cards
CardsAgainstHumanity.prototype.shuffleDeck = function () {
    return _.shuffle(this.whiteCards);                                //Shuffle function using Lodash.
};

//Chooses a Random Black Card
CardsAgainstHumanity.prototype.randomBlack = function(){
    return this.blackCards[Math.floor(Math.random() * newGame.blackCards.length)];
};


//Award Point to Corresponding Player When Card Czar Hits Their Select

      function playerOneClick() {
          $('body').on("click", ".card-czar .player-white .select-button", function () {
            console.log("Player One man");
          });
      }

      function playerTwoClick() {
          $('body').on("click", ".card-czar .player-white-2 .select-button", function () {
            console.log("Player Two Sucka");
          });
      }

CardsAgainstHumanity.prototype.awardPoint = function (player) {
    return player.this.score++;
};
