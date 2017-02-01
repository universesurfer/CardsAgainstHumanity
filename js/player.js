function Players (score) {
  this.player1 = [];
  this.player2 = [];

  this.playerOneScore = 0;
  this.playerTwoScore = 0;
}

Players.prototype.createPlayerDecks = function(whiteCardsArray){
  this.player1 = whiteCardsArray.slice(0,5);
  this.player2 = whiteCardsArray.slice(5,11);
};

Players.prototype.awardPointOne = function () {
    return this.playerOneScore++;
};                                            //>Divide and Conquer

Players.prototype.awardPointTwo = function () {
    return this.playerTwoScore++;
};

//Check Card Lengths.  When Both lengths are 0, check and compare scores.
var cardLengthOne;
var cardLengthTwo;
Players.prototype.checkCardLengthOne = function () {
    cardLengthOne = $(".player-one").children().length;
      console.log(cardLengthOne);
      return cardLengthOne;

};

Players.prototype.checkCardLengthTwo = function () {
    cardLengthTwo = $(".player-two").children().length;
      console.log(cardLengthTwo);
      return cardLengthTwo;
};


Players.prototype.compareScores = function () {
  var awesomeOneInteger = Number($(".awesome-score-one").html());
  var awesomeTwoInteger = Number($(".awesome-score-two").html());

  if(awesomeOneInteger > awesomeTwoInteger) {
    console.log("Player One Wins...");
  }

  else if (awesomeTwoInteger > awesomeOneInteger) {
    console.log("Player Two Wins...");
  }

  else if (awesomeOneInteger === awesomeTwoInteger) {
    console.log("Tie Game...");
  }

};


Players.prototype.whoWon = function () {
  if (cardLengthOne === 0 && cardLengthTwo === 0) {
    this.compareScores();
  }
};
