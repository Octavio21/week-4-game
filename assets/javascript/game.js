var wins = 0;
var losses = 0;
var numberToGuess;
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;
var totalGuessed;

startGame();

$('.crystal1').click(function() {
    processClick(crystalValue1);
});

$('.crystal2').click(function() {
    processClick(crystalValue2);
});

$('.crystal3').click(function() {
    processClick(crystalValue3);
});

$('.crystal4').click(function() {
    processClick(crystalValue4);
});

function startGame() {
    numberToGuess = Math.floor((Math.random() * 120) + 1);
    crystalValue1 = Math.floor((Math.random() * 12) + 1);
    crystalValue2 = Math.floor((Math.random() * 12) + 1);
    crystalValue3 = Math.floor((Math.random() * 12) + 1);
    crystalValue4 = Math.floor((Math.random() * 12) + 1);
    totalGuessed = 0;
    
    $('#target').text(numberToGuess);
    $('#player').text(totalGuessed);
    
    $('#score').text('Wins: ' + wins + '   Losses: ' + losses);
}