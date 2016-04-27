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