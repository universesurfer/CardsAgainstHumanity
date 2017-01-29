var newGame = new CardsAgainstHumanity();
var players = new Players();
var whiteDeck = newGame.whiteCards;


$(document).ready (function() {

      $(".black-cards").on("click", function () {
      $(this).text(randomBlack());

    });

});


//Random Black Card
function randomBlack () {
  var random = newGame.blackCards[Math.floor(Math.random() * newGame.blackCards.length)];
  return random;

}

//CREATING WHITE DECKS FOR PLAYERS
//I'm using a for-loop to SPLICE 5 cards from the White Deck for each player.
function createPlayerDecks () {
    for (var i = 0; i < whiteDeck.length; i) {
    players.player1.push(whiteDeck.slice(0, 5));
    return players.player1;
  }
    for (j = 0; j < whiteDeck.length; j) {
    players.player2.push(whiteDeck.slice(6, 5));
    return players.player2;
    }

  }

createPlayerDecks();    //Why do I only receive the first array if I do not call the function?
