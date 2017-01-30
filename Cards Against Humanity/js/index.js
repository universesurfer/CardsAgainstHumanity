var newGame = new CardsAgainstHumanity();
var players = new Players();
var whiteDeck = newGame.whiteCards;


$(document).ready(function() {

  $(".black-cards").on("click", function () {
    $(".player-black").text(newGame.randomBlack());
  });


  //Start Button
  //Fades in the Player Div's When Clicked
  $(".start").on("click", function() {
    $(".container").fadeIn(1000);
  });



  players.createPlayerDecks(newGame.whiteCards);
  // console.log(whiteDeck);
  console.log(newGame.shuffleDeck());        //Calling just 'shuffleDeck();' returned undefined, because the function must be called
                                             //with newGame.shuffleDeck();



//WRITING PLAYER CARDS TO DIVS
for (var i = 0; i < players.player1.length; i++) {
  console.log(i);
    $('.player-one').append('<div class="player-white">' + players.player1[i] + '</div>');
}

for (var j = 0; j < players.player2.length; j++) {
  console.log(j);
    $('.player-two').append('<div class="player-white">' + players.player2[j] + '</div>');
}




// $(players.player1).each(function (index, value) {
//   $(".player-one", value).appendTo(".player-white");
// });


  console.log(players);
});









//Random Black Card


// createPlayerDecks();    //Why do I only receive the first array if I do not call the function here?


// <button onclick="numbers.forEach(myFunction)">Try it</button>
// <p id="demo"></p>
//
// <script>
// demoP = document.getElementById("demo");
// var numbers = [4, 9, 16, 25];
//
// function myFunction(item, index) {
//     demoP.innerHTML = demoP.innerHTML + "index[" + index + "]: " + item + "<br>";
// }
// </script>
