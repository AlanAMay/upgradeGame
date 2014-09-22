// Checks if the users answer is correct

var names64,
		meleeNames,
		brawlNames,
		wiiUNames,
		rightGuesses,
		wrongGuesses;
rightGuesses = [];
wrongGuesses = [];

names64 = ["LUIGI", "MARIO", "DONKEY KONG", "LINK", "SAMUS", "CAPTAIN FALCON", "NESS", "YOSHI",
"KIRBY", "FOX", "PIKACHU", "JIGGLYPUFF"];

meleeNames = ["FOX", "FALCO", "SHEIK", "MARTH", "JIGGLYPUFF", "PEACH", "CAPTAIN FALCON",
 "ICE CLIMBERS", "DR. MARIO", "PIKACHU", "SAMUS", "GANONDORF", "LUIGI", "MARIO", "YOUNG LINK", 
 "LINK", "DONKEY KONG", "YOSHI", "ZELDA", "ROY", "MEWTWO", "MR. GAME AND WATCH", "NESS", 
 "BOWSER", "PICHU", "KIRBY"];

brawlNames =["FOX", "FALCO", "SHEIK", "MARTH", "JIGGLYPUFF", "PEACH", "CAPTAIN FALCON",
 "ICE CLIMBERS", "PIKACHU", "SAMUS", "GANONDORF", "LUIGI", "MARIO", "LINK", "DONKEY KONG", 
 "YOSHI", "ZELDA", "MR. GAME AND WATCH", "NESS", "BOWSER", "KIRBY", "CHARIZARD", "DIDDY KONG",
 "IKE", "IVYSAUR", "KING DEDEDE", "LUCARIO", "LUCAS", "META KNIGHT", "OLIMAR", "PIT", "R.O.B.",
 "SNAKE", "SONIC", "SQUIRLTE", "TOON LINK", "WARIO", "WOLF", "ZERO SUIT SAMUS"];

var $game = $('#userGame');
var $answer = $('#userAnswer');
var $correctList = $('#CorrectList');
var $wrongList = $('#WrongList');
var $win = $('#youWin');

function CheckAnswer(guess, answerArray){
	if(rightGuesses.indexOf(guess) > -1 || wrongGuesses.indexOf(guess) > -1){
		alert("You already guessed that");
	}
	else if(answerArray.indexOf(guess.toUpperCase())> -1){
		rightGuesses.push(guess);
		$correctList.append("<li>" + guess + "</li>");
	}
	else{
		wrongGuesses.push(guess);
		$wrongList.append("<li>" + guess + "</li>");
	}
}

function WinGame(rGuesses, aArray){
	if(rGuesses.length == aArray){
		$win.show;
	}
}

$(function(){
	$win.hide;
	$('#userGame').on('change', function(){
		$correctList.empty();
		$wrongList.empty();
		rightGuesses = [];
		wrongGuesses = [];
	});
	$('#userSub').on('click', function(){
		switch($game.val()){
			case 'smash64':
				CheckAnswer($answer.val(), names64);
				WinGame(rightGuesses, names64);
				break;
			case 'smashMelee':
				CheckAnswer($answer.val(), meleeNames);
				WinGame(rightGuesses, meleeNames);
				break;
			case 'smashBrawl':
				CheckAnswer($answer.val(), brawlNames);
				WinGame(rightGuesses, brawlNames);
				break;
			default:
				break;
		}
	});
});