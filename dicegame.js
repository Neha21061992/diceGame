function diceValue(){
  var dice = Math.floor(Math.random()*6+1)
  return dice;
}



function imageSelector(){
var diceRoll = diceValue();
document.getElementById('space1').src = "dice"+diceRoll+".png";
return diceRoll;
}

function imageSelector2(){
var diceRoll = diceValue();
document.getElementById('space2').src = "dice"+diceRoll+".png";
return diceRoll;
}

function diceGame(){
  var diceRoll1 = imageSelector();
  var diceRoll2 = imageSelector2();
  console.log(diceRoll1);
  console.log(diceRoll2);

  if(diceRoll1 === diceRoll2){
    document.getElementById('winnerMessage').innerHTML = "😁 It is a TIE.....";
    console.log("Tie");
  }
  else if (diceRoll1 > diceRoll2) {
    document.getElementById('winnerMessage').innerHTML= "😍 Player 1 Wins!!!!!!!";
    console.log("Player 1 Wins.");
  }
  else {
    document.getElementById('winnerMessage').innerHTML = "😍 Player 2 Wins!!!!!!!";
    console.log("Player 2 Wins.");
  }
}

//imageSelector(5);
