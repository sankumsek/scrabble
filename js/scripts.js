var scrabbleScore = function(word){
  var letters = word.toLowerCase().split("");
  var score = 0;
  var key = {};
  var scoreone = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
  var scoretwo = ["d", "g"];
  var scorethree = ["b", "c", "m", "p"];
  var scorefour = ["f", "h", "v", "w", "y"];
  var scorefive = ["k"];
  var scoreeight = ["j", "k"];
  var scoreten = ["q", "z"];

  scoreone.forEach(function(scoreone){
    key[scoreone] = 1;
  });
  scoretwo.forEach(function(scoretwo){
    key[scoretwo] = 2;
  });
  scorethree.forEach(function(scorethree){
    key[scorethree] = 3;
  });
  scorefour.forEach(function(scorefour){
    key[scorefour] = 4;
  });
  scorefive.forEach(function(scorefive){
    key[scorefive] = 5;
  });
  scoreeight.forEach(function(scoreeight){
    key[scoreeight] = 8;
  });
  scoreten.forEach(function(scoreten){
    key[scoreten] = 10;
  });

  letters.forEach(function(letter) {
    score += key[letter];
  });

  return score;
};

$(document).ready(function(){
  $("form#wordInput").submit(function(event){
    var words = $("input#word").val();
    var result = scrabbleScore(words);

    $("#result").text(result);
    event.preventDefault();
  })
})
