var newGame = new CardsAgainstHumanity();
var players = new Players();
var whiteDeck = newGame.whiteCards;

// JQUERY ACTION
$(document).ready(function() {

  $(".black-cards").on("click", function () {
    $(".player-black").text(newGame.randomBlack());
  });


  //Start Button
  //Fades in the Player Div's When Clicked
  $(".start").on("click", function() {
    $(".welcome").fadeOut(1000);
    $(".navbar").fadeIn(1250);
    $(".container").fadeIn(1250);

  });


  players.createPlayerDecks(newGame.whiteCards);




//WRITING PLAYER CARDS TO DIVS
//Writing Select Buttons to Divs
  for (var i = 0; i < players.player1.length; i++) {
    // console.log(i);
      var p = $('<p></p>');
      p.html(players.player1[i]);

      var button = $('<button></button>');
      button.addClass("select-button");
      button.html("select");

      var div = $("<div></div>");
      div.addClass("player-white");
      div.append(p);
      div.append(button);

      $(".player-one").append(div);

      // $('.player-one').append('<div class="player-white">' + p + '<button class="select-button">' + 'select' + '</button>' + '</div>');
  }

  for (var j = 0; j < players.player2.length; j++) {
    // console.log(j);
    var p = $('<p></p>');
    p.html(players.player2[j]);

    var button = $("<button></button>");
    button.addClass("select-button");
    button.html("select");

    var div = $("<div></div>");
    div.addClass("player-white-2");
    div.append(p);
    div.append(button);

    $(".player-two").append(div);


      // $('.player-two').append('<div class="player-white">' + players.player2[j] + '<button class="select-button">' + 'select' + '</button>' + '</div>');
  }



//SELECT BUTTON
//Moves selection to the Card-Czar card for decision.
//Selection by Card-Czar should award one point to corresponding player.
//We select 'body' first for our onclick event.  Bc we are creating dynamically,
//the later logic needs to start with the body to see if there's something that
//needs to be manipulated.  If we start with a class, such as 'card-czar', jquery
//doesn't see any changes.








//Write the Player Cards to their Deck
var switchDivOne;
var switchDivTwo;

  $("body").on("click", ".player-one .select-button", function () {
    switchDivOne = $(this).closest(".player-one > .player-white").addClass("player-one-czar").remove();
    $(".card-czar").append(switchDivOne);

  });

  $("body").on("click",".player-two .select-button", function () {
    console.log("player-two");
    switchDivTwo = $(this).closest(".player-two > .player-white-2").addClass("player-two-czar").remove();
    $(".card-czar").append(switchDivTwo);
  });



  $("body").on("click", ".card-czar .player-one-czar .select-button", function () {
      players.awardPointOne();

  });

  $("body").on("click", ".card-czar .player-two-czar .select-button", function () {
      players.awardPointTwo();

  });


//addNewClass to player's chosen card.
//Only want awarePoint to execute when Card Czar selects div.















  //Award Point to Corresponding Player When Card Czar Hits Their Select

//   function playerOneClick() {
//   $('body').on("click", ".card-czar .player-white .select-button", function () {
//     console.log("Player One Maaaaaan");
//   });
// }
// playerOneClick();
//
//
//   function playerTwoClick() {
//   $('body').on("click", ".card-czar .player-white-2 .select-button", function () {
//     console.log("Player Two Sucka");
//   });
// }
// playerTwoClick();


});
