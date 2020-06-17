$(document).ready(function() {

  $("#answer").hide();
  var magic8Ball = {};
  magic8Ball.listOfAnswers = ["It is certain", "Yes-definitely.", "You may rely on it.", "Yes.", "Maybe, so?", "Cannot predict now.", "Ask later.", "Heck no!", "Hard pass."];

	magic8Ball.askQuestion = function(question) {
    $("#answer").fadeIn(4000);
    $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

    //create a random number
    var randomNumber = Math.random();

    //make the random number between 0 and number of items in your array
    var randomNumberArray = randomNumber * this.listOfAnswers.length;

    //round down the number to whole number
    var randomIndex = Math.floor(randomNumberArray);

    // use that number to index a random number from the answers array
    var randomAnswer = this.listOfAnswers[randomIndex];

    $("#answer").text(randomAnswer);

    console.log(question);
    console.log(randomAnswer);


    };

    var onClick = function() {
       var question = prompt("Ask for your fortune!");
       magic8Ball.askQuestion(question);
       $("#8ball").effect( "shake" );
    };

    $("#questionButton").click(onClick);
    $("#answer").hide();
    $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

   //wait half second b4 showing prompt
   setTimeout (
   function() {
     //show prompt
     var question = prompt ("Ask for Your Fortune")
     magic8Ball.askQuestion(question)
   }, 500);


});
