function myFunction() {
  var n = Math.floor( Math.random() * 6 ) + 1;
  var dice = "dice" + n + ".png"
  var diceImage = "images/" + dice;

  var I1 = document.querySelectorAll("img")[0];
  I1.setAttribute("src", diceImage);



  var m = Math.floor(Math.random()*6 ) + 1;
  var dice = "dice" + m + ".png";
  var diceImage = "images/" + dice;
  var I2 = document.querySelectorAll("img")[1];
  I2.setAttribute("src", diceImage);


  if (n > m){
    document.querySelector("h1").innerHTML="player 1 wins"
  }
  else if(m > n){
    document.querySelector("h1").innerHTML="player 2 wins"
  }
  else{
    document.querySelector("h1").innerHTML="draw"
  }
  setTimeout(function () {
    document.querySelector("h1").innerHTML="Refresh"
  } , 1000)
}
