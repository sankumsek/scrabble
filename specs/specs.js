describe("scrabbleScore", function(){
  it("takes a letter and returns its corresponding Scrabble Score", function(){
    scrabbleScore("j").should.equal(8);
  });

  it("takes a word and returns its corresponding Scrabble Score", function(){
    scrabbleScore("hello").should.equal(8);
  });

  it("takes a word with multiple cases and still returns a proper corresponding Scrabble Score", function(){
    scrabbleScore("HEllO").should.equal(8);
  });
});
