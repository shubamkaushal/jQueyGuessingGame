<!DOCTYPE html>
<html>
<head>
  <title>Guessing Game</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <style>
    body {
      background-color: white;
      transition: background-color 0.5s;
    }
    .content {
      text-align: center;
      padding-top: 100px;
    }
    #result {
      font-size: 24px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="content">
    <h1>Guessing Game</h1>
    <p>Guess a number between 1 and 10</p>
    <input type="number" id="guess" min="1" max="10">
    <button id="checkGuess">Guess</button>
    <div id="result"></div>
  </div>
  <script src="game.js"></script>
</body>
</html>


javascript
$(document).ready(function() {
  var numberToGuess = Math.floor(Math.random() * 10) + 1;

  $('#checkGuess').click(function() {
    var userGuess = $('#guess').val();

    if (userGuess == numberToGuess) {
      $('body').css('background-color', 'lightgreen');
      $('#result').text('Congrats! You guessed the number.');
    } else {
      $('body').css('background-color', 'red');
      $('#result').text('Sorry, try again.');
    }
  });
});
