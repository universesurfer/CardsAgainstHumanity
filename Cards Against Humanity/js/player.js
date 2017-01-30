function Players (player1, player2) {
  this.player1 = [];
  this.player2 = [];
}

Players.prototype.createPlayerDecks = function(whiteCardsArray){
  this.player1 = whiteCardsArray.slice(0,5);
  this.player2 = whiteCardsArray.slice(5,11);
};
