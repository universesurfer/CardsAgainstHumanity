function Players (player1, player2, playerOneScore, playerTwoScore) {
  this.player1 = [];
  this.player2 = [];

  this.playerOneScore = 0;
  this.playerTwoScore = 0;
}


Players.prototype.createPlayerDecks = function(newWhiteDeck){
  // newGame.shuffleDeck();
  this.player1 = newWhiteDeck.slice(0,7);
  this.player2 = newWhiteDeck.slice(7,14);
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
    $(".card-czar").children().hide();
    $(".card-czar").prepend('<img class="win-img" src="http://1.media.collegehumor.cvcdn.com/78/41/085672321fd51c6034353cb12754397a-hans-solo-again.jpg"/>');

    alert("Player One Wins...");
    console.log("Player One Wins...");
  }

  else if (awesomeTwoInteger > awesomeOneInteger) {
    $(".card-czar").children().hide();
    $(".card-czar").prepend('<img class="win-img" src="http://charts.stocktwits.com/production/original_52711289.png?1460436473"/>');

    alert("Player Two Wins...");
    console.log("Player Two Wins...");
  }

  else if (awesomeOneInteger === awesomeTwoInteger) {
    alert("Tie Game...");
    console.log("Tie Game...");
  }

};

Players.prototype.whoWon = function () {
  if (cardLengthOne === 0 && cardLengthTwo === 0) {
    this.compareScores();
  }
};
