var newGame = new CardsAgainstHumanity();
var players = new Players();
var whiteDeck = newGame.whiteCards;


$(document).ready(function() {
  // console.log('heeeeeeeey');

  $(".black-cards").on("click", function () {
    $(this).text(newGame.randomBlack());
  });
  players.createPlayerDecks(newGame.whiteCards);
  // console.log(whiteDeck);
  console.log(newGame.shuffleDeck());        //Calling just 'shuffleDeck();' returned undefined, because the function must be called
                                             //with newGame.shuffleDeck();


  console.log(players);
});


//Random Black Card


// createPlayerDecks();    //Why do I only receive the first array if I do not call the function here?
