var newGame = new CardsAgainstHumanity();
var players = new Players();
var clicked = new Audio();
var selectedCard = new Audio();
clicked.src = "https://www.soundjay.com/button/sounds/button-21.mp3";
selectedCard.src = "https://www.soundjay.com/button/sounds/button-30.mp3";

// JQUERY ACTION
$(document).ready(function() {

  //Fade In Our Welcome Elements
  $("body .welcome .welcome-wrapper").hide().fadeIn(1000);
  $("body .welcome .welcome-wrapper #title, #subtitle, #instructions, .start").hide();
  $("body .welcome .welcome-wrapper").fadeIn(1000);
  $("body .welcome .welcome-wrapper #title").fadeIn(2100);
  $("#subtitle").delay(2000).fadeIn(2100);
  $("#instructions").delay(2800).fadeIn(2100);
  $(".start").delay(5000).fadeIn(2100);
  // $("body .welcome .welcome-wrapper #instructions").fadeIn(2500);


  $(".black-cards").on("click", function () {
    $(".player-black").text(newGame.randomBlack());
    $(".card-czar .player-white, .card-czar .player-white-2").remove();
  });

  //Start Button
  //Fades in the Player Div's When Clicked
    $(".start").on("click", function() {
      $(".welcome").fadeOut(1000);
      $(".navbar").fadeIn(1250);
      $(".container").fadeIn(1250);
    });

  //Giving the Players White Cards
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
    clicked.play();
    switchDivOne = $(this).closest(".player-one > .player-white").addClass("player-one-czar").remove();
    $(".card-czar .card-container").append(switchDivOne);

    //Check player 1 card length after each card selection.
    players.checkCardLengthOne();


  });

  $("body").on("click",".player-two .select-button", function () {
    clicked.play();
    switchDivTwo = $(this).closest(".player-two > .player-white-2").addClass("player-two-czar").remove();
    $(".card-czar .card-container").append(switchDivTwo);

    //Check player 2 card length after each card selection.
    players.checkCardLengthTwo();
  });


//When the Card Czar Chooses a winning card, selection awards point to corresponding player.
  $("body").on("click", ".card-czar .player-one-czar .select-button", function () {
      selectedCard.play();
      players.awardPointOne();
      $(".awesome-score-one").text(players.playerOneScore);
      console.log(Number($(".awesome-score-one").html()));

      players.whoWon();

  });

  $("body").on("click", ".card-czar .player-two-czar .select-button", function () {
      selectedCard.play();
      players.awardPointTwo();
        $(".awesome-score-two").text(players.playerTwoScore);
        console.log($(".awesome-score-two").html());

      players.whoWon();
  });


  //NEW GAME BUTTON
  //We shuffle the deck of white cards, create the new player decks, and drop
  $("body").on("click", "#new-game", function() {
      clicked.play();
      var newDecks;
      newDecks = newGame.shuffleDeck();
      console.log(newDecks);
      players.createPlayerDecks(newDecks);
      $("body .player-one, body .player-two").empty();
      $(".awesome-score-one, .awesome-score-two").empty();
      players.playerOneScore = 0;
      players.playerTwoScore = 0;
      $(".player-black").empty();
      $(".card-container").empty();


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
}


      // set original array to shuffled deck, rewrite to divs...
      // window.location.reload();
  });














});
