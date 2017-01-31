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
};

Players.prototype.awardPointTwo = function () {
    return this.playerTwoScore++;
};
